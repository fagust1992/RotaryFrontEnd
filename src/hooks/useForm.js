import { useState } from "react";
import { Global } from "../helpers/Global";
import Swal from "sweetalert2"; 
import UseAuth from "./UseAuth";

const useForm = (initialValues, submitType) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saved, setSaved] = useState("Sin Loguearse"); // Estado de logueo
  const { auth, setAuth } = UseAuth();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const saveUser = async () => {
    try {
      const newUser = formValues;
      const request = await fetch(Global.url + "user/register", {
        method: "POST",
        body: JSON.stringify(newUser),
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
        setFormValues(initialValues); // Resetear formulario
        setSaved("registered");
      } else {
        Swal.fire({
          title: "Error",
          text: "Error en el registro.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        setSaved("error");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      Swal.fire({
        title: "Error",
        text: "Error al registrar usuario.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      setSaved("error");
    }
  };

  const loginUser = async () => {
    try {
      const userCredentials = formValues;
      const request = await fetch(Global.url + "user/login", {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      console.log(data);

      if (data.status === "success") {
        setSaved("logueado");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setAuth({
          token: data.token,
          user: data.user,
        });
      } else {
        setSaved("error");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setSaved("error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (submitType === "register") {
      await saveUser();
    } else if (submitType === "login") {
      await loginUser();
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return {
    formValues,
    isSubmitting,
    handleChange,
    handleSubmit,
    saved,
  };
};

export default useForm;
