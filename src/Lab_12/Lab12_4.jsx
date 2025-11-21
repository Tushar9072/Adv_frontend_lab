// Lab12_4.jsx
import React from "react";
import { Box, Stack, Paper, Typography, Container } from "@mui/material";

const Lab12_4 = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h5" gutterBottom>
          Stack Layouts
        </Typography>

        {/* Vertical Stack */}
        <Typography variant="subtitle1" gutterBottom>
          Vertical Stack
        </Typography>
        <Stack spacing={2} sx={{ mb: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Typography>Item 1</Typography>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Typography>Item 2</Typography>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Typography>Item 3</Typography>
          </Paper>
        </Stack>

        {/* Horizontal Stack */}
        <Typography variant="subtitle1" gutterBottom>
          Horizontal Stack
        </Typography>
        <Stack direction="row" spacing={2}>
          <Paper sx={{ p: 2, flex: 1, textAlign: "center" }}>
            <Typography>A</Typography>
          </Paper>
          <Paper sx={{ p: 2, flex: 1, textAlign: "center" }}>
            <Typography>B</Typography>
          </Paper>
          <Paper sx={{ p: 2, flex: 1, textAlign: "center" }}>
            <Typography>C</Typography>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default Lab12_4;
