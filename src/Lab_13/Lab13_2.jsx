// Lab13_2.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Lab13_2 = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo / App Name */}
        <Typography variant="h6" sx={{ flexShrink: 0 }}>
          MyLogo
        </Typography>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Navigation Buttons */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Lab13_2;
