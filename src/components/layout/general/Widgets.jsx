import React from "react";
import Animation from "../../../assets/animtation/Animations";
import imgworld from "../../../assets/img/icono-world.jpg";
import imgCleanedFloors from "../../../assets/img/t2.png";
import imgDolar from "../../../assets/img/icono-dolar.jpg";
import "../../../assets/styles/wigets.css";

export const Widgets = ({ display = "" }) => {
  return (
    <>
      <section className="row widgets justify-content-center">
        <div className="col-12 col-md-3 col-lg-3">
          <div className="card">
            <img
              src={imgworld}
              alt="Clientes Felices"
              className="card-img-top rounded-circle img-size"
            />
            <div className="card-body text-center">
              <h5 className="h5_widgets">CONECTAMOS A LAS PERSONAS</h5>
              <span className="num" data-val="1400000" id="img1">
                00
              </span>
              <p>1,4 millones de socios en todo el mundo</p>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>

        <div className="col-12 col-md-3 col-lg-3">
          <div className="card">
            <img
              src={imgCleanedFloors}
              alt="Pisos Limpiados"
              className="card-img-top rounded-circle img-size"
            />
            <div className="card-body text-center">
              <h5 className="h5_widgets">TRANSFORMAMOS COMUNIDADES</h5>
              <span className="num" data-val="47000000">
                00
              </span>
              <p className="card-text">
                Aproximadamente 47 millones de horas de trabajo voluntario cada
                año
              </p>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>

        <div className="col-12 col-md-3 col-lg-3">
          <div className="card">
            <img
              src={imgDolar}
              alt="Tapicería Sanitizada"
              className="card-img-top rounded-circle img-size"
            />
            <div className="card-body text-center">
              <h5 className="h5_widgets">FINANCIAMOS PROYECTOS SOSTENIBLES</h5>
              <span className="num" data-val="333000000">
                00
              </span>
              <p className="card-text">
                En el año 2020-2021 destinamos 333 millones de dólares a
                iniciativas de servicio en el mundo
              </p>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
      </section>
      <Animation />
    </>
  );
};

