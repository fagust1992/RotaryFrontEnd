import React from 'react';
import { Link } from 'react-router-dom';
import "../../../assets/styles/Headerprivado.css";

const PrivateHeader = () => {
  const handleLogout = () => {
    // Eliminar token y datos del usuario del localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirigir al usuario al login mediante recarga completa
    window.location.href = "/login"; // Redirige al login
    console.log('Sesión cerrada');
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/registro" className="link">Registrar</Link>
        <Link to="/save" className="link">Publicar Noticias</Link>
        <Link to="/modificar" className="link">Modificar foto usuario</Link>
        <Link to="/userPosts" className="link">Modificar Imagen de la publicacion</Link>
      </nav>
      <button onClick={handleLogout} className="logoutButton">
        Cerrar Sesión
      </button>
    </header>
  );
};

export default PrivateHeader;
