import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Asegúrate de instalar Yup para validación
import "../../../assets/styles/register-form.css";
import PrivateHeader from "../../layout/Privado/Privateheader";
import PrivadoFooter from "../../layout/Privado/PrivadoFooter";
import Swal from "sweetalert2"; // Para notificaciones
import { Global } from "../../../helpers/Global";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  surname: Yup.string().required("Los apellidos son obligatorios"),
  nick: Yup.string().required("El nick es obligatorio"),
  email: Yup.string().email("Correo no válido").required("El correo es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

export const Register = () => {
  const initialValues = {
    name: "",
    surname: "",
    nick: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const request = await fetch(Global.url + "user/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      console.log(data);

      if (data.message === "Usuario registrado correctamente.") {
        Swal.fire({
          title: "¡Éxito!",
          text: "Registro exitoso.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        resetForm(); // Reinicia los campos del formulario al éxito
      } else {
        Swal.fire({
          title: "Error",
          text: "Error en el registro.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      Swal.fire({
        title: "Error",
        text: "Error al registrar usuario.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <>
      <PrivateHeader />
      <p className="welcome-message">
        Bienvenido a la sección de registrar un Socio en Rotary Club Maipú
      </p>

      <div className="content_post">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="register-form">
              {/* Campos del formulario */}
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="surname">Apellidos</label>
                <Field type="text" name="surname" id="surname" />
                <ErrorMessage name="surname" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="nick">Nick</label>
                <Field type="text" name="nick" id="nick" />
                <ErrorMessage name="nick" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <Field type="password" name="password" id="password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <input
                type="submit"
                value="Regístrate"
                className="btn btn-success"
                disabled={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
      <PrivadoFooter />
    </>
  );
};
