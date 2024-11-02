import React from "react";
import "../../../assets/styles/wigets.css"; // Importa tu archivo de estilos CSS

const WidgetCard = ({ id, icon, title, text }) => {
  return (
    <div className="col- col-md-4">
      <div className="card widget-card">
        <img src={icon} className="card-img-top widget-card-img" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <span className="num" data-val="237" id={`num-${id}`}>
              000
            </span>
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
