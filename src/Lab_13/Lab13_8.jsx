// Lab13_8.jsx
import React from "react";
import { Breadcrumbs, Link, Typography, Box } from "@mui/material";

const Lab13_8 = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="#">
          Home
        </Link>
        <Link color="inherit" href="#">
          Dashboard
        </Link>
        <Typography color="text.primary">Reports</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Lab13_8;
