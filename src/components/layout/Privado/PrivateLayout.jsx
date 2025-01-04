import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PrivateHeader from "./Privateheader";
import UseAuth from "../../../hooks/UseAuth";

import "../../../assets/styles/PrivadoLayotu.css";
import PrivadoFooter from "./PrivadoFooter";

const PrivateLayout = () => {
  const { auth } = UseAuth();

  return (
    <>
      <PrivateHeader />
      <h1 className="text-center">Sección Privada para socios</h1>
      <section className="layout_content">
        {auth && auth.user ? (
          <div>
            <h2>Nombre: {auth.user.name}</h2>
            <p>Apellido: {auth.user.surname}</p>
            <p>Nick: {auth.user.nick}</p>
            <p>Email: {auth.user.email}</p>
            <img src={auth.user.image} alt="" width={"300"} height={"300"} />
          </div>
        ) : (
          <div>Cargando datos del usuario...</div>
        )}
        <Outlet />
      </section>
      <PrivadoFooter />
    </>
  );
};

export default PrivateLayout;
