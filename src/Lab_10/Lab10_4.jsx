// Lab10_4.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Lab10_4 = () => {
  return (
    <Box p={4}>
      <Typography
        sx={{
          fontWeight: 700,
          // fontSize changes with breakpoint
          fontSize: {
            xs: "1.75rem", // mobile
            sm: "2.25rem",
            md: "3rem",    // desktop
          },
        }}
        gutterBottom
      >
        Responsive Heading
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: "0.9rem",
            sm: "1rem",
            md: "1.1rem",
          },
          maxWidth: 600,
        }}
      >
        Resize the browser window to see the font sizes change smoothly at
        different breakpoints using the <code>sx</code> prop.
      </Typography>
    </Box>
  );
};

export default Lab10_4;
