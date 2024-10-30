//kaiden

import {
  Box,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { pageStyle, textTheme } from "../Style";

// Image Paths
import Trophy from "/images/Trophy.png";
import QuestIcon from "/images/QuestIcon.png";

export default function Quest() {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden" }

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
              image={Trophy}
              alt="Trophy"
              sx={{
                height: "38vw",
                width: "38vw",
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
          <ThemeProvider theme={textTheme}>
            <Typography variant="h3" align="center">
              Available Quests
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>

      {/* Quests Container */}
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
        {/* Quests List */}
        <Grid
          display="flex"
          flexDirection={"column"}
          flexGrow={1}
          container spacing={5}
        >
          {/* Quest 1 */}
          <Grid
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            {/* Left of Quest Box */}
            <Grid size={2}>
              {/* Image */}
              <CardMedia
                component="img"
                image={QuestIcon}
                alt="Quest Icon"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#fae7b1",
                  borderRadius: "10%",
                  boxShadow: 4
                }}
              />
            </Grid>

            {/* Right of Quest Box */}
            <Grid
              size={10}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#FEAF2F",
                borderRadius: "10%",
                boxShadow: 4
              }}
            >
              Box Right
            </Grid>
          </Grid>
          
          {/* Quest 2 */}
          <Grid
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            {/* Left of Quest Box */}
            <Grid size={2}>
              {/* Image */}
              <CardMedia
                component="img"
                image={QuestIcon}
                alt="Quest Icon"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#fae7b1",
                  borderRadius: "10%",
                  boxShadow: 4
                }}
              />
            </Grid>

            {/* Right of Quest Box */}
            <Grid
              size={10}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#FEAF2F",
                borderRadius: "10%",
                boxShadow: 4
              }}
            >
              Box Right
            </Grid>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}