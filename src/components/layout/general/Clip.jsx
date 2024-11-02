import React from "react";
import video from "../../../assets/video/videoplayback.mp4"; // Asegúrate de que la ruta del video sea correcta

const Clip = () => {
  return (
    <div className="header-video">
      <video muted autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Clip;
