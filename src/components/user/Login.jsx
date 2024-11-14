import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import Header from "../layout/general/Header";
import useForm from "../../hooks/useForm";
import UseAuth from "../../hooks/UseAuth";
import "../../assets/styles/Login.css"
import Footer from "../layout/general/Footer";

export const Login = () => {
  const initialValues = { email: "", password: "" };
  const { auth } = UseAuth(); // Obtener y actualizar autenticación
  const navigate = useNavigate(); // Hook para la navegación

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (auth.token) {
      navigate("/"); // Redirigir a la página de inicio o donde necesites
    }
  }, [auth, navigate]);

  const { formValues, isSubmitting, handleChange, handleSubmit } = useForm(
    initialValues,
    "login"
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  return (
    <div>
      <Header />
      <form className="form-login" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <input
          type="submit"
          value="Identifícate"
          className="btn btn-success"
          disabled={isSubmitting}
        />
      </form>
      <Footer/>
    </div>

  );
};
