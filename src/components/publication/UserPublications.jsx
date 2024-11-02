import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import PrivateHeader from "../layout/Privado/Privateheader";
import PrivadoFooter from "../layout/Privado/PrivadoFooter";

const UserPublications = () => {
  const [publications, setPublications] = useState([]);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");


    const fetchPublications = async () => {
      // Get the token and user from localStorage
      const storedToken = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user")); // Assuming user is stored as a JSON string

      if (storedToken && user) {
        setToken(storedToken);
        
        try {
          // Assuming user object has an id property
          const response = await fetch(Global.url + "publication/user/" + user.id, {
            method: "GET",
            headers: {
              Authorization: token, // Use Bearer token if applicable
            },
          });

          if (!response.ok) {
            throw new Error("Error fetching publications");
          }

          const data = await response.json();
          setPublications(data);
          console.log(publications) // Set the publications data
        } catch (error) {
          console.error("Error:", error);
          setMessage("Error loading publications.");
        }
      }
    };

    fetchPublications();
    

  return (
    <div>
      <PrivateHeader />
      
      <PrivadoFooter />
    </div>
  );
};

export default UserPublications;
