import React, { useState } from "react";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { Box, Button, CardMedia, ThemeProvider, Typography } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface QuizContainer {
  children: React.ReactNode;
  title: string;
  imageSrc: string;
}

export default function QuizContainer({ children, title, imageSrc }: QuizContainer) {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden" };
  const pictureFrameSize = "20vw";
  const pictureSize = "19vw";

  const [open, setOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);
  const [isButtonFlashing, setIsFlashing] = useState(false);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
  const [levelFailedOpen, setLevelFailedOpen] = useState(false);


  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); setIsFlashing(false); };
  const handleSecondOpen = () => { setSecondOpen(true); setOpen(false)};
  const handleSecondClose = () => setSecondOpen(false);
  const handleThirdOpen = () => { setThirdOpen(true); setSecondOpen(false)};
  const handleThirdClose = () => setThirdOpen(false);

  const handleWrongButtonClick = () => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 500);

    setWrongAnswerCount((prevCount) => {
      const newCount = prevCount + 1;
      
      if (newCount === 3) {
        setLevelFailedOpen(true);
      }

      return newCount;
    });
  };

  const handleLevelFailedClose = () => {
    setWrongAnswerCount(0);
    setLevelFailedOpen(false);
    navigate("/YummiGo/");
  };

  const navigate = useNavigate();

  return (
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
        <Box sx={{ width: "100vw", minHeight: "20vh", display: "flex", justifyContent: "center", alignItems: "center", padding: 2 }}>
          <Box sx={{ width: pictureFrameSize, height: pictureFrameSize, display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "white", borderRadius: "10%", boxShadow: 4 }}>
            <CardMedia component="img" image={imageSrc} alt="Level Image" sx={{ height: pictureSize, width: pictureSize, borderRadius: "10%", boxShadow: 4 }} />
          </Box>
        </Box>

        {/* Button Container */}
        <Box sx={{ width: "100vw", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", padding: 2, borderBottom: 2, borderColor: "black" }}>
          <ThemeProvider theme={buttonTheme}>
            <Button onClick={handleClickOpen} variant="contained" sx={{ width: "60vw", height: "10vh", borderRadius: 4 }}>
              <ThemeProvider theme={textTheme}>
                <Typography variant="button">Start Quiz</Typography>
              </ThemeProvider>
            </Button>
          </ThemeProvider>

          {/* First Dialog */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle bgcolor={"#38E2DF"} borderBottom={2}>
              <Box bgcolor={"#FEAF2F"} border={2}>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="button" display={"flex"} justifyContent={"center"}>Are You Ready?</Typography>
                </ThemeProvider>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ bgcolor: "#FEAF2F" }}>
              <DialogContentText>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="body1" display={"flex"} justifyContent={"center"}>Choose wisely!</Typography>
                </ThemeProvider>
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ bgcolor: "#FEAF2F" }}>
              <ThemeProvider theme={buttonTheme}>
                <Button onClick={handleSecondOpen} variant="contained">
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6" display={"flex"} justifyContent={"center"}>Proceed</Typography>
                  </ThemeProvider>
                </Button>
                <Button
                  onClick={handleWrongButtonClick}
                  variant="contained"
                  sx={{
                    backgroundColor: isButtonFlashing ? "red" : undefined,
                  }}
                >
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6" display={"flex"} justifyContent={"center"}>Wrong Choice</Typography>
                  </ThemeProvider>
                </Button>
              </ThemeProvider>
            </DialogActions>
          </Dialog>

          {/* Second Dialog */}
          <Dialog open={secondOpen} onClose={handleSecondClose}>
            <DialogTitle bgcolor={"#38E2DF"} borderBottom={2}>
              <Box bgcolor={"#FEAF2F"} border={2}>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="button" display={"flex"} justifyContent={"center"}>Quiz Ready</Typography>
                </ThemeProvider>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ bgcolor: "#FEAF2F" }}>
              <DialogContentText>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="body1" display={"flex"} justifyContent={"center"}>Let's start!</Typography>
                </ThemeProvider>
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ bgcolor: "#FEAF2F" }}>
              <ThemeProvider theme={buttonTheme}>
                <Button onClick={handleThirdOpen} variant="contained"> {/* Correct Button */}
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6" display={"flex"} justifyContent={"center"}>Begin</Typography>
                  </ThemeProvider>
                </Button>
                <Button
                  onClick={handleWrongButtonClick}
                  variant="contained"
                  sx={{
                    backgroundColor: isButtonFlashing ? "red" : undefined,
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6" display={"flex"} justifyContent={"center"}>Close</Typography>
                  </ThemeProvider>
                </Button>
              </ThemeProvider>
            </DialogActions>
          </Dialog>

          {/* Third Dialog */}
          <Dialog open={thirdOpen} onClose={handleThirdClose}>
            <DialogTitle bgcolor={"#38E2DF"} borderBottom={2}>
              <Box bgcolor={"#FEAF2F"} border={2}>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="button" display={"flex"} justifyContent={"center"}>Quiz Ready</Typography>
                </ThemeProvider>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ bgcolor: "#FEAF2F" }}>
              <DialogContentText>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="body1" display={"flex"} justifyContent={"center"}>Let's start!</Typography>
                </ThemeProvider>
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ bgcolor: "#FEAF2F" }}>
              <ThemeProvider theme={buttonTheme}>
                <Button onClick={() => navigate("/YummiGo/")} variant="contained">
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6" display={"flex"} justifyContent={"center"}>Begin</Typography>
                  </ThemeProvider>
                </Button>
                <Button
                  onClick={handleWrongButtonClick}
                  variant="contained"
                  sx={{
                    backgroundColor: isButtonFlashing ? "red" : undefined,
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6" display={"flex"} justifyContent={"center"}>Close</Typography>
                  </ThemeProvider>
                </Button>
              </ThemeProvider>
            </DialogActions>
          </Dialog>
        </Box>

        {/* Level Failed Dialog */}
      <Dialog open={levelFailedOpen} onClose={handleLevelFailedClose}>
        <DialogTitle bgcolor={"#38E2DF"}>
          <Box bgcolor={"#FEAF2F"}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="button" display={"flex"} justifyContent={"center"}>Level Failed</Typography>
            </ThemeProvider>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "#FEAF2F" }}>
          <DialogContentText>
            <ThemeProvider theme={textTheme}>
              <Typography variant="body1" display={"flex"} justifyContent={"center"}>
                You clicked the wrong answer 3 times. The level has failed.
              </Typography>
            </ThemeProvider>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ bgcolor: "#FEAF2F" }}>
          <ThemeProvider theme={buttonTheme}>
          <Button onClick={handleLevelFailedClose} variant="contained">
            <ThemeProvider theme={textTheme}>
              <Typography variant="h6" display={"flex"} justifyContent={"center"}>Close</Typography>
            </ThemeProvider>
          </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>

        {/* Title Container */}
        <Box sx={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", borderBottom: 2, borderColor: "black" }}>
          <ThemeProvider theme={textTheme}>
            <Typography variant="h3" align="center">{title}</Typography>
          </ThemeProvider>
        </Box>
      </Box>

      {/* Food Description Container */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#FEAF2F" }}>
        <ThemeProvider theme={textTheme}>
          <Typography variant="body1" marginLeft={5} marginRight={5}>{children}</Typography>
        </ThemeProvider>
      </Box>
    </Box>
  );
}