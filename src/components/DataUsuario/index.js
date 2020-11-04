import React, { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import api from "../../api";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function DataUsuario() {
  const classes = [useStyles()];
  const { id } = useParams();
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [email, setEmail] = useState();
  const [celular, setCelular] = useState();
  const [telefone, setTelefone] = useState();
  const [cidade, setCidade] = useState();

  useEffect(() => {
    api
      .get(`/usuarios/${id}`)
      .then((response) => {
        setNome(response.data.nome);
        setSobrenome(response.data.sobrenome);
        setEmail(response.data.email);
        setCelular(response.data.celular);
        setTelefone(response.data.telefone);
        setCidade(response.data.cidade);
        console.log(response.data);
      })
      .catch((erro) => console.log(erro));
  }, [id]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableRow>
            <TableCell className="table_head">
              <span className="font_cell">ID</span>
            </TableCell>
            <TableCell>{id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table_head">
              <span className="font_cell">Nome</span>
            </TableCell>
            <TableCell>{nome}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table_head">
              <span className="font_cell">Sobrenome</span>
            </TableCell>
            <TableCell>{sobrenome}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table_head">
              <span className="font_cell">Email</span>
            </TableCell>
            <TableCell>{email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table_head">
              <span className="font_cell">Celular</span>
            </TableCell>
            <TableCell>{celular}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table_head">
              <span className="font_cell">Telefone</span>
            </TableCell>
            <TableCell>{telefone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table_head">
              <span className="font_cell">Cidade</span>
            </TableCell>
            <TableCell>{cidade}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </>
  );
}

export default DataUsuario;
