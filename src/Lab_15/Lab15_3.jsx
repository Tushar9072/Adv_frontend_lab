// Lab15_3.jsx
import React, { useState } from "react";
import { Box, Button, Snackbar, Stack } from "@mui/material";

const Lab15_3 = () => {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState({ vertical: "top", horizontal: "left" });

  const handleClick = (vertical, horizontal) => {
    setAnchor({ vertical, horizontal });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const { vertical, horizontal } = anchor;

  return (
    <Box sx={{ p: 4 }}>
      <Stack direction="row" spacing={2} flexWrap="wrap" rowGap={2}>
        <Button onClick={() => handleClick("top", "left")} variant="outlined">
          Top-Left
        </Button>
        <Button onClick={() => handleClick("top", "right")} variant="outlined">
          Top-Right
        </Button>
        <Button onClick={() => handleClick("bottom", "left")} variant="outlined">
          Bottom-Left
        </Button>
        <Button onClick={() => handleClick("bottom", "right")} variant="outlined">
          Bottom-Right
        </Button>
      </Stack>

      <Snackbar
        key={`${vertical}-${horizontal}`}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={2000}
        message={`Snackbar at ${vertical}-${horizontal}`}
      />
    </Box>
  );
};

export default Lab15_3;
