import React, { useContext, useState } from "react";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { Box, Button, CardMedia, ThemeProvider, Typography } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle }
  from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecipe } from "../../RecipeContext";
import { AuthContext } from "../context/AuthContext";

interface InfoContainer {
  children: React.ReactNode;
  title: string;
  imageSrc: string;
  level: number;
  recipeId: string;
}

export default function InfoContainer({ children, title, imageSrc, level }: InfoContainer) {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden"}
  const pictureFrameSize = { xs: "40vw", sm: "20vw" };
  const pictureSize = { xs: "38vw", sm: "19vw" };

  // For Dialog Box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const navigate = useNavigate();

  // Track the current level completion status
  const { completionStatuses, setCompletionStatuses } = useContext(AuthContext);

  const { incrementRecipeCount } = useRecipe();

  const handleLevelCompletion = (levelId: number) => {
    if (setCompletionStatuses) {
      const updatedCompletionStatuses = [...completionStatuses];
      updatedCompletionStatuses[levelId - 1] = true;
      setCompletionStatuses(updatedCompletionStatuses);
    }
  };

  const handleContinue = () => {
    setOpen(false);

    // Update the level as completed in AuthContext
    handleLevelCompletion(level);

    if (!completionStatuses[level - 1]) {
      incrementRecipeCount();
    }

    // Navigate to the main adventure page or another appropriate page
    navigate("/YummiGo/");
  };

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

        {/* Title Container */}
        <Box
          sx={{
            width: "100vw",
            height: "vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: 2,
            borderColor: "black"
          }}
        >
          <ThemeProvider theme={textTheme}>
            <Typography variant="h4" fontSize={"16pt"} align="center">
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
        }}
      >
        <ThemeProvider theme={textTheme}>
          <Typography variant="h5" fontSize={"12pt"} marginLeft={2} marginRight={2}>
            {children}
          </Typography>
        </ThemeProvider>
      </Box>

      {/* Button Container */}
      <Box
          sx={{
            width: "100vw",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 2,
            borderBottom: 2,
            borderColor: "black"
          }}
        >
          {/* Button */}
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
              }}
            >
              {/* Finish Reading */}
              <ThemeProvider theme={textTheme}>
                <Typography variant="button">
                  Finish Reading
                </Typography>
              </ThemeProvider>
            </Button>
          </ThemeProvider>

          {/* Dialog Box */}
          <Dialog
            open={open}
            onClose={handleClose}
          >
            {/* Dialog Title */}
            <DialogTitle bgcolor={"#38E2DF"} borderBottom={2}>
              <Box>
                <ThemeProvider theme={textTheme}>
                  <Typography
                    variant="button"
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    Level Complete!
                  </Typography>
                </ThemeProvider>
              </Box>
            </DialogTitle>

            {/* Dialog Content */}
            {completionStatuses[level - 1] ? null : (
              <DialogContent sx={{ bgcolor: "#FEAF2F" }}>
                <DialogContentText>
                  <ThemeProvider theme={textTheme}>
                    <Typography
                      variant="body1"
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      You earned:
                    </Typography>
                  </ThemeProvider>

                  <ThemeProvider theme={textTheme}>
                    <Typography
                      variant="h5" 
                      color="black"
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      Recipe: {title}
                    </Typography>
                  </ThemeProvider>

                  <ThemeProvider theme={textTheme}>
                    <Typography
                      variant="body1"
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      
                    </Typography>
                  </ThemeProvider>
                </DialogContentText>
              </DialogContent>
            )}

            {/* Dialog Action */}
            <DialogActions sx={{ bgcolor: "#FEAF2F", display: 'flex', justifyContent: 'center' }}>
              <ThemeProvider theme={buttonTheme}>
                <Button onClick={handleContinue} variant="contained">
                  <ThemeProvider theme={textTheme}>
                    <Typography
                      variant="h6"
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      Continue
                    </Typography>
                  </ThemeProvider>
                </Button>
              </ThemeProvider>
            </DialogActions>
          </Dialog>
        </Box>
    </Box>
  );
}