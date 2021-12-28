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
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: 600, margin: 50 }}
      className='datatable-component'
    >
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>First Name</TableCell>
            <TableCell align='left'>LastName</TableCell>
            <TableCell align='left'>Address</TableCell>
            <TableCell align='left'>SSN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0
            ? rows.map((row) => (
                <TableRow
                  key={row.SSN}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align='left'>{row.firstName}</TableCell>
                  <TableCell align='left'>{row.lastName}</TableCell>
                  <TableCell align='left'>{row.address}</TableCell>
                  <TableCell align='left'>{row.ssn}</TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
