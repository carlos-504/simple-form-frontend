import React from "react";
import Navbar from "../../components/Navbar";
import DataTable from "../../components/DataTable";
import { Container } from "@material-ui/core";
import "./style.css";

function Listar() {

  return (
    <>
      <Navbar />
      <Container component="div" maxWidth="md">
        <h1>Usuários</h1>
        <DataTable />
      </Container>
    </>
  );

}

export default Listar;
