import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function DataTable({ dados }) {
  const classes = useStyles();

  const {nome, sobrenome, email, telefone, celular, cidade} = dados || ""
    

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Sobrenome</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Celular</TableCell>
            <TableCell align="right">Cidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key>
              <TableCell component="th" scope="row"> 1 </TableCell>
              <TableCell align="right">{ nome }</TableCell>
              <TableCell align="right">{ sobrenome }</TableCell>
              <TableCell align="right">{ email }</TableCell>
              <TableCell align="right">{ telefone }</TableCell>
              <TableCell align="right">{ celular }</TableCell>
              <TableCell align="right">{ cidade }</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
