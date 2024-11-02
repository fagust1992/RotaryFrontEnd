import React from "react";
import "../../../assets/styles/FooterPrivador.css"; // Importa tus estilos CSS aquí
import { Link } from "react-router-dom"; // Importa Link de React Router

const PrivadoFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>Rotary</span>Maipú
          </h1>
          <p>
          Hola,

Si necesitas ayuda o asesoría, no dudes en comunicarte al número Rotary Maipu +56988000394. Estoy aquí para ayudarte.

¡Saludos!
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

   
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} RotaryMaipu /Seccion Privada
       
      </div>
    </footer>
  );
};

export default PrivadoFooter;

