import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PrivateHeader from "./Privateheader";
import UseAuth from "../../../hooks/UseAuth";
import { Global } from "../../../helpers/Global";
import "../../../assets/styles/PrivadoLayotu.css";
import PrivadoFooter from "./PrivadoFooter";

const PrivateLayout = () => {
  const { auth } = UseAuth();
  const [imageUrl, setImageUrl] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && auth.user && auth.user.image !== "default.png") {
      const fetchImage = async () => {
        try {
          const response = await fetch(
            `${Global.url}user/avatar/${auth.user.image}`,
            {
              method: "GET",
              headers: {
                Authorization: token, // Asegúrate de incluir el token aquí
              },
            }
          );

          if (response.ok) {
            const blob = await response.blob(); // Obtener la imagen como blob
            const imageObjectURL = URL.createObjectURL(blob); // Crear un objeto URL para la imagen
            setImageUrl(imageObjectURL);
          }
        } catch (error) {
          console.error("Error de red", error);
        }
      };

      fetchImage();
    }
  }, [auth, token]);

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
            {imageUrl && <img src={imageUrl} alt={auth.user.name} />}
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

