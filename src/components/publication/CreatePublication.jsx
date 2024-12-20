import React, { useState } from "react";
import { Global } from "../../helpers/Global";

const CreatePublication = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Obtén el token desde localStorage
    if (!token) {
      setMessage("Debes iniciar sesión para publicar.");
      return;
    }

    try {
      const response = await fetch(`${Global.url}publication/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Incluye el token en la cabecera
        },
        body: JSON.stringify({ text }),
      });

      const result = await response.json();
      if (result.status === "success") {
        setMessage("Publicación creada exitosamente.");
        setText(""); // Limpia el formulario
      } else {
        setMessage(result.message || "Error al crear la publicación.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Crear Publicación</h2>
      {message && <p className="alert alert-info">{message}</p>}
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Texto de la Publicación
          </label>
          <textarea
            id="text"
            name="text"
            className="form-control"
            rows="3"
            value={text}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Publicar2
        </button>
      </form>
    </div>
  );
};

export default CreatePublication;
