// Lab10_5.jsx
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Lab10_5 = () => {
  return (
    <Card
      sx={{
        p: 2,
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: 3,
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-4px)",
        },
        maxWidth: 320,
        mx: "auto",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Custom SX Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This card uses custom padding, border, border radius and adds a shadow
          when hovered using the <code>sx</code> prop.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Lab10_5;
