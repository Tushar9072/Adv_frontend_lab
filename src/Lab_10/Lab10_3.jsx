// Lab10_3.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Lab10_3 = () => {
  return (
    <Box
      p={4}
      sx={{
        bgcolor: "linear-gradient(90deg, #1976d2, #42a5f5)",
        backgroundImage: "linear-gradient(90deg, #1976d2, #42a5f5)",
        color: "common.white",
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight={700} gutterBottom>
        50% OFF – Today Only!
      </Typography>
      <Typography variant="body1" mb={2}>
        Upgrade to the Pro plan and unlock all premium features with a huge
        discount.
      </Typography>
      <Button variant="contained" color="secondary">
        Get the Deal
      </Button>
    </Box>
  );
};

export default Lab10_3;
