import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../layout/general/Header";
import UseAuth from "../../hooks/UseAuth";
import "../../assets/styles/Login.css";
import Footer from "../layout/general/Footer";

// Definimos el esquema de validación con Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo no válido")
    .required("El correo es obligatorio"),
  password: Yup.string()
    .required("La contraseña es obligatoria"),
});

export const Login = () => {
  const { auth } = UseAuth();

  // Redirigir si ya está autenticado
  if (auth.token) {
    setTimeout(() => {
      window.location.href = "/"; // Redirige a home
    }, 2000);
  }

  return (
    <div>
      <Header />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          // Aquí manejas la lógica de login (puedes agregar la lógica de envío)
          console.log("Formulario enviado", values);

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-login">
            <div className="form-group">
              <label htmlFor="email">Correo</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                disabled={isSubmitting}
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <Field
                type="password"
                name="password"
                className="form-control"
                disabled={isSubmitting}
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success"
                disabled={isSubmitting}
              >
                Identifícate
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Mostrar mensaje si el login es exitoso */}
      {auth?.token && (
        <p className="success-message">
          Login exitoso. Redirigiendo a tu perfil...
        </p>
      )}

      <Footer />
    </div>
  );
};

export default Login;
