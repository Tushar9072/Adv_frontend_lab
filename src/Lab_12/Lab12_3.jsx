// Lab12_3.jsx
import React from "react";
import { Box, Grid, Paper, Typography, Container } from "@mui/material";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

const Lab12_3 = () => {
  return (
    <Box sx={{ py: 4, bgcolor: "grey.50" }}>
      <Container>
        <Typography variant="h5" gutterBottom>
          Responsive Grid Layout
        </Typography>

        <Grid container spacing={2}>
          {items.map((label) => (
            <Grid key={label} item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Typography>{label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Lab12_3;
