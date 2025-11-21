// Lab11_5.jsx
import React from "react";
import { Tooltip, Button, Box } from "@mui/material";

const Lab11_5 = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Tooltip title="Click to submit form">
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Lab11_5;
