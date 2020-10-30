import React, {useEffect, useState} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import api from "../../api";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function DataTable() {
  const classes = useStyles();
  const [usuarios, setUsuario] = useState([]);

  useEffect(() => {
    api.get('/usuarios')
        .then(response => {
          setUsuario(response.data)
        })
  }, [])
  
  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" variant="head">ID</StyledTableCell>
            <StyledTableCell align="left" variant="head">Nome</StyledTableCell>
            <StyledTableCell align="left" variant="head">Sobrenome</StyledTableCell>
            <StyledTableCell align="left" variant="head">Email</StyledTableCell>
            <StyledTableCell align="left" variant="head">Telefone</StyledTableCell>
            <StyledTableCell align="left" variant="head">Celular</StyledTableCell>
            <StyledTableCell align="left" variant="head">Cidade</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {usuarios.map((usuario) => (
                <TableRow key={usuario.id} hover={true}>
                  <TableCell align="left" variant="body">{usuario.id}</TableCell>
                  <TableCell align="left" variant="body">{usuario.nome}</TableCell>
                  <TableCell align="left" variant="body">{usuario.sobrenome}</TableCell>
                  <TableCell align="left" variant="body">{usuario.email}</TableCell>
                  <TableCell align="left" variant="body">{usuario.telefone}</TableCell>
                  <TableCell align="left" variant="body">{usuario.celular}</TableCell>
                  <TableCell align="left" variant="body">{usuario.cidade}</TableCell>
                </TableRow>    
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;