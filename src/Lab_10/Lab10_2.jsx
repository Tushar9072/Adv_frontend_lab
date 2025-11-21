// Lab10_2.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Lab10_2 = () => {
  return (
    <Box p={4}>
      <Typography
        variant="h4"
        sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}
      >
        Custom Colored Heading
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "text.secondary", fontWeight: 300, maxWidth: 500 }}
      >
        This paragraph uses a lighter font weight and the default text.secondary
        color from the theme. You can easily control color and weight through
        the <code>sx</code> prop.
      </Typography>
    </Box>
  );
};

export default Lab10_2;
