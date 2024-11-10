import React from "react";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { Box, Button, CardMedia, ThemeProvider, Typography } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useRecipeUpload } from "../../RecipeUploadContext"; 
import { useUpload } from "../../UploadContext"; // Import the UploadContext

interface RecipeContainer {
  children: React.ReactNode;
  title: string;
  imageSrc: string;
  recipeId: string; // Add recipeId as a prop
}

export default function RecipeContainer({ children, title, imageSrc, recipeId }: RecipeContainer) {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden"};
  const pictureFrameSize = "40vw";
  const pictureSize = "38vw";

  // For Dialog Box
  const [open, setOpen] = React.useState(false);

  // Use custom hooks to get functions from contexts
  const { incrementRecipeUploadCount } = useRecipeUpload(); // From RecipeUploadContext
  const { incrementUploadCount } = useUpload(); // From UploadContext

  const handleClickOpen = () => { 
    setOpen(true); 
    incrementRecipeUploadCount(recipeId); // Call the recipe upload count
    incrementUploadCount(); // Call the upload count
  };

  const handleClose = () => { setOpen(false); };

  return (
    <Box sx={recipePageStyle}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#38E2DF"
        }}>
        <Box
          sx={{
            width: "100vw",
            minHeight: "20vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2
          }}>
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
            }}>
            <CardMedia
              component="img"
              image={imageSrc}
              alt={title} // Use the title as the alt text for better accessibility
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
          }}>
          <ThemeProvider theme={buttonTheme}>
            <Button
              onClick={handleClickOpen}
              variant="contained"
              sx={{
                width: "60vw",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4
              }}>
              <ThemeProvider theme={textTheme}>
                <Typography variant="button">
                  Upload Quest Photo
                </Typography>
              </ThemeProvider>
            </Button>
          </ThemeProvider>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle bgcolor={"#38E2DF"} borderBottom={2}>
              <Box bgcolor={"#FEAF2F"} border={2}>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="button" display={"flex"} justifyContent={"center"}>
                    Quest Complete!
                  </Typography>
                </ThemeProvider>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ bgcolor: "#FEAF2F" }}>
              <DialogContentText>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="body1" display={"flex"} justifyContent={"center"}>
                    You earned: 10 XP!
                  </Typography>
                </ThemeProvider>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="body1" display={"flex"} justifyContent={"center"}>
                    Got: 100 Coins
                  </Typography>
                </ThemeProvider>
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ bgcolor: "#FEAF2F" }}>
              <ThemeProvider theme={buttonTheme}>
                <Button onClick={handleClose} variant="contained">
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6" display={"flex"} justifyContent={"center"}>
                      Continue
                    </Typography>
                  </ThemeProvider>
                </Button>
              </ThemeProvider>
            </DialogActions>
          </Dialog>
        </Box>

        <Box
          sx={{
            width: "100vw",
            height: "vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: 2,
            borderColor: "black"
          }}>
          <ThemeProvider theme={textTheme}>
            <Typography variant="h3" align="center">
              {title}
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#FEAF2F"
        }}>
        <ThemeProvider theme={textTheme}>
          <Typography variant="body1" marginLeft={5} marginRight={5}>
            {children}
          </Typography>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
