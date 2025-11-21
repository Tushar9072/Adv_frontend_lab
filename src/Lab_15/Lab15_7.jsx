// Lab15_7.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";

const Lab15_7 = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Box sx={{ p: 4, position: "relative", minHeight: "60vh" }}>
      <Button
        variant="contained"
        onClick={() => setLoading((prev) => !prev)}
      >
        {loading ? "Hide Loading" : "Show Loading"}
      </Button>

      {loading && (
        <>
          {/* LinearProgress at top */}
          <Box sx={{ position: "fixed", top: 0, left: 0, right: 0 }}>
            <LinearProgress />
          </Box>

          {/* Centered CircularProgress */}
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <CircularProgress />
              <Typography sx={{ mt: 2 }}>Loading...</Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Lab15_7;
