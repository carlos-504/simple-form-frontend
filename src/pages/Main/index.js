import React from "react";
import FormCad from "../../components/Form/FormCad";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "fontsource-roboto";
import { Container } from "@material-ui/core";

function Main() {
  return (
    <>
      <Navbar />
      <Container component="div" maxWidth="md">
        <h1>Cadastrar Usuário</h1>
        <FormCad />
      </Container>
    </>
  );

}

export default Main;
