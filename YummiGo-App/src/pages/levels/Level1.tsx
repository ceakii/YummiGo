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
import CarrottiImage from "/images/Yummigos/001_Carrotti.png";

export default function Level1() {
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
          {/* Image */}
          <CardMedia
            component="img"
            image={CarrottiImage}
            alt="Carrotti"
            sx={{
              width: "19vw",
              height: "19vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10%",
            }}
          />
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
              Level 1: Meeting Carrotti
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
                On your way to the castle, you spot something on the ground. 
                At first glance, it looks like a stem, but this one looks different from the surrounding vegetation.
                You decide to remove the stem, and find that you've disturbed a Carrotti! 
                It looks at you with furrowed brows and squinted eyes, perhaps it is angry.
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
                Learn about Carrotti.
              </Typography>
            </ThemeProvider>
          </Grid>
          
          {/* Level Rewards Header */}
          <Grid size={"auto"} flexWrap={"wrap"}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h3">

              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Rewards Description */}
          <Grid size={"auto"} flexWrap={"wrap"} padding={2}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="body1">

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
                onClick={() => navigate("/YummiGo/yummigo/carrotti")}
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