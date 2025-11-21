// Lab15_1.jsx
import React, { useState } from "react";
import { Box, Button, Snackbar } from "@mui/material";

const Lab15_1 = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="contained" onClick={handleOpen}>
        Submit Form
      </Button>

      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        message="Form submitted successfully!"
      />
    </Box>
  );
};

export default Lab15_1;
