import React from "react";
import { NavLink } from "react-router-dom"; // Importa NavLink de React Router
import img_logueaser from "../../../assets/img/loguearse.png";
import logo from "../../../assets/img/rotary_sub_logo.svg";
import "../../../assets/styles/nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <NavLink className="navbar-brand" to="/">
        <img
          src={logo}
          className="LogoRotary"
          alt="Logo"
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link text-nav" to="/nosotros">
              Acerca de Rotary
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-nav" to="/informacion">
              Informacion General
            </NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link text-nav" to="/noticias">
              Noticias
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-nav" to="/contacto">
              Contactanos
            </NavLink>
          </li>
        
   
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              <img
                src={img_logueaser}
                className="rounded-circle"
                alt="Imagen de perfil"
              />
            </NavLink>
          </li>
          <li className="nav-item dropdown text-dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/socios"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <strong>Para Socios</strong>
            </NavLink>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <NavLink className="dropdown-item" to="/login">
                  Inicia Seccion
                </NavLink>
              </li>
             
              <li>
                <hr className="dropdown-divider" />
              </li>
        
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
