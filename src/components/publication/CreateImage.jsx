import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import "../../assets/styles/Publications.css"; //COMPONENTE DE PUBLICACIONES USUARIOS.....

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));
const userId = user?.id;

const UserPublicationsComponent = () => {
  const [publications, setPublications] = useState([]);
  const [selectedPubId, setSelectedPubId] = useState(null); // ID de la publicación seleccionada
  const [imageFile, setImageFile] = useState(null); // Archivo de imagen

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

  const handleSelect = (id) => {
    setSelectedPubId(id);
    setImageFile(null); // Reiniciar archivo seleccionado
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
      <h2>Publicaciones</h2>
      <div className="publications-container">
        {publications.map((pub) => (
          <div
            key={pub._id}
            className="publication-card"
            onClick={() => handleSelect(pub._id)}
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

      {selectedPubId && (
        <div className="upload-container">
          <h3>Subir Imagen para Publicación Seleccionada</h3>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Subir Imagen</button>
        </div>
      )}
    </div>
  );
};

export default UserPublicationsComponent;
