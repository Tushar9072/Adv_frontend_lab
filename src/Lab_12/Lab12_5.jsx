// Lab12_5.jsx
import React from "react";
import { Box, Grid, Paper, Typography, Container } from "@mui/material";

const Lab12_5 = () => {
  return (
    <Box sx={{ py: 4, bgcolor: "grey.50" }}>
      <Container>
        <Typography variant="h5" gutterBottom>
          Dashboard Widgets
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }} elevation={3}>
              <Typography variant="h6">Stats</Typography>
              <Typography variant="body2">Some key numbers...</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }} elevation={3}>
              <Typography variant="h6">Chart</Typography>
              <Typography variant="body2">Placeholder for chart.</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }} elevation={3}>
              <Typography variant="h6">Recent Orders</Typography>
              <Typography variant="body2">
                List of recent customer orders.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }} elevation={3}>
              <Typography variant="h6">Notifications</Typography>
              <Typography variant="body2">Latest alerts and messages.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Lab12_5;
