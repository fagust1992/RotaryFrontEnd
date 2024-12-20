import React from 'react';
import { Link } from 'react-router-dom';
import "../../../assets/styles/Headerprivado.css"

const PrivateHeader = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/registro" className="link">Registrar</Link>
        <Link to="/save" className="link">Publicar Noticias</Link>
        <Link to="/modificar" className="link">Modificar foto usuario</Link>
     
      </nav>
      <button onClick={handleLogout} className="logoutButton">
        Cerrar Sesión
      </button>
    </header>
  );
};

const handleLogout = () => {
  // Lógica para cerrar sesión
  console.log('Sesión cerrada');
};

export default PrivateHeader;
