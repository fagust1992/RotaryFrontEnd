import React, { useState, useEffect } from "react";
import { Global } from "../../../helpers/Global";
import PrivateHeader from "../../layout/Privado/Privateheader";
import PrivadoFooter from "../../layout/Privado/PrivadoFooter";
import "../../../assets/styles/FileUpload.css"

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  console.log(token);
 // Obtener y actualizar autenticación
  // Hook para redirección

  useEffect(() => {
    // Suponiendo que el token está en localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("Por favor, selecciona un archivo para subir.");
      return;
    }

    const formData = new FormData();
    formData.append("file0", file);

    try {
      const response = await fetch(Global.url + "user/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: token,
        },
      
     
      });
      if (response) {
        setTimeout(() => {
          window.location.href = "/perfil"; 
        }, 2000);
        
      }
      if (!response.ok) {
        throw new Error("Error al subir el archivo");
      }

      const data = await response.json();
      setMessage("Archivo subido con éxito: " + data.message); // Asumiendo que la respuesta tiene un mensaje
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error al subir el archivo.");
    }
  };

  return (
    <div>
      <PrivateHeader/>
      
       <div className="form-foto-user">
       <form className="" onSubmit={handleSubmit}>
       <h2>Subir Archivo</h2>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Subir</button>
      </form>
       </div>
      
      {message && <p>{message}</p>}
      <PrivadoFooter/>
    </div>
  );
};

export default FileUpload;
