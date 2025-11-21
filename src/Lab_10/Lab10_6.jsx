// Lab10_6.jsx
import React from "react";
import { Box, Button } from "@mui/material";

const Lab10_6 = () => {
  return (
    <Box p={4} textAlign="center">
      <Button
        variant="contained"
        sx={{
          px: 4,
          py: 1.5,
          fontWeight: 600,
          textTransform: "none",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          boxShadow: 2,
          "&:hover": {
            transform: "translateY(-3px) scale(1.03)",
            boxShadow: 6,
          },
        }}
      >
        Hover Animated Button
      </Button>
    </Box>
  );
};

export default Lab10_6;
