import React from "react";
import Navbar from "../../components/Navbar";
import { ReactComponent as ErroNotFoundSVG } from "../../assets/images/404.svg";
import "./style.css";

function erro404() {
  return (
    <>
      <Navbar />
      <div className="container-erro404">
        <h1>Página não encontrada - Tente outro endereço</h1>
        <ErroNotFoundSVG className="img-erro404" />
      </div>
    </>
  );
}

export default erro404;
