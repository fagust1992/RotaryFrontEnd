import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";

const UserPublications = ({ limit = null }) => {
  const [publications, setPublications] = useState([]);
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const defaultImage =
    "https://m.media-amazon.com/images/I/71MhRrRPqfL._AC_UF894,1000_QL80_.jpg"; // Imagen por defecto

  useEffect(() => {
    fetchPublications(currentPage);
  }, [currentPage]);

  const fetchPublications = async (page) => {
    try {
      const response = await fetch(
        `${Global.url}publication/publications?page=${page}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching publications");
      }

      const data = await response.json();
      if (data.status === "success") {
        const allPublications = data.publications;

        // Aplica el límite si está definido
        const limitedPublications = limit
          ? allPublications.slice(0, limit)
          : allPublications;

        setPublications(limitedPublications);
        setTotalPages(data.totalPages);
      } else {
        setMessage(data.message || "Error loading publications.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error loading publications.");
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h2 className="mb-4">Publicaciones</h2>
        {message && <p className="alert alert-danger">{message}</p>}
        {publications.length > 0 ? (
          <ul className="list-group">
            {publications.map((pub) => (
              <li key={pub._id} className="list-group-item">
                <p>
                  <strong>Noticia:</strong> {pub.text}
                </p>
                <img
                  src={
                    pub.image === "default.png" ? defaultImage : pub.image
                  }
                  alt="Publication"
                  className="img-fluid"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay publicaciones disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default UserPublications;
