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
import {ReactComponent as DeleteLogo} from '../../assets/images/deletar.svg'
import {ReactComponent as EditaLogo} from '../../assets/images/editar.svg'
import {ReactComponent as ViewLogo} from '../../assets/images/view.svg'
import api from "../../api";
import { toast } from 'react-toastify';
import "./style.css"

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
  const classes = [useStyles()];
  const [usuarios, setUsuario] = useState([]);

  useEffect(() => {
    api.get('/usuarios')
        .then(response => {
          setUsuario(response.data)
        })
        .catch(erro => console.log(erro))
  }, [])

  function handleExcluir(id){

    api.delete(`/usuarios/${id}`)
        .then(response => {
          const deletar = usuarios.filter(usuarios => id !== usuarios.id)
          setUsuario(deletar)
          toast.success(`Usuário excluído com sucesso!`, {
            position: toast.POSITION.TOP_CENTER
          })
        })
        .catch(erro => {
          console.log(erro)
          toast.error(`Erro ao excluir usuário`, {
            position: toast.POSITION.TOP_CENTER
          })
        })

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
              <StyledTableCell align="center" variant="head">Ações</StyledTableCell>
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
                    <TableCell align="left" variant="body">
                      <Button href={`/vizualizar/${usuario.id}`}>
                        <ViewLogo className="logo_size" title="Vizualizar" />
                      </Button>
                      <Button href={`/editar/${usuario.id}`}>
                        <EditaLogo  className="logo_size" title="Editar"/>
                      </Button>
                      <Button >
                        <DeleteLogo className="logo_size" title="Excluir" onClick={() => handleExcluir(usuario.id)}/>
                      </Button>
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