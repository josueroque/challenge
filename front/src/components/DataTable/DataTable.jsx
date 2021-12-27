import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./DataTable.css";

const DataTable = ({ rows = [] }) => {
  console.log(rows);
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: 600 }}
      className='datatable-component'
    >
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='right'>First Name</TableCell>
            <TableCell align='right'>LastName</TableCell>
            <TableCell align='right'>Address</TableCell>
            <TableCell align='right'>SSN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0
            ? rows.map((row) => (
                <TableRow
                  key={row.SSN}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align='right'>{row.firstName}</TableCell>
                  <TableCell align='right'>{row.lastName}</TableCell>
                  <TableCell align='right'>{row.address}</TableCell>
                  <TableCell align='right'>{row.SSN}</TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
