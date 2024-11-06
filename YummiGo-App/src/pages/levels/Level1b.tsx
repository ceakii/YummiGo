import {
  Box,
  Button,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { buttonTheme, pageStyle, textTheme } from "../../Style";
import { useNavigate } from "react-router-dom";

// Image Paths
import HummusaVeggieSticks from "/images/HummusaVeggieSticks.png";

export default function Level1b() {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden" }
  const navigate = useNavigate();

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
              width: "40vw",
              height: "40vw",
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
              image={HummusaVeggieSticks}
              alt="Carrotti"
              sx={{
                width: "38vw",
                height: "38vw",
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
              Level 1b: A Healthy Snack
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
              <Typography variant="body1">
                Read about Hummus and Veggie Sticks.
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Rewards Header */}
          <Grid size={"auto"} flexWrap={"wrap"}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h3">
                Reward(s):
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Rewards Description */}
          <Grid size={"auto"} flexWrap={"wrap"} padding={2}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="body1">
                Recipe: Hummus and Veggie Sticks
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
                onClick={() => navigate("/YummiGo/info/hummusaveggiesticksinfo")}
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
              >
                {/* Button Label */}
                <ThemeProvider theme={textTheme}>
                  <Typography variant="button">
                    START
                  </Typography>
                </ThemeProvider>
              </Button>
            </ThemeProvider>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}