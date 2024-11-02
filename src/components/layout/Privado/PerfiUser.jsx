import React from "react";
import Profile from "../../../hooks/Profile";
import PrivateLayout from "./PrivateLayout";
export const PerfiUser = () => {
  const auth = Profile(); // Asegúrate de que el hook se llame Profile
  console.log(auth);
  return (
    <>
      <PrivateLayout />
    </>
  );
};
