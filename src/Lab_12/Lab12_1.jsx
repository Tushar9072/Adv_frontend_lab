// Lab12_1.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";

const Lab12_1 = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Lab 12 - Full Page Layout</Typography>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Content Area
          </Typography>
          <Typography>
            This is the main content area. It grows to fill the available space
            between header and footer.
          </Typography>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 2,
          bgcolor: "grey.200",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2025 Lab 12 Footer
        </Typography>
      </Box>
    </Box>
  );
};

export default Lab12_1;
