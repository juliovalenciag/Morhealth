import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, fecha, Estado) {
  return { name, trackingId, fecha, Estado };
}

const rows = [
  createData("Nutriólogo", 18908424, "2 Abril 2023", "Completada"),
  createData("Médico ", 18908424, "31 Abril 2023", "Pendiente"),
  createData("Entrenador", 18908424, "5 Abril 2023", "Completada"),
  createData("Nutriólogo", 18908421, "...", "Sin agendar"),
];


const makeStyle=(Estado)=>{
  if(Estado === 'Completada')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(Estado === 'Pendiente')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Citas: </h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tipo</TableCell>
                <TableCell align="left">Folio</TableCell>
                <TableCell align="left">Fecha</TableCell>
                <TableCell align="left">Estado</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.fecha}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.Estado)}>{row.Estado}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Detalles</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
