// Lab15_6.jsx
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Lab15_6 = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Fullscreen Dialog
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Fullscreen Dialog
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Mobile-Friendly Fullscreen Content
          </Typography>
          <Typography>
            This fullscreen dialog is great for mobile views or large forms.
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Lab15_6;
