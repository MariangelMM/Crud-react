import React, { useEffect } from "react";
import { get } from "../api/config";
import { Header } from "../components/layouts/Header";

export const Home = ({ auth, setAuth }) => {
  const getUsers = async () => {
    const response = await get();
    console.log(response);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="home__container">
      <Header setAuth={setAuth} auth={auth} />
      <h2 className="home__title">Administracion de Usuarios</h2>
    </div>
  );
};
