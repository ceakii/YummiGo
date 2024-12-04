import React, { useEffect, useState, useContext } from "react";
import { pageStyle } from "../../Style";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";

import Grid from "@mui/material/Grid2";

type ImageData = {
  title: string;
  url: string;
};

const MyUploads: React.FC = () => {
  const recipePageStyle = { ...pageStyle };
  const [images, setImages] = useState<ImageData[]>([]);
  const { user} = useContext(AuthContext);
  const storageKey = user;

  useEffect(() => {
    const prefix = `${storageKey}_recipePhoto_`;

    const matchingImages: ImageData[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key && key.startsWith(prefix)) {
        const storedData = localStorage.getItem(key);
        if (storedData) {
          try {
            // Determine the title after replacing underscores with spaces
            const title = key.substring(prefix.length).replace(/_/g, " ");

            // Use switch to determine the index and organize the matchingImages array
            let index = -1;
            switch (title) {
              case "Spring Roll":
                index = 0;
                break;
              case "Granola Bars":
                index = 1;
                break;
              case "Avocado Toast with Whole Grain Bread":
                index = 2;
                break;
              case "Greek Yogurt with Fresh Berries and Nuts":
                index = 3;
                break;
              case "Hummus and Veggie Sticks":
                index = 4;
                break;
              case "Quinoa Salad with Chickpeas and Vegetables":
                index = 5;
                break;
              case "Chia Seed Pudding with Almond Milk and Fruit":
                index = 6;
                break;
              case "Egg & Mustard Crackers":
                index = 7;
                break;
              case "Baked Sweet Potato Fries":
                index = 8;
                break;
              case "Spinach-Basil Pasta Salad":
                index = 9;
                break;
              case "Chicken Porridge":
                index = 10;
                break;
              case "Avocado Smoothie":
                index = 11;
                break;
              default:
                // If title doesn't match any case, continue without setting an index
                console.warn(`No index found for title: ${title}`);
                continue;
            }
            if (index >= 0 && index < 12) {
              while (matchingImages.length <= index) {
                const placeholderImage: ImageData = {
                  title: "No Image",
                  url: "https://icon2.cleanpng.com/20180605/ijl/aa9zxzu28.webp",
                };
                matchingImages.push(placeholderImage);
              }
              matchingImages[index] = {
                title: title,
                url: storedData,
              };
            }
          } catch (error) {
            console.error(`Failed to parse data for key: ${key}`, error);
          }
        }
      }
    }

    console.log(matchingImages);
    setImages(matchingImages);
  }, []);

  return (
    <Box sx={recipePageStyle}>
      <Grid container spacing={0.5} flexWrap="wrap" flexGrow={1}>
        {images.length > 0 ? (
          images.map((image, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <Card sx={{ position: "relative", height: 300 }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: "300px",
                    objectFit: "cover",
                  }}
                  image={image.url}
                  alt={image.title}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.54)",
                    color: "white",
                    padding: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    {image.title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid>
            <Typography variant="body1" color="textSecondary">
              No images found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default MyUploads;
