import React from "react";
import Navbar from "../../components/Navbar";
import DataTable from "../../components/DataTable";
import { Button, Container } from "@material-ui/core";
import "./style.css";
import { Link } from "react-router-dom";

function Listar() {

  return (
    <>
      <Navbar />
      <Container component="div" maxWidth="md">
        <h1>Usuários</h1>
        <DataTable />
        <div className="button_cadastrar">
          <Link to="/">
            <Button variant="contained" color="primary" size="small">Cadastrar</Button>
          </Link>
        </div>
      </Container>
    </>
  );

}

export default Listar;
