// Lab13_7.jsx
import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Paper } from "@mui/material";

function TabPanel({ children, value, index }) {
  if (value !== index) return null;
  return (
    <Box sx={{ p: 2 }}>
      {children}
    </Box>
  );
}

const Lab13_7 = () => {
  const [tab, setTab] = useState(0);

  return (
    <Paper sx={{ p: 2 }}>
      <Tabs
        value={tab}
        onChange={(_, newValue) => setTab(newValue)}
        aria-label="Dashboard tabs"
      >
        <Tab label="Dashboard" />
        <Tab label="Users" />
        <Tab label="Settings" />
      </Tabs>

      <TabPanel value={tab} index={0}>
        <Typography variant="h6">Dashboard</Typography>
        <Typography>Overview of stats and activity.</Typography>
      </TabPanel>

      <TabPanel value={tab} index={1}>
        <Typography variant="h6">Users</Typography>
        <Typography>Manage user accounts here.</Typography>
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <Typography variant="h6">Settings</Typography>
        <Typography>Change application preferences.</Typography>
      </TabPanel>
    </Paper>
  );
};

export default Lab13_7;
