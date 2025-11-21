// Lab12_6.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const Lab12_6 = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ gap: 2 }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexShrink: 0 }}>
          MyLogo
        </Typography>

        {/* Search bar */}
        <Box sx={{ flexGrow: 1, maxWidth: 500, display: "flex", alignItems: "center" }}>
          <TextField
            size="small"
            fullWidth
            placeholder="Search..."
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: "action.active" }} />,
            }}
          />
        </Box>

        {/* Icon buttons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Lab12_6;
