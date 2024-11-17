import React, { useEffect, useState } from "react";
import Header from "../layout/general/Header";
import useForm from "../../hooks/useForm";
import UseAuth from "../../hooks/UseAuth";
import "../../assets/styles/Login.css";
import Footer from "../layout/general/Footer";

export const Login = () => {
  const initialValues = { email: "", password: "" };
  const { auth } = UseAuth(); // Obtener y actualizar autenticación

  // Estado para manejar los errores de validación
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (auth.token) {
      // Recargar la página sin usar `navigate`
      window.location.reload("/");
    }
  }, [auth]);

  // Desestructuración de los valores del formulario
  const { formValues, isSubmitting, handleChange, handleSubmit } = useForm(
    initialValues,
    "login"
  );

  // Función para validar los campos del formulario
  const validate = () => {
    const newErrors = { email: "", password: "" };
    if (!formValues.email) {
      newErrors.email = "El correo es obligatorio";
    }
    if (!formValues.password) {
      newErrors.password = "La contraseña es obligatoria";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  // Manejar el envío del formulario
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Validar los campos antes de enviar
    if (!validate()) {
      return;
    }
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
          {/* Mostrar error de validación si existe */}
          {errors.email && <p className="error-message">{errors.email}</p>}
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
          {/* Mostrar error de validación si existe */}
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <input
          type="submit"
          value="Identifícate"
          className="btn btn-success"
          disabled={isSubmitting}
        />
      </form>
      <Footer />
    </div>
  );
};
