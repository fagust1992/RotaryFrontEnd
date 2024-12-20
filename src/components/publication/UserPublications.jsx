import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import Header from "../layout/general/Header";


const UserPublications = () => {
  const [publications, setPublications] = useState([]);
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
        setPublications(data.publications);
        setTotalPages(data.totalPages);
      } else {
        setMessage(data.message || "Error loading publications.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error loading publications.");
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h2 className="mb-4">Publicaciones</h2>
        {message && <p className="alert alert-danger">{message}</p>}
        {publications.length > 0 ? (
          <>
            <ul className="list-group">
              {publications.map((pub) => (
                <li key={pub._id} className="list-group-item">
                  <p><strong>Noticia:</strong> {pub.text}</p>
                  {pub.image && (
                    <img
                      src={pub.image}
                      alt="Publication"
                      className="img-fluid"
                      style={{ maxWidth: "200px", maxHeight: "200px" }}
                    />
                  )}
              
                </li>
              ))}
            </ul>
            <div className="pagination mt-4">
              <button
                className="btn btn-primary me-2"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              <span>Página {currentPage} de {totalPages}</span>
              <button
                className="btn btn-primary ms-2"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Siguiente
              </button>
            </div>
          </>
        ) : (
          <p>No hay publicaciones disponibles.</p>
        )}
      </div>
  
  
    </div>
  );
};

export default UserPublications;
