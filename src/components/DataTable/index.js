import React, {useEffect, useState} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
//import {Alert} from '@material-ui/lab';
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

const useAlerts = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function DataTable() {
  const classes = [useStyles(), useAlerts()];
  const [usuarios, setUsuario] = useState([]);

  useEffect(() => {
    api.get('/usuarios')
        .then(response => {
          setUsuario(response.data)
        })
        .catch(erro => console.log(erro))
  }, [])

  async function handleExcluir(id){
    if(window.confirm("Deseja realmente excluir esse usuário")){
      const result = await api.delete(`/usuarios/${id}`)
      if(result.status === 200) {
        window.location.href = '/listar'
      } else {
        alert('Ocorreu um erro')
      }
    }
  }
  
  return (
    <>
      <TableContainer component={Paper} >
        <Table className={classes.table} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <StyledTableCell align="left" variant="head">ID</StyledTableCell>
              <StyledTableCell align="left" variant="head">Nome</StyledTableCell>            
              <StyledTableCell align="left" variant="head">Email</StyledTableCell>
              <StyledTableCell align="left" variant="head">Celular</StyledTableCell>
              <StyledTableCell align="left" variant="head">Cidade</StyledTableCell>
              <StyledTableCell align="center" variant="head" colSpan="3" >Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {usuarios.map((usuario) => (
                  <TableRow key={usuario.id} hover={true}>
                    <TableCell align="left" variant="body">{usuario.id}</TableCell>
                    <TableCell align="left" variant="body">{usuario.nome}</TableCell>
                    <TableCell align="left" variant="body">{usuario.email}</TableCell>
                    <TableCell align="left" variant="body">{usuario.celular}</TableCell>
                    <TableCell align="left" variant="body">{usuario.cidade}</TableCell>
                    <TableCell align="left" variant="body" >
                      <Button href={`/vizualizar/${usuario.id}`}>View</Button>
                    </TableCell>
                    <TableCell align="left" variant="body" >
                      <Button href={`/editar/${usuario.id}`}>Editar</Button>
                    </TableCell>
                    <TableCell align="left" variant="body">
                      <Button onClick={() => handleExcluir(usuario.id)}>Excluir</Button>
                    </TableCell>
                  </TableRow>    
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DataTable;