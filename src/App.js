import React from "react";
import "./App.css";
import "fontsource-roboto";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { Container } from "@material-ui/core";

function App() {
  return (
    <>
      <Navbar />
      <Container className="container" component="div" maxWidth="md">
        <Form enviarForm={dadosForm}/>
      </Container>
    </>
  );

  function dadosForm(dados){
    console.log(dados)
  }
}

export default App;
