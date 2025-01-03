import {
  Box,
  Button,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { buttonTheme, pageStyle, textTheme } from "../../Style";
import { useQuestUpload } from "../../../QuestUploadContext";
import { useRecipeUpload } from "../../../RecipeUploadContext";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

// Image Paths
import FruitBowl from "/images/FruitBowl.png";

export default function Quest1() {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden" }
  const { questUploadCount, incrementQuestCount } = useQuestUpload();
  const { recipeUploadCount } = useRecipeUpload();

  const [ clicked, setClicked ] = useState(false);

  const { user } = useContext(AuthContext);

  // For Dialog Box
  const [open, setOpen] = useState(false);
  const handleClose = () => { 
    incrementQuestCount("quest1");
    const coinsString = localStorage.getItem(`${user}_coins`);
    const coins = coinsString ? parseInt(coinsString, 10) : 0;
    localStorage.setItem(`${user}_coins`, (coins + 200).toString());
    setClicked(false);
    setOpen(false); 
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
              width: { xs: "40vw", sm: "20vw" },
              height: { xs: "40vw", sm: "20vw" },
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
              image={FruitBowl}
              alt="Fruit Bowl"
              sx={{
                width: { xs: "38vw", sm: "19vw" },
                height: { xs: "38vw", sm: "19vw" },
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
            <Typography variant="h4" fontSize={"16pt"} align="center" padding={2}>
              Quest 1
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>

      {/* Quests List Container */}
      <Box
        sx={{
          width: "vw",
          height: "vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2
        }}
      >
        {/* Quest Container (Objective + Description + Browse Recipe Button) */}
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
          {/* Quest Objective Header */}
          <Grid size={"auto"} flexWrap={"wrap"}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h4" fontSize = {"14pt"}>
                Objective:
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Quest Objective */}
          <Grid size={"auto"} flexWrap={"wrap"} padding={2}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h5" fontSize = {"12pt"} color="black">
                Cook one recipe and Upload a picture of it!
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Quest Description Header */}
          <Grid size={"auto"} flexWrap={"wrap"}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h4" fontSize = {"14pt"}>
                Description:
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Quest Description */}
          <Grid size={"auto"} flexWrap={"wrap"} padding={2}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h5" fontSize = {"12pt"} color="black">
                Your first quest to start your healthy adventure!
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Quest Button Container */}
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
            {/* Quest Button */}
            <ThemeProvider theme={buttonTheme}>
              { questUploadCount === 0 && !(recipeUploadCount > 0) ? (
              <Button
                onClick={() => setClicked(true)}
                variant="contained"
                sx={{
                  width: "50vw",
                  height: "10vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#C67B58",
                  borderRadius: 4
                }}
                disabled={clicked}
              >
                {/* Button Label */}
                <ThemeProvider theme={textTheme}>
                  { !clicked ? (
                  <Typography variant="button">
                    Accept
                  </Typography>
                  ) : (
                  <Typography variant="button">
                    Accepted
                  </Typography>
                  )}
                </ThemeProvider>
              </Button>
              ) : (
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                disabled={ questUploadCount >= 1 }
                sx={{
                  width: "50vw",
                  height: "10vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#C67B58",
                  borderRadius: 4
                }}
              >
                {/* Button Label */}
                <ThemeProvider theme={textTheme}>
                  { !(questUploadCount >= 1) ? (
                  <Typography variant="button">
                    Complete
                  </Typography>
                  ) : (
                    <Typography variant="button">
                    Completed
                  </Typography>
                  )}
                </ThemeProvider>
              </Button>
              )}
            </ThemeProvider>
          </Box>

          { (questUploadCount > 0) ? null : (
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle bgcolor={"#38E2DF"} borderBottom={2}>
              <Box>
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
                    Got: 200 Coins
                  </Typography>
                </ThemeProvider>
              </DialogContentText>

            </DialogContent>
            <DialogActions sx={{ bgcolor: "#FEAF2F", display:"flex", justifyContent:"center"}}>
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
          )}
        </Grid>
      </Box>
    </Box>
  );
}