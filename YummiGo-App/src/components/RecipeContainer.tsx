import React from "react";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { Box, Button, CardMedia, ThemeProvider, Typography } from "@mui/material";

interface RecipeContainer {
  children: React.ReactNode;
  title: string;
  imageSrc: string;
}

export default function SpringRoll({ children, title, imageSrc }: RecipeContainer) {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden"}
  const pictureFrameSize = "40vw";
  const pictureSize = "38vw";

  return (
    /* Page Container */
    <Box sx={recipePageStyle}>
      {/* Picture, Button, Title Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#38E2DF"
        }}>
        {/* Image Container */}
        <Box
          sx={{
            width: "100vw",
            minHeight: "20vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2
          }}
        >
          {/* Image Frame */}
          <Box
            sx={{
              width: pictureFrameSize,
              height: pictureFrameSize,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: "10%",
              boxShadow: 4
            }}
          >
            {/* Image */}
            <CardMedia
              component="img"
              image={imageSrc}
              alt="Spring Roll"
              sx={{
                height: pictureSize,
                width: pictureSize,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10%",
                boxShadow: 4
              }}
            />
          </Box>
        </Box>

        {/* Button Container */}
        <Box
          sx={{
            width: "100vw",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            borderBottom: 2,
            borderColor: "black"
          }}
        >
          <ThemeProvider theme={buttonTheme}>
            <Button
              variant="contained"
              sx={{
                width: "50vw",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#C67B58",
                borderRadius: 4,
                overflow: "hidden", // Hide overflow
              }}
            >
              {/*Upload Photo */}
              <ThemeProvider theme={textTheme}>
                <Typography
                  variant="button"
                >
                  Upload Photo
                </Typography>
              </ThemeProvider>
            </Button>
          </ThemeProvider>
        </Box>

        {/* Title Container */}
        <Box
          sx={{
            width: "100vw",
            height: "12vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: 2,
            borderColor: "black"
          }}
        >
          <ThemeProvider theme={textTheme}>
            <Typography variant="h3">
              {title}
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>

      {/* Food Description Container */}
      <Box
        sx={{
          width: "100%",
          height: "vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#FEAF2F"
        }}
      >
        <ThemeProvider theme={textTheme}>
          <Typography variant="body1" marginLeft={5} marginRight={5}>
            {children}
          </Typography>
        </ThemeProvider>
      </Box>
    </Box>
  );
}