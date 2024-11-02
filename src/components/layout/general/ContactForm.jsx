import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Nav from "./Nav";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import img_contacto from "../../../assets/img/contacto-img.png";
import icono_whastpp from "../../../assets/img/whastpp.png";
import "../../../assets/styles/contactForm.css";
import Footer from "./Footer";
const ContactForm = ({ fondo = "#12A7A9" }) => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Por favor, ingresa tu nombre"),
    email: Yup.string()
      .email("Ingresa un correo electrónico válido")
      .required("Por favor, ingresa tu correo electrónico"),
    phoneNumber: Yup.string().required(
      "Por favor, ingresa tu número de teléfono"
    ),
    address: Yup.string().required("Por favor, ingresa tu dirección"),
    message: Yup.string().required("Por favor, ingresa tu mensaje"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const templateParams = {
        user_name: values.name,
        user_email: values.email,
        phone_number: values.phoneNumber,
        address: values.address,
        message: values.message,
      };

      await emailjs.send(
        "service_v55adwn",
        "template_xjevxwq",
        templateParams,
        "8Fbu7rnt1Xt1U8usG"
      );

      console.log("Correo enviado correctamente");
      alert(
        "Gracias por ponerte en contacto con nosotros. Nos pondremos en contacto contigo a través de la página pronto."
      );
      resetForm();
    } catch (error) {
      console.error("Error al enviar el correo", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Nav />
      <div>
      <p className="styled-paragraph text-center">
      ¡Comunidad! Estamos aquí para escucharte y responder tus preguntas de inmediato. Tu opinión es fundamental para nosotros. No dudes en ponerte en contacto con nosotros.

      </p>
    </div>
      <div className="container contacto" style={{ background: fondo }}>
        
        <div className="row">
          <div className="col-md-6">
            <img
              src={img_contacto}
              alt="Descripción de la imagen"
              className="img-fluid img-contact"
            />
            <div className="enlace_de_WhatsApp">
              <a href="https://wa.me/+56988000394">
                <img
                  src={icono_whastpp}
                  alt="Icono de WhatsApp"
                  className="icono-whastpp"
                />
                Escribemos
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <h2>Contacto</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre:
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo Electrónico:
                    </label>
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">
                      Número de Teléfono:
                    </label>
                    <Field
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Dirección:
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Mensaje:
                    </label>
                    <Field
                      as="textarea"
                      className="form-control"
                      id="message"
                      name="message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    Enviar
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactForm;
