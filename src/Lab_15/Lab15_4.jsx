// Lab15_4.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

const Lab15_4 = () => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setOpen(false);
    alert("Deleted!");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
        Delete Item
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Lab15_4;
