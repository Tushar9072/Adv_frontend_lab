// Lab10_7.jsx
import React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Button,
} from "@mui/material";

// 1. Create custom theme
const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#ff9800",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Roboto', system-ui, -apple-system, BlinkMacSystemFont",
    h4: {
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

const Lab10_7 = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <Typography variant="h4" color="primary">
          Custom Theme Active
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth={400}>
          This page uses a custom Material UI theme with new primary/secondary
          colors and tweaked typography styles.
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default Lab10_7;
