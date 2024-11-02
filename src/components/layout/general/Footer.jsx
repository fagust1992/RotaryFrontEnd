import React from "react";
import "../../../assets/styles/footer.css"; // Importa tus estilos CSS aquí
import { Link } from "react-router-dom"; // Importa Link de React Router

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>Rotary</span>Maipú
          </h1>
          <p>
            Rotary Maipú se dedica a servir a la comunidad y promover la paz
            mundial a través de diversos proyectos y actividades.
          </p>
          <div className="contact">
            <span>&#9742; &nbsp; +56988000394</span>
            <span>&#9993; &nbsp; info.rotarymaipu@gmail.com</span>
          </div>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Enlaces Rápidos</h2>
          <ul>
            <li>
              <Link className="nav-link text-nav" to="/contacto">
                Contactanos
              </Link>
            </li>
            <li>
              <Link className="nav-link text-nav" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className="nav-link text-nav" to="/informacion">
               Informacion
              </Link>
            </li>
            <li>
              <Link className="nav-link text-nav" to="/noticias">
                Noticias
              </Link>
            </li>
           
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} rotarymaipu.cl | Diseñado por
        Francisco August
      </div>
    </footer>
  );
};

export default Footer;
