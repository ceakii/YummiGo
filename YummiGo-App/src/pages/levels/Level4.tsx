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
import DragonImage from "/images/Yummigos/040_Dragon.png";

export default function Level4() {
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
              image={DragonImage}
              alt="Dragon"
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
            <Typography variant="h4" fontSize={"16pt"} align="center" padding={1}>
              Level 4: The Hungry Dragon
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
          padding: 2
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
              <Typography variant="h4" fontSize = {"14pt"}>
                Story:
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Description */}
          <Grid size={"auto"} flexWrap={"wrap"} padding={2}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h5" fontSize = {"12pt"} color="black">
                You have been spotted by a carnivorous Dragon! It stares at you with the intent of making you its next meal. Fighting is not an option, but fortunately you have... vegetables?
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Objective Header */}
          <Grid size={"auto"} flexWrap={"wrap"}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h4" fontSize = {"14pt"}>
                Objective:
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Objective */}
          <Grid size={"auto"} flexWrap={"wrap"} padding={2}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h5" fontSize = {"12pt"} color="black">
                Drive away the Dragon by answering 5 questions correctly.
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Fail Conditions Header */}
          <Grid size={"auto"} flexWrap={"wrap"}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h4" fontSize = {"14pt"}>
                Failure Conditions:
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Fail Conditions */}
          <Grid size={"auto"} flexWrap={"wrap"} padding={2}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h5" fontSize = {"12pt"} color="black">
                Make 3 Mistakes.
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Rewards Header */}
          <Grid size={"auto"} flexWrap={"wrap"}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h4" fontSize = {"14pt"}>
                Reward(s):
              </Typography>
            </ThemeProvider>
          </Grid>

          {/* Level Rewards Description */}
          <Grid size={"auto"} flexWrap={"wrap"} padding={2}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h5" fontSize = {"12pt"} color="black">
                8 Recipes
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
                onClick={() => navigate("/YummiGo/quiz/Dragon")}
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