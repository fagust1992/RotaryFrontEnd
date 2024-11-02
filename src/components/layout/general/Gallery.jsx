import React from "react";
import "../../../assets/styles/gallery.css"; // Importa tus estilos CSS aqu
import fightAgainstDiseases from "../../../assets/img/luhca-con-enfermedades.jpg";
import Peace from "../../../assets/img/paz-mundial.jpg";
import water from "../../../assets/img/agua-saludable.jpg";
import education from "../../../assets/img/apoyo-educacion.jpg";
import ProtectionEnvironment from "../../../assets/img/proteccion-medio-ambiente.png";
import ProtectionMotherChildren from "../../../assets/img/proteccion-madre-hijos.jpg";
import localEconomy from "../../../assets/img/economias-locales.jpg"
import  helpcommunity from "../../../assets/img/ayuda-comunidad.jpg"

const Gallery = () => {
  const images = [
    {
      id: 1,
      imageUrl: fightAgainstDiseases,
      description: "Lucha Contra Enfermedades",
    },
    {
      id: 2,
      imageUrl: Peace,
      description: "Paz",
    },
    {
      id: 3,
      imageUrl: water,
      description: "Suministro de Agua Salubre",
    },
    {
      id: 4,
      imageUrl: education,
      description: "Apoyo Educacion",
    },
    {
      id: 5,
      imageUrl: ProtectionMotherChildren,
      description: "Proteccion de madre e hijos",
    },
    {
      id: 6,
      imageUrl: ProtectionEnvironment,
      description: "Proteccion Ambiental",
    },
    {
      id: 7,
      imageUrl: localEconomy,
      description: "Economia Local",
    },
    
    {
        id: 8,
        imageUrl: helpcommunity,
        description: "Apoyo a La Comunidad",
      },
      
  ];

  return (
    <div className="grid-container">
      {images.map((image) => (
        <div
          key={image.id}
          className="grid-item"
          style={{ backgroundImage: `url(${image.imageUrl})` }}
        >
          <div className="image-description">
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
