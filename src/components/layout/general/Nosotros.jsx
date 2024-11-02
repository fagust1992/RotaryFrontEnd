import React from "react";
import imgBanner from "../../../assets/img/manos-sembrando.avif";
import Nav from "./Nav";
import "../../../assets/styles/nosotros.css";
import Gallery from "./Gallery";
import Footer from "./Footer";

export const Nosotros = () => {
  return (
    <>
      <Nav />
      <div className="custom-banner" style={{ backgroundImage: `url(${imgBanner})` }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="h2-sobre-nosotros">¡ <span className="texto1">Bienvenidos</span> a nuestra página de informacion"!</h2>
              <p className="p-sobre-nosotros">
                <span className="texto1">En Rotary  </span> Maipú,   <span className="texto2">nos dedicamos a servir a nuestra comunidad</span>   con compromiso y pasión.
             
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 information">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title">Quiénes Somos</h3>
            <p className="descripcion-sobre-nosotros">
              <span className="highlight">Rotary Maipú</span> es parte de <span className="highlight">Rotary International</span>, una organización global dedicada a la prestación de servicios humanitarios y al fomento de la paz y la comprensión en el mundo. Desde nuestra fundación en Maipú, nos hemos comprometido a mejorar la calidad de vida de nuestra comunidad a través de diversos proyectos de servicio y actividades de apoyo. Nos esforzamos por ser líderes en iniciativas locales que abordan necesidades sociales, educativas y sanitarias, trabajando en colaboración con socios estratégicos y voluntarios apasionados. En <span className="highlight">Rotary Maipú</span>, creemos en el poder del trabajo en equipo y la solidaridad para crear un impacto positivo y duradero en nuestro entorno.
            </p>

            <h3 className="section-title">Nuestra Misión</h3>
            <p className="descripcion-sobre-nosotros">
              Nuestra misión es proporcionar servicios humanitarios que beneficien a la comunidad de Maipú y promover la paz y la comprensión a nivel global. Nos dedicamos a identificar y abordar las necesidades más urgentes de nuestra comunidad a través de proyectos sostenibles y colaborativos.
            </p>

            <h3 className="section-title">Nuestros Valores</h3>
            <p className="descripcion-sobre-nosotros">
              En <span className="texto1">Rotary </span>Maipú, valoramos la integridad, la diversidad, el servicio y el liderazgo. Creemos que al trabajar juntos con un fuerte sentido de ética y responsabilidad, podemos lograr un cambio significativo y positivo en nuestra comunidad y en el mundo.
            </p>

            <h3 className="section-title">Proyectos Destacados</h3>
            <p className="descripcion-sobre-nosotros">
              A lo largo de los años, hemos llevado a cabo numerosos proyectos que han dejado una huella perdurable en Maipú. Desde programas de educación y capacitación hasta iniciativas de salud y bienestar, nuestros proyectos están diseñados para empoderar a las personas y fortalecer nuestra comunidad.
            </p>

            <h3 className="section-title">Únete a Nosotros</h3>
            <p className="descripcion-sobre-nosotros">
              Si compartes nuestra pasión por el servicio y deseas contribuir a mejorar la calidad de vida en Maipú, te invitamos a unirte a Rotary Maipú. Juntos, podemos hacer una diferencia y crear un futuro mejor para todos.
            </p>
          </div>
        </div>
      </div>
      <Gallery/>
      <Footer/>
    </>
  );
};
