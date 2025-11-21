// Lab13_9.jsx
import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const Lab13_9 = () => {
  const [value, setValue] = useState(0);

  const labels = ["Home", "Search", "Favorites", "Profile"];

  return (
    <Box sx={{ minHeight: "60vh", pb: 7 }}>
      <Box sx={{ p: 4 }}>
        <Typography variant="h6">
          Current: {labels[value]}
        </Typography>
      </Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          showLabels
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Lab13_9;
