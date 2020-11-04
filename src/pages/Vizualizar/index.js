import React from "react";
import DataUsuario from "../../components/DataUsuario";
import Navbar from "../../components/Navbar";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";

function Usuario() {
  return (
    <>
      <Navbar />
      <Container component="div" maxWidth="md">
        <h1>Usuário</h1>
        <DataUsuario />
        <Link to="/listar">
          <div className="button_voltar_listar">
            <Button variant="contained" color="primary" size="small">
              Voltar
            </Button>
          </div>
        </Link>
      </Container>
    </>
  );
}

export default Usuario;
