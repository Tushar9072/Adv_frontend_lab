// Lab11_3.jsx
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";

const initialStudents = [
  { name: "Alice", marks: 88 },
  { name: "Bob", marks: 72 },
  { name: "Charlie", marks: 95 },
  { name: "David", marks: 60 },
];

function sortData(data, orderBy, order) {
  return [...data].sort((a, b) => {
    let x = a[orderBy];
    let y = b[orderBy];

    if (typeof x === "string") {
      x = x.toLowerCase();
      y = y.toLowerCase();
    }

    if (x < y) return order === "asc" ? -1 : 1;
    if (x > y) return order === "asc" ? 1 : -1;
    return 0;
  });
}

const Lab11_3 = () => {
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("asc");

  const handleSort = (column) => {
    const isAsc = orderBy === column && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(column);
  };

  const sortedStudents = sortData(initialStudents, orderBy, order);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ bgcolor: "grey.200" }}>
          <TableRow>
            <TableCell sortDirection={orderBy === "name" ? order : false}>
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={() => handleSort("name")}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === "marks" ? order : false}>
              <TableSortLabel
                active={orderBy === "marks"}
                direction={orderBy === "marks" ? order : "asc"}
                onClick={() => handleSort("marks")}
              >
                Marks
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedStudents.map((student) => (
            <TableRow key={student.name}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.marks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Lab11_3;
