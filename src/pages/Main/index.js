import React from "react";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import "../../App.css";
import "fontsource-roboto";
import { Container } from "@material-ui/core";

function Main() {
  return (
    <>
      <Navbar />
      <Container component="div" maxWidth="md">
        <Form />
      </Container>
    </>
  );

}

export default Main;
