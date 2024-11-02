import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { PublicLayout } from "../components/layout/general/PublicLayout";
import { Login } from "../components/user/Login";
import ContactForm from "../components/layout/general/ContactForm";
import { AuthProvider } from "../context/AuthProvider";
import { Reports } from "../components/layout/general/Reports";
import { Information } from "../components/layout/general/Information";
import { Nosotros } from "../components/layout/general/Nosotros";
import { PerfiUser } from "../components/layout/Privado/PerfiUser";
import GeneradorPDF from "../components/layout/general/GeneradorPDF";
import MaintenancePage from "../components/layout/general/MaintenancePage";
import { Register } from "../components/user/Privado/Register";
import ScrollToTop from "../components/layout/general/ScrollToTop";

import FileUpload from "../components/user/Privado/FileUpload";
import UserPublications from "../components/publication/UserPublications";


const AppRoutes = () => {


  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const isAuthenticated = token && user;

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/perfil" /> : <PublicLayout />
          }
        />

        <Route path="/contacto" element={<ContactForm />} />
        <Route path="/noticias" element={<Reports />} />
        <Route
          path="/informacion"
          element={isAuthenticated ? <Navigate to="/perfil" /> : <Nosotros />}
        />
        <Route path="/nosotros" element={<Information />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/perfil" /> : <Login />}
        />

        <Route
          path="/perfil"
          element={isAuthenticated ? <PerfiUser /> : <Navigate to="/login" />}
        />
        <Route
          path="/registro"
          element={isAuthenticated ? < Register/> : <Navigate to="/login" />}
        />
        <Route

        Route
        path="/modificar"
        element={isAuthenticated ? < FileUpload/> : <Navigate to="/login" />}
      />
      <Route
        Route
        path="/publicaciones"
        element={isAuthenticated ? < UserPublications/> : <Navigate to="/login" />}
      />
      <Route


          path="*"
          element={
            <>
              <h1>Error 404</h1>
              <Link to="/">Volver</Link>
            </>
          }
        />
        <Route path="/generate" element={<GeneradorPDF />} />
      </Routes>
    </>
  );
};

const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routing;
