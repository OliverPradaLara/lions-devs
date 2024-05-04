import React from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/tableUsersPage");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Bienvenido a Lions Dev</h1>
      <img src="/img/logo.jpg" alt="Lions Dev" className={styles.logo} />
      <button className={styles.boton} onClick={handleNavigate}>
        Haz click Aqui{" "}
      </button>
    </div>
  );
};
