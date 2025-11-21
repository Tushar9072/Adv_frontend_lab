// Lab13_5.jsx
import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import SendIcon from "@mui/icons-material/Send";

const collapsedWidth = 72;
const expandedWidth = 220;

const Lab13_5 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Top AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Collapsed Drawer Example
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Collapsible Drawer */}
      <Drawer
        variant="permanent"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        sx={{
          width: expanded ? expandedWidth : collapsedWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          "& .MuiDrawer-paper": {
            width: expanded ? expandedWidth : collapsedWidth,
            transition: "width 0.2s ease",
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar />

        <List>
          {[
            { icon: <InboxIcon />, label: "Inbox" },
            { icon: <StarIcon />, label: "Starred" },
            { icon: <SendIcon />, label: "Sent" },
          ].map((item) => (
            <ListItemButton key={item.label} sx={{ px: 2 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              {expanded && <ListItemText primary={item.label} />}
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Main Content
        </Typography>
        <Typography>
          Hover over the left sidebar to expand it. Move your mouse away to
          collapse it again.
        </Typography>
      </Box>
    </Box>
  );
};

export default Lab13_5;
