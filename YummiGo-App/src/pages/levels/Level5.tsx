import {
  Box,
  Button,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { buttonTheme, pageStyle, textTheme } from "../../Style";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle }
  from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import React, { useEffect, useState } from "react";

// Image Paths
import HeroImage from "/images/HeroAvatar.png";

export default function Level5() {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden" }
  const { completionStatuses, setCompletionStatuses, user } = React.useContext(AuthContext);

  const navigate = useNavigate();

  // For Dialog Box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => { setOpen(false); };

  const handleContinue = () => {
    setOpen(false);
    handleLevelCompletion(5);
    navigate("/YummiGo/");
  };

  useEffect(() => {
    const storedStatuses = localStorage.getItem("completionStatuses");
    if (storedStatuses) {
      setCompletionStatuses(JSON.parse(storedStatuses));
    } else {
      const storedSessionStatuses = sessionStorage.getItem("completionStatuses");
      if (storedSessionStatuses) {
        setCompletionStatuses(JSON.parse(storedSessionStatuses));
      }
    }
  }, [user, setCompletionStatuses]);

  const handleLevelCompletion = (levelId: number) => {
    if (setCompletionStatuses) {
      const updatedCompletionStatuses = [...completionStatuses];
      updatedCompletionStatuses[levelId - 1] = true;
      setCompletionStatuses(updatedCompletionStatuses);
    }
  };

  return (
    /* Page Container */
    <Box sx={recipePageStyle}>
      {/* Picture and Title Container */}
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
              width: "20vw",
              height: "20vw",
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
              image={HeroImage}
              alt="Dragon"
              sx={{
                width: "19vw",
                height: "19vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#36424B",
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
            borderColor: "black",
            bgcolor: "#FEAF2F"
          }}
        >
          {/* Title */}
          <ThemeProvider theme={textTheme}>
            <Typography variant="h4" align="center">
              Level 5: Thank You!
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>

      {/* Levels List Container */}
      <Box
        sx={{
          width: "vw",
          height: "vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 5
        }}
      >
        {/* Level Container (Objective + Description + Browse Recipe Button) */}
        <Grid
          size={{ xs: 9, sm: 10, md: 10, lg: 10 }}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            bgcolor: "#FEAF2F",
            borderRadius: "10%",
            boxShadow: 4
          }}
        >

          {/* Level Description Header */}
          <Grid size={"auto"} flexWrap={"wrap"}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h3">
                Story:
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Description */}
          <Grid size={"auto"} flexWrap={"wrap"} padding={2}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h5" color="black">
                The path to a healthy future starts with you. Where will you go? What will you do?
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Objective Header */}
          <Grid size={"auto"} flexWrap={"wrap"}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h3">
                Objective:
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Objective */}
          <Grid size={"auto"} flexWrap={"wrap"} padding={2}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h5" color="black">
                Explore the other parts of YummiGo!
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Button Container */}
          <Box
            sx={{
              width: "100vw",
              height: "10vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "black",
              marginTop: 2
            }}
          >
            {/* Level Button */}
            <ThemeProvider theme={buttonTheme}>
            <Button
              onClick={handleClickOpen}
              variant="contained"
              sx={{
                width: "50vw",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#C67B58",
                borderRadius: 4,
              }}
              >
                {/* Button Label */}
                <ThemeProvider theme={textTheme}>
                  <Typography variant="button">
                    CLOSE
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
                      variant="h5" 
                      color="black"
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      You have completed the first chapter!
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
        </Grid>
      </Box>
    </Box>
  );
}