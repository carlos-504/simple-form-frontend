import { Container, Button } from "@material-ui/core";
import { Link } from 'react-router-dom'
import React from "react";
import Navbar from "../../components/Navbar";
//import Form from "../../components/Form";
import "./style.css";

function editarForm() {
  return (
    <>
      <Navbar />
      <Container component="div" maxWidth="md">
        <h1>Editar Usuário</h1>
        
        <div className="button_voltar">
            <Link to="/listar">
                <Button variant="contained" color="secondary">Voltar</Button>
            </Link>
        </div>
      </Container>
    </>
  );
}

export default editarForm;
