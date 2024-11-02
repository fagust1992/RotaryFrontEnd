import React from "react";
import Nav from "./Nav";
import "../../../assets/styles/nav.css"; // Importa tu archivo de estilos para el encabezado
import "../../../assets/styles/video.css"; // Importa tu archivo de estilos para el video
import Clip from "./Clip";

function Header() {
  return (
    <>
      <div className="nav-container">
        <Nav />
      </div>
      <header className="header-container">
       <Clip/>
      </header>
 
    </>
  );
}

export default Header;
