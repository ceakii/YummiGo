import React from "react";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { Box, Button, CardMedia, ThemeProvider, Typography } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle }
  from "@mui/material";
import { useNavigate } from "react-router-dom";

interface InfoContainer {
  children: React.ReactNode;
  title: string;
  imageSrc: string;
}

export default function InfoContainer({ children, title, imageSrc }: InfoContainer) {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden"}
  const pictureFrameSize = "40vw";
  const pictureSize = "38vw";

  // For Dialog Box
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const navigate = useNavigate();

  // Function to handle "Continue" click
  const handleContinue = () => {
    setOpen(false);
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
              <Box bgcolor={"#FEAF2F"} border={2}>
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
                    variant="body1"
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

            {/* Dialog Action */}
            <DialogActions sx={{ bgcolor: "#FEAF2F" }}>
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
            <Typography variant="h3" align="center">
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