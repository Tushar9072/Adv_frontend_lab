// Lab15_5.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const Lab15_5 = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    console.log("Dialog form:", form);
    setOpen(false);
    alert("Form submitted!");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Form Dialog
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Contact Form</DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Lab15_5;
