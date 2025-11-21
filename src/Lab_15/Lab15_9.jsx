// Lab15_9.jsx
import React, { useState } from "react";
import { Box, Rating, Typography } from "@mui/material";

const Lab15_9 = () => {
  const [value, setValue] = useState(3.5);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>
        Rate this product:
      </Typography>

      <Rating
        name="half-rating"
        precision={0.5}
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
      />

      <Typography sx={{ mt: 1 }}>
        Selected Rating: {value !== null ? value : "None"}
      </Typography>
    </Box>
  );
};

export default Lab15_9;
