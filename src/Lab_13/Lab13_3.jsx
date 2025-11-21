// Lab13_3.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Lab13_3 = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ mr: 2 }}>
          AppName
        </Typography>

        {/* Search bar inside flexible Box */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            maxWidth: 500,
            px: 1,
            py: 0.5,
            borderRadius: 1,
            bgcolor: (theme) => alpha(theme.palette.common.white, 0.15),
            "&:hover": {
              bgcolor: (theme) => alpha(theme.palette.common.white, 0.25),
            },
          }}
        >
          <SearchIcon sx={{ mr: 1 }} />
          <InputBase
            placeholder="Search…"
            fullWidth
            sx={{ color: "inherit" }}
          />
        </Box>

        {/* Right icon buttons */}
        <Box sx={{ ml: 2, display: "flex", gap: 1 }}>
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

export default Lab13_3;
