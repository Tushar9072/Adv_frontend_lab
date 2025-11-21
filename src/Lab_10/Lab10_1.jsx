// Lab10_1.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Lab10_1 = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Typography Variants
      </Typography>

      <Typography variant="h1" gutterBottom>h1 Heading</Typography>
      <Typography variant="h2" gutterBottom>h2 Heading</Typography>
      <Typography variant="h3" gutterBottom>h3 Heading</Typography>
      <Typography variant="h4" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5" gutterBottom>h5 Heading</Typography>
      <Typography variant="h6" gutterBottom>h6 Heading</Typography>

      <Typography variant="subtitle1" gutterBottom>
        subtitle1 – Used for section titles
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2 – Smaller subtitle
      </Typography>

      <Typography variant="body1" gutterBottom>
        body1 – Default body text. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2 – Smaller body text. Duis aute irure dolor in reprehenderit.
      </Typography>

      <Typography variant="caption" display="block" gutterBottom>
        caption – Small helper text or labels.
      </Typography>
    </Box>
  );
};

export default Lab10_1;
