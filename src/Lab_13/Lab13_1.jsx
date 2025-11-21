// Lab13_1.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Lab13_1 = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left just app name */}
        <Typography variant="h6" sx={{ flexShrink: 0 }}>
          My App
        </Typography>

        {/* Center aligned text using flex grow Box */}
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="body1">Center Aligned Text</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Lab13_1;
