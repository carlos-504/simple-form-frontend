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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">telefone</TableCell>
            <TableCell align="right">Cidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key>
              <TableCell component="th" scope="row"> 1 </TableCell>
              <TableCell align="right">Carlos</TableCell>
              <TableCell align="right">91768854</TableCell> 
              <TableCell align="right">Samambaia</TableCell> 
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
