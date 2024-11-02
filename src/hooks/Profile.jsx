import { useState, useEffect } from 'react';
import UseAuth from './UseAuth';
// Ejemplo de hook Profile
const Profile = () => {
  const [auth1, setAuth1] = useState({});
const {auth}=UseAuth();
console.log(auth);

  useEffect(() => {
    // Obtener datos de autenticación desde localStorage o una API
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');



    

    if (token) {
      // Si hay un token, puedes decodificarlo o verificarlo
      // Aquí deberías tener la lógica para decodificar el token y obtener los datos del usuario
      setAuth1({ _id: 'usuario_id_ejemplo' }); // Ejemplo de datos
    } else {
      setAuth1({});
    }
  }, []);

  return auth1;
};

export default Profile;
