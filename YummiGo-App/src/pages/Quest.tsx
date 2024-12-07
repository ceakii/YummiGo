// src/Quest.tsx
import {
  Box,
  Button,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useQuestUpload } from "../../QuestUploadContext";

// Image Paths
import Trophy from "/images/Trophy.png";
import QuestIcon from "/images/QuestIcon.png";

export default function Quest() {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden" };
  const navigate = useNavigate();
  const { questUploadCount } = useQuestUpload();

  const handleQuestClick = (questId: string) => {
    navigate(`/YummiGo/quests/${questId}`); // Navigate to the quest page
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
          backgroundColor: "#38E2DF",
        }}
      >
        {/* Image Container */}
        <Box
          sx={{
            width: "100vw",
            minHeight: "20vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
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
              boxShadow: 4,
            }}
          >
            {/* Image */}
            <CardMedia
              component="img"
              image={Trophy}
              alt="Trophy"
              sx={{
                width: { xs: "38vw", sm: "19vw" },
                height: { xs: "38vw", sm: "19vw" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#36424B",
                borderRadius: "10%",
                boxShadow: 4,
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
            bgcolor: "#FEAF2F",
          }}
        >
          {/* Title */}
          <ThemeProvider theme={textTheme}>
            <Typography variant="h4" fontSize={"20pt"} align="center">
              Available Quests
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
          padding: 2,
        }}
      >
        {/* Quests List */}
        <Grid
          display="flex"
          flexDirection={"column"}
          flexGrow={1}
          container
          spacing={5}
        >
          {/* Quest 1 */}
          <Grid
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems= "center"
          >
            {/* Left of Quest Container (Scroll Icon) */}
            <Grid size={{ xs: 3, sm: 2, md: 2, lg: 2 }}>
              {/* Image */}
              <CardMedia
                component="img"
                image={QuestIcon}
                alt="Quest Icon"
                sx={{
                  //width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#fae7b1",
                  borderRadius: "10%",
                  boxShadow: 4,
                }}
              />
            </Grid>

            {/* Right of Quest Container (Title + Description) */}
            <Grid size={{ xs: 9, sm: 10, md: 10, lg: 10 }}>
              <ThemeProvider theme={buttonTheme}>
                <Button
                  onClick={() => handleQuestClick("quest1")} // Updated onClick to pass questId
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#FEAF2F",
                    borderRadius: "10%",
                    boxShadow: 4,
                  }}
                >
                  {/* Button Contents */}
                  <Grid display="flex" flexDirection={"column"} padding={2}>
                    {/* Quest Title */}
                    <Grid size={"auto"}>
                      <ThemeProvider theme={textTheme}>
                        <Typography variant="h4" fontSize={"18pt"}>Quest 1</Typography>
                      </ThemeProvider>
                    </Grid>

                    {/* Quest Description */}
                    <Grid size={"auto"} flexWrap={"wrap"}>
                      <ThemeProvider theme={textTheme}>
                        <Typography variant="h5" fontSize={"14pt"}>
                          Add a photo to any recipe
                        </Typography>
                      </ThemeProvider>
                    </Grid>

                    {/* Quest Bottom Right Arrow Icon */}
                    <Grid padding={1}>{<ArrowForwardIcon />}</Grid>
                  </Grid>
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>

          {/* Quest 2 */}
          <Grid
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems= "center"
          >
            {/* Left of Quest Container (Scroll Icon) */}
            <Grid size={{ xs: 3, sm: 2, md: 2, lg: 2 }}>
              {/* Image */}
              <CardMedia
                component="img"
                image={QuestIcon}
                alt="Quest Icon"
                sx={{
                  //width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: (questUploadCount < 1) ? "#b0a996" : "#fae7b1",
                  borderRadius: "10%",
                  boxShadow: 4,
                }}
              />
            </Grid>

            {/* Right of Quest Container (Title + Description) */}
            <Grid size={{ xs: 9, sm: 10, md: 10, lg: 10 }}>
              <ThemeProvider theme={buttonTheme}>
                <Button
                  onClick={() => handleQuestClick("quest2")} // Updated onClick to pass questId
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: (questUploadCount < 1) ? "#b0a996" : "#FEAF2F",
                    borderRadius: "10%",
                    boxShadow: 4,
                  }}
                  disabled={questUploadCount < 1}
                >
                  {/* Button Contents */}
                  <Grid display="flex" flexDirection={"column"} padding={2}>
                    {/* Quest Title */}
                    <Grid size={"auto"}>
                      <ThemeProvider theme={textTheme}>
                        <Typography variant="h4" fontSize={"18pt"}>Quest 2</Typography>
                      </ThemeProvider>
                    </Grid>

                    {/* Quest Description */}
                    <Grid size={"auto"} flexWrap={"wrap"}>
                      <ThemeProvider theme={textTheme}>
                        <Typography variant="h5" fontSize={"14pt"}>
                          Add a photo to any recipe two times
                        </Typography>
                      </ThemeProvider>
                    </Grid>

                    {/* Quest Bottom Right Arrow Icon */}
                    <Grid padding={1}>{<ArrowForwardIcon />}</Grid>
                  </Grid>
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>

          {/* Additional quests can be added in a similar manner */}
        </Grid>
      </Box>
    </Box>
  );
}
