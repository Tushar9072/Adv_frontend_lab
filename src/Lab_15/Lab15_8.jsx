// Lab15_8.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
  Button,
} from "@mui/material";

const Lab15_8 = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const reload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="outlined" onClick={reload} sx={{ mb: 2 }}>
        Reload (show Skeleton)
      </Button>

      <Card sx={{ maxWidth: 345 }}>
        {loading ? (
          <Skeleton variant="rectangular" height={180} />
        ) : (
          <CardMedia
            component="img"
            height="180"
            image="https://source.unsplash.com/random/800x600?nature"
            alt="Demo"
          />
        )}

        <CardContent>
          {loading ? (
            <>
              <Skeleton variant="text" />
              <Skeleton variant="text" width="80%" />
            </>
          ) : (
            <>
              <Typography gutterBottom variant="h6" component="div">
                Beautiful Landscape
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a description of the image. Content is shown after
                loading finishes.
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Lab15_8;
