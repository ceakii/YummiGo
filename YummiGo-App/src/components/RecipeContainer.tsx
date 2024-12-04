import React, { useState, useEffect, useContext, useRef } from "react";
import Webcam from "react-webcam";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { Box, Button, CardMedia, ThemeProvider, Typography } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useQuestUpload } from "../../QuestUploadContext";
import { useRecipeUpload } from "../../RecipeUploadContext"; 
import { AuthContext } from "../context/AuthContext";
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Close } from "@mui/icons-material";

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
  const user = useContext(AuthContext);
  const username = user.user;
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");

  // Webcam reference
  const webcamRef = useRef<Webcam>(null);

  // For Dialog Box
  const [open, setOpen] = React.useState(false);

  // State for uploaded image
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);

  // Use custom hooks to get functions from contexts
  const { incrementRecipeUploadCount } = useRecipeUpload(); // From RecipeUploadContext
  const { incrementQuestCount } = useQuestUpload(); // From QuestUploadContext

  // Load photo from localStorage on mount
  useEffect(() => {
    const savedPhoto = localStorage.getItem(`${username}_recipePhoto_${recipeId}`);
    if (savedPhoto) {
      setUploadedPhoto(savedPhoto); // Load the saved photo if it exists
    }
  }, [user, recipeId]);

  // Save photo to localStorage on upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Photo = reader.result as string;
        setUploadedPhoto(base64Photo); // Update state
        localStorage.setItem(`${username}_recipePhoto_${recipeId}`, base64Photo); // Save to localStorage
      };
      reader.readAsDataURL(file);
      incrementRecipeUploadCount(recipeId); // Call the recipe upload count
      incrementQuestCount;
    }
  };

  // Handle photo capture from webcam
  const capturePhoto = () => {
    if (webcamRef.current) {
      const photo = webcamRef.current.getScreenshot();
      if (photo) {
        setUploadedPhoto(photo);
        localStorage.setItem(`${username}_recipePhoto_${recipeId}`, photo);
        setIsWebcamOpen(false); // Close the webcam modal
        incrementRecipeUploadCount(recipeId); // Call the recipe upload count
      }
    }
  }

  // Remove the uploaded photo
  const deletePhoto = () => {
    setUploadedPhoto(null);
    localStorage.removeItem(`${username}_recipePhoto_${recipeId}`); // Remove from localStorage
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
              image={uploadedPhoto || imageSrc}
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderBottom: 2,
            borderColor: "black"
          }}>
          <ThemeProvider theme={buttonTheme}>
            {/* Take Picture */}
            <Button
              component="label"
              variant="contained"
              onClick={() => setIsWebcamOpen(true)}
              sx={{
                width: "75vw",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                margin: 1
              }}>
              <ThemeProvider theme={textTheme}>
                <Typography variant="button">
                  Take Photo
                </Typography>
              </ThemeProvider>
            </Button>

            {/* Upload from Gallery */}
            <Button
              component="label"
              variant="contained"
              sx={{
                width: "75vw",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                margin: 1
              }}>
              <ThemeProvider theme={textTheme}>
                <Typography variant="button">
                  Upload Photo
                </Typography>
              </ThemeProvider>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                hidden // Hide the input and link it to the button
              />
            </Button>

            {/* Delete Photo Button */}
            {uploadedPhoto && (
                <Button
                  variant="contained"
                  color="error"
                  onClick={deletePhoto}
                  sx={{
                    width: "75vw",
                    height: "10vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 4,
                    margin: 1
                  }}
                >
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="button">
                      Delete Photo
                    </Typography>
                  </ThemeProvider>
                </Button>
              )}
            </ThemeProvider>

          {/* Webcam Modal */}
          <Dialog open={isWebcamOpen} onClose={() => setIsWebcamOpen(false)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
              >
              <DialogActions>
                {<Close 
                  onClick={() => setIsWebcamOpen(false)} 
                  color="error"
                  sx={{
                    display: "flex"
                  }}
                  style={{marginRight:"100px"}}
                />}
              </DialogActions>

              <DialogActions>
                {<FlipCameraIosIcon 
                  onClick={() => setFacingMode(facingMode === "user" ? "environment" : "user")}
                  sx={{
                    display: "flex"
                  }}
                  style={{marginLeft:"100px"}}/>}
              </DialogActions>
            </Box>
          
            <DialogContent>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
                height="auto"
                videoConstraints={{ facingMode }}
              />
            </DialogContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}>
              <DialogActions>
                {<PanoramaFishEyeIcon
                  onClick={capturePhoto}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                    transform: "scale(2)"
                  }}
                />}
              </DialogActions>
            </Box>
          </Dialog>

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
          <Typography variant="h5" color="black" marginLeft={5} marginRight={5}>
            {children}
          </Typography>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
