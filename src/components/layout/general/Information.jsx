import React from "react";
import Nav from "./Nav";
import img1 from "../../../assets/img/rotary-maipu.png";
import img2 from "../../../assets/img/fomentar-paz.avif";
import img3 from "../../../assets/img/suministro-de-agua.avif";
import img4 from "../../../assets/img/derecho-educacion.jpg";
import img5 from "../../../assets/img/salud-infantil.jpg";
import img6 from "../../../assets/img/desarollo-economico.jpg";
import img7 from "../../../assets/img/proteccion-al-ambiente.jpg";
import img8 from "../../../assets/img/rotary-9.png";
import "../../../assets/styles/information.css";
import Footer from "./Footer";

export const Information = () => {
  return (
    <>
      <Nav />
      <div className="container  mt-5 background-container" >
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h1>Bienvenidos a Rotary Maipú</h1>
            <p>
              Rotary es una organización mundial de voluntarios dedicada a
              abordar los problemas humanitarios más apremiantes. Fundada en
              1905, Rotary reúne a líderes empresariales y profesionales con el
              objetivo de brindar servicios humanitarios, fomentar la ética en
              todas las ocupaciones y promover la buena voluntad y la paz en el
              mundo.
            </p>
          </div>
          <div className="col-lg-6 mb-4">
            <img src={img1} className="img-fluid rounded" alt="Rotary" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={img4} className="card-img-top" alt="Proyecto 1" />
              <div className="card-body">
                <h5 className="card-title">Promoción de la educación</h5>
                <p className="card-text">
                  Más de 775 millones de personas mayores de 15 años enfrentan
                  el desafío del analfabetismo a nivel global. Nuestra misión es
                  inspirar a las comunidades a respaldar programas de
                  alfabetización y educación básica, promoviendo la igualdad de
                  género en la educación y aumentando las tasas de
                  alfabetización entre adultos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={img2} className="card-img-top" alt="Proyecto 2" />
              <div className="card-body">
                <h5 className="card-title">Fomentar la paz</h5>
                <p className="card-text">
                  Rotary impulsa el diálogo para fortalecer la comprensión
                  internacional entre diferentes pueblos y culturas. Apoyamos la
                  capacitación de líderes jóvenes y adultos para que puedan
                  desempeñar roles activos en la prevención y mediación de
                  conflictos, además de proporcionar apoyo vital a refugiados
                  que buscan seguridad en momentos de crisis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={img3} className="card-img-top" alt="Proyecto 3" />
              <div className="card-body">
                <h5 className="card-title">Suministro de agua</h5>
                <p className="card-text">
                  Nos comprometemos a respaldar iniciativas locales que amplíen
                  el acceso de las comunidades al agua potable, saneamiento e
                  higiene. Más que simplemente construir pozos, trabajamos codo
                  a codo con líderes y educadores locales para garantizar la
                  sostenibilidad de nuestros proyectos, compartiendo nuestras
                  experiencias y conocimientos
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card2">
              <img src={img5} className="card-img-top" alt="Proyecto 3" />
              <div className="card-body">
                <h5 className="card-title">Salud materno-infantil</h5>
                <p className="card-text">
                  Cada año, aproximadamente seis millones de niños menores de
                  cinco años fallecen debido a la desnutrición, la falta de
                  atención médica y el acceso limitado a servicios de
                  saneamiento adecuados. Al mejorar el acceso a servicios de
                  salud de calidad, contribuimos a asegurar que madres e hijos
                  vivan una vida saludable y vigorosa
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={img6} className="card-img-top" alt="Proyecto 3" />
              <div className="card-body">
                <h5 className="card-title">
                  Desarrollo de las economías locales
                </h5>
                <p className="card-text">
                  Nos comprometemos a respaldar iniciativas locales que amplíen
                  el acceso de las comunidades al agua potable, saneamiento e
                  higiene. Más que simplemente construir pozos, trabajamos codo
                  a codo con líderes y educadores locales para garantizar la
                  sostenibilidad de nuestros proyectos, compartiendo nuestras
                  experiencias y conocimientos
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={img7} className="card-img-top" alt="Proyecto 3" />
              <div className="card-body">
                <h5 className="card-title">Proteccion al Ambiente</h5>
                <p className="card-text">
                  Los socios de Rotary abordan las cuestiones ambientales con su
                  característico compromiso: proponiendo proyectos, utilizando
                  sus influencias para influir en políticas y planeando para un
                  futuro sostenible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container background-container">
      <div className="row justify-content-center">
        <div className="col-lg-6 mb-4 text-center">
          <img src={img8} className="img-fluid rounded img8-info small-img" alt="Rotary" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 mb-4 text-center">
          <h1>Bienvenidos a Rotary Maipú</h1>
          <p>
            Rotary es una organización mundial de voluntarios dedicada a abordar los problemas humanitarios más apremiantes. Fundada en 1905, Rotary reúne a líderes empresariales y profesionales con el objetivo de brindar servicios humanitarios, fomentar la ética en todas las ocupaciones y promover la buena voluntad y la paz en el mundo.
          </p>
          <p>
            <strong>¿Qué Hacemos?</strong><br />
            En Rotary Maipú, nos dedicamos a:
          </p>
          <p>
            <strong>Promover la educación:</strong> Implementamos programas de apoyo escolar y becas para estudiantes.<br />
            <strong>Fomentar la salud:</strong> Organizamos campañas de vacunación, donación de sangre y donaciones de insumos médicos.<br />
            <strong>Apoyar el desarrollo económico:</strong> Facilitamos recursos y mentoría para emprendedores locales.<br />
            <strong>Cuidar el medio ambiente:</strong> Lideramos iniciativas de reforestación y reciclaje para crear un entorno más sostenible.
          </p>
        </div>
      </div>
    </div>

      <Footer />
    </>
  );
};