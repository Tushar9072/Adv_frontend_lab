// Lab11_7.jsx
import React from "react";
import { Box, ImageList, ImageListItem, Paper, Typography } from "@mui/material";

const itemData = [
  { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba", title: "Notebook" },
  { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", title: "Team Work" },
  { img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6", title: "Coffee" },
  { img: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c", title: "Desk" },
  { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", title: "Code" },
  { img: "https://images.unsplash.com/photo-1518770660439-4636190af475", title: "Devices" },
];

const Lab11_7 = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Pinterest-like Image Layout
      </Typography>

      <Paper sx={{ p: 2 }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Paper>
    </Box>
  );
};

export default Lab11_7;
