import React, { useState, useEffect } from "react";
import ConfirmCad from "./ConfirmCad";
import Form from "./Form";

function HandlerForm() {
  const [pageAtual, setPageAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({}); 

  useEffect(() => {
    if (pageAtual === pages.length - 1) {
      //console.log(dadosColetados)
    }
  }, [dadosColetados]);

  const pages = [<Form enviarForm={coletarDados} />, <ConfirmCad />];

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximaPage();
  }

  function proximaPage() {
    setPageAtual(pageAtual + 1);
  }

  return <>{pages[pageAtual]}</>;
}

export default HandlerForm;
