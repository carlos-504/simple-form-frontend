import React from "react";
import Validation from "../../assets/images/verifica.png";
import "./style.css";

function ConfirmCad() {
  return (
    <>
      <img src={Validation} alt="Confirma_Cadastro"/>
      <h1 className="tipografia_confirm">Obrigado pelo Cadastro!</h1>
    </>
  );
}

export default ConfirmCad;
