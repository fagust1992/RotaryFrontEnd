import { useState, useEffect, useRef } from "react";
import { Global } from "../../helpers/Global";
import "../../assets/styles/Publications.css";

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));
const userId = user?.id;

const UserPublicationsComponent = () => {
  const [publications, setPublications] = useState([]);
  const [selectedPubId, setSelectedPubId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Referencia para el contenedor de edición
  const editContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        console.error("El ID de usuario no se encuentra en localStorage.");
        return;
      }

      const url = `${Global.url}publication/user/${userId}`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPublications(data.publications);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (id, text) => {
    setSelectedPubId(id);
    setEditedText(text);
    setIsEditing(true);
    setImageFile(null);

    // Desplazar hacia el contenedor de edición
    setTimeout(() => {
      editContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Esperar un pequeño margen para asegurar que la vista se actualice
  };

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleSaveText = async () => {
    if (!editedText || !selectedPubId) {
      alert("Por favor, ingresa un texto válido.");
      return;
    }

    try {
      const url = `${Global.url}publication/update/${selectedPubId}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ text: editedText }),
      });

      const data = await response.json();
      if (data.status === "success") {
        alert("Texto actualizado con éxito.");
        setPublications((prev) =>
          prev.map((pub) =>
            pub._id === selectedPubId ? { ...pub, text: editedText } : pub
          )
        );
        setIsEditing(false);
        setSelectedPubId(null);
      } else {
        alert("Error al actualizar el texto: " + data.message);
      }
    } catch (error) {
      console.error("Error updating text:", error);
      alert("Error al actualizar el texto.");
    }
  };

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!imageFile || !selectedPubId) {
      alert("Por favor, selecciona una publicación e imagen.");
      return;
    }

    const formData = new FormData();
    formData.append("file0", imageFile);

    try {
      const url = `${Global.url}publication/upload/${selectedPubId}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      });

      const data = await response.json();
      if (data.status === "success") {
        alert("Imagen subida con éxito.");
        setPublications((prev) =>
          prev.map((pub) =>
            pub._id === selectedPubId ? { ...pub, image: data.file } : pub
          )
        );
        setSelectedPubId(null);
      } else {
        alert("Error al subir la imagen: " + data.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error al subir la imagen.");
    }
  };

  return (
    <div>
      <h2>Tus Publicaciones disponibles:</h2>
      <p>Debe pichar la publicacion deseada para cambiar la imagen o modificar el texto.</p>
      <div className="publications-container">
        {publications.map((pub) => (
          <div
            key={pub._id}
            className="publication-card"
            onClick={() => handleSelect(pub._id, pub.text)}
            style={{
              cursor: "pointer",
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <img
              src={pub.image}
              alt={pub.text}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <p>{pub.text}</p>
          </div>
        ))}
      </div>

      {/* Contenedor de edición */}
      {isEditing && selectedPubId && (
        <div className="edit-container" ref={editContainerRef}>
          <h3>Modificar Texto para Publicación Seleccionada</h3>
          <textarea
            value={editedText}
            onChange={handleTextChange}
            rows="4"
            style={{ width: "100%" }}
          />
          <button onClick={handleSaveText}>Guardar Texto</button>
        </div>
      )}

      {/* Contenedor de subida de imagen */}
      {selectedPubId && (
        <div className="upload-container" ref={editContainerRef}>
          <h3>Subir Imagen para Publicación Seleccionada</h3>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Subir Imagen</button>
        </div>
      )}
    </div>
  );
};

export default UserPublicationsComponent;
