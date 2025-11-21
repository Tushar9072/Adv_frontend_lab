// Lab12_2.jsx
import React from "react";
import { Box, Grid, Paper, Typography, Container } from "@mui/material";

const Lab12_2 = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h5" gutterBottom>
          Two-Column Layout (Grid)
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Main Content</Typography>
              <Typography variant="body2">
                This column takes 8/12 width on medium+ screens, and 12/12 on
                mobile.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Sidebar</Typography>
              <Typography variant="body2">
                This column takes 4/12 width on medium+ screens, and full width
                on mobile.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Lab12_2;
