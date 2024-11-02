// Banner.js
import React from "react";
import "../../../assets/styles/banner.css"; // Si deseas agregar estilos personalizados
import "../../../assets/styles/BannerWithImage.css";
import "../../../assets/styles/news.css";
import "../../../assets/styles/paragraph.css";
import Img from "../../../assets/img/niños-ayudando.jpg";
import Img2 from "../../../assets/img/noticia1.jpg";
import Img3 from "../../../assets/img/notcia2.jpg";
import Img4 from "../../../assets/img/noticia4.jpg";
import Img5 from "../../../assets/img/noticia5.jpg";
import Img6 from "../../../assets/img/noticia6.jpg";
import Img7 from "../../../assets/img/noticia7.jpg";
import Img8 from "../../../assets/img/noticia8.jpg";
import Img9 from "../../../assets/img/noticia9.jpg";
import Img10 from "../../../assets/img/noticia10.jpg";
import Img11 from "../../../assets/img/noticia11.jpg";
import Img12 from "../../../assets/img/noticia12.jpg";

const Banner = () => {
  return (
    <div className="banner-container text-center p-5 bg-light">
      <div className="container">
        <h1 className="display-4">Bienvenido a Rotary Club Maipú</h1>
        <p className="lead">
          Rotary Maipú se dedica a servir a la comunidad, promoviendo la paz y
          la comprensión a través de proyectos locales e internacionales. Únete
          a nosotros y sé parte del cambio.
        </p>
      </div>
    </div>
  );
};
const BannerWithImage = () => {
  return (
    <div className="banner-with-image-container d-flex align-items-center p-5 bg-light">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="text-content mb-4 mb-md-0">
          <h1 className="display-4">Rotary Club Maipú</h1>
          <p className="lead">
            Rotary Maipú se dedica a servir a la comunidad, promoviendo la paz y
            la comprensión a través de proyectos locales e internacionales.
            Únete a nosotros y sé parte del cambio.
          </p>
        </div>
        <div className="image-content">
          <img src={Img} alt="Rotary Maipú" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
// luego la elimanare traere de publicaciones bacekn
const News = ({ showAll = false }) => {
  const allNews = [
    {
      id: 1,
      title: "Nueva campaña de vacunación apoyada por Rotary",
      content:
        "Rotary Maipú ha organizado un evento benéfico para recaudar fondos destinados a la mejora de la educación en nuestra comunidad. Apóyanos en esta noble causa.",
      img: Img7,
    },
    {
      id: 2,
      title: "Rotary Club Maipú ayuda a reconstruir viviendas",
      content:
        "Rotary Club Maipú está liderando una nueva iniciativa para reforestar áreas afectadas por la deforestación. Únete a nuestros esfuerzos para restaurar el medio ambiente.",
      img: Img8,
    },
    {
      id: 3,
      title: "Rotary Maipú apoya a emprendedores locales",
      content:
        "Rotary Club Maipú está liderando una nueva iniciativa para reforestar áreas afectadas por la deforestación. Únete a nuestros esfuerzos para restaurar el medio ambiente.",
      img: Img3,
    },
    {
      id: 4,
      title: "Rotary Club Maipú y la lucha contra la desnutrición",
      content:
        "Rotary Maipú ha lanzado una nueva iniciativa para fomentar el reciclaje y reducir los desechos. Aprende cómo puedes contribuir a un futuro más sostenible.",
      img: Img4,
    },
    {
      id: 5,
      title: "Rotary Club Maipú y la lucha contra la desnutrición",
      content:
        "En su lucha contra la desnutrición, Rotary Club Maipú está implementando programas de nutrición para niños y familias necesitadas. Apoya nuestra causa.",
      img: Img5,
    },
    {
      id: 6,
      title: "Campaña de donación de sangre:",
      content:
        "El Rotary Maipú, en conjunto con el Club de Leones y la Municipalidad de Maipú, organizó una jornada de donación de sangre en junio de 2024. Esta actividad incluyó un taller informativo sobre la importancia de la donación de sangre y una colecta para el público genera",
      img: Img10,
    },
    {
      id: 7,
      title: "Iniciativa de Rotary Maipú fomenta el reciclaje",
      content:
        "Rotary Maipú está apoyando a emprendedores locales con recursos y mentoría para ayudarles a prosperar. Descubre cómo estamos impulsando el crecimiento económico.",
      img: Img9,
    },
    {
      id: 8,
      title: "Rotary Club Maipú y la lucha contra la desnutrición",
      content:
        "Rotary Maipú celebra su aniversario con una serie de proyectos comunitarios que buscan mejorar la calidad de vida de los residentes locales. Sé parte de esta celebración.",
      img: Img11,
    },
    {
      id: 9,
      title: "Donación de insumos de salud y educación",
      content:
        "El Rotary de Las Heras, colaborando con la Comuna, donó sillones odontológicos y módulos educativos especiales. Esta donación está destinada a las zonas más vulnerables y a una escuela en Uspallata, promoviendo la salud y la educación en",
      img: Img12,
    },
    {
      id: 10,
      title: "Rotary Maipú celebra aniversario con proyectos comunitarios",
      content:
        "Rotary Maipú ha organizado un evento benéfico para recaudar fondos destinados a la mejora de la educación en nuestra comunidad. Apóyanos en esta noble causa.",
      img: Img2,
    },
  ];

  // Decide cuántas noticias mostrar en base a la prop showAll
  const newsToDisplay = showAll ? allNews : allNews.slice(0, 5);

  return (
    <>
      <p className="styled-paragraph2 text-center">
        Bienvenidos a nuestra sección de noticias. Aquí encontrarás las últimas
        actualizaciones sobre nuestros eventos, proyectos y actividades
        comunitarias. Mantente informado sobre cómo estamos trabajando juntos
        para mejorar nuestra comunidad.
      </p>
      {newsToDisplay.map((newsItem) => (
        <div
          key={newsItem.id}
          className="banner-with-image-container2 news d-flex align-items-center p-5 bg-light"
        >
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="text-content mb-4 mb-md-0">
              <h6 className="display-4">{newsItem.title}</h6>
              <p className="lead">{newsItem.content}</p>
            </div>
            <div className="image-content">
              <img
                src={newsItem.img}
                alt={newsItem.title}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { Banner, BannerWithImage, News };
