import React, { useState, useEffect, createContext } from "react";
import { Global } from "../helpers/Global";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      if (!token || !user) {
        return false;
      }

      // Convertir los datos a un objeto JSON de JS
      const userObj = JSON.parse(user);
      const userId = userObj.id;
    console.log(userId)
      // Petición AJAX para obtener el perfil del usuario
      const request = await fetch(Global.url + "user/profile/" + userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
      });

      if (!request.ok) {
        throw new Error('Error al obtener el perfil del usuario');
      }

      const data = await request.json();
      console.log(data)
      setAuth(data);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
