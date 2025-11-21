// Lab15_2.jsx
import React, { useState } from "react";
import { Box, Button, Snackbar, Alert, Stack } from "@mui/material";

const Lab15_2 = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");

  const handleOpen = (sev) => {
    setSeverity(sev);
    setOpen(true);
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => handleOpen("success")}>
          Success
        </Button>
        <Button variant="contained" color="info" onClick={() => handleOpen("info")}>
          Info
        </Button>
        <Button variant="contained" color="warning" onClick={() => handleOpen("warning")}>
          Warning
        </Button>
        <Button variant="contained" color="error" onClick={() => handleOpen("error")}>
          Error
        </Button>
      </Stack>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          This is a {severity} message!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Lab15_2;
