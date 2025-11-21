// Lab11_2.jsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const rows = [
  { name: "Alice", email: "alice@example.com", role: "Student" },
  { name: "Bob", email: "bob@example.com", role: "Monitor" },
  { name: "Charlie", email: "charlie@example.com", role: "Student" },
  { name: "David", email: "david@example.com", role: "Student" },
];

const Lab11_2 = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ bgcolor: "grey.200" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.email}
              sx={{
                bgcolor: index % 2 === 0 ? "background.paper" : "grey.100",
              }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Lab11_2;
