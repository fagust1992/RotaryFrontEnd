import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { PublicLayout } from "../components/layout/general/PublicLayout";
import { Login } from "../components/user/Login";
import ContactForm from "../components/layout/general/ContactForm";
import { AuthProvider } from "../context/AuthProvider";
import { Information } from "../components/layout/general/Information";
import { Nosotros } from "../components/layout/general/Nosotros";
import { PerfiUser } from "../components/layout/Privado/PerfiUser";
import { Register } from "../components/user/Privado/Register";
import FileUpload from "../components/user/Privado/FileUpload";
import UserPublications from "../components/publication/UserPublications";
import CreatePublication from "../components/publication/CreatePublication";
import ScrollToTop from "../components/layout/general/ScrollToTop";

const AppRoutes = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const isAuthenticated = token && user;

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Ruta pública */}
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/perfil" /> : <PublicLayout />}
        />

        {/* Rutas protegidas */}
        <Route
          path="/save"
          element={isAuthenticated ? <CreatePublication /> : <Navigate to="/login" />}
        />
        <Route
          path="/perfil"
          element={isAuthenticated ? <PerfiUser /> : <Navigate to="/login" />}
        />
        <Route
          path="/registro"
          element={isAuthenticated ? <Register /> : <Navigate to="/login" />}
        />
          <Route
          path="/registro"
          element={isAuthenticated ? <Register /> : <Navigate to="/login" />}
        />
        <Route
          path="/modificar"
          element={isAuthenticated ? <FileUpload /> : <Navigate to="/login" />}
        />
        <Route
          path="/publicaciones"
          element={isAuthenticated ? <UserPublications /> : <Navigate to="/login" />}
        />

        {/* Rutas públicas adicionales */}
        <Route path="/contacto" element={<ContactForm />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/noticias" element={<UserPublications />} />
        <Route path="/informacion" element={<Information />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/perfil" /> : <Login />} />
        

        {/* Ruta por defecto */}
        <Route
          path="*"
          element={
            <>
              <h1>Error 404 - Página no encontrada</h1>
              <Link to="/">Volver a inicio</Link>
            </>
          }
        />
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
