// Lab11_6.jsx
import React from "react";
import { Tooltip, Button, Box, Fade, Zoom } from "@mui/material";

const Lab11_6 = () => {
  return (
    <Box sx={{ p: 4, display: "flex", gap: 4 }}>
      <Tooltip
        title="Fade transition tooltip"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <Button variant="outlined">Fade Tooltip</Button>
      </Tooltip>

      <Tooltip
        title="Zoom transition tooltip"
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 500 }}
      >
        <Button variant="contained" color="secondary">
          Zoom Tooltip
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Lab11_6;
