import React from "react";
import Header from "../layout/general/Header";
import useForm from "../../hooks/useForm";
import UseAuth from "../../hooks/UseAuth";

export const Login = () => {
  const initialValues = { email: "", password: "" };
  const { auth } = UseAuth(); // Obtener y actualizar autenticación

  // Redirigir si ya está autenticado
  if (auth.token) {
    setTimeout(() => {
      window.location.href = "/"; // Redirige a home
    }, 2000);
  }

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

      {/* Mostrar mensaje si el login es exitoso */}
      {auth?.token && (
        <p className="success-message">
          Login exitoso. Redirigiendo a tu perfil...
        </p>
      )}
    </div>
  );
};

export default Login;
