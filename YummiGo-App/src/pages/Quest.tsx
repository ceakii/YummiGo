import {
  Box,
  Button,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import { useQuestUpload } from "../../QuestUploadContext"; // Importing the hook for context

// Image Paths
import Trophy from "/images/Trophy.png";
import QuestIcon from "/images/QuestIcon.png";

export default function Quest() {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden" };
  const navigate = useNavigate();
  const { incrementQuestCount } = useQuestUpload();  // Access the increment function

  // Function to handle the quest click and increment the counter
  const handleQuestClick = () => {
    incrementQuestCount();  // Increment quest count when quest is clicked
    navigate("/YummiGo/quests/quest1");  // Navigate to the quest page
  };

  return (
    <Box sx={recipePageStyle}>
      {/* Page Container */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#38E2DF"
      }}>
        {/* Picture and Title Container */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#38E2DF"
        }}>
          {/* Image Container */}
          <Box sx={{
            width: "100vw",
            minHeight: "20vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2
          }}>
            <Box sx={{
              width: "40vw",
              height: "40vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: "10%",
              boxShadow: 4
            }}>
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

          <Box sx={{
            width: "100vw",
            height: "vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: 2,
            borderColor: "black",
            bgcolor: "#FEAF2F"
          }}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h4" align="center">
                Available Quests
              </Typography>
            </ThemeProvider>
          </Box>
        </Box>

        {/* Quests List Container */}
        <Box sx={{
          width: "vw",
          height: "vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 5
        }}>
          <Grid display="flex" flexDirection={"column"} flexGrow={1} container spacing={5}>
            {/* Quest 1 */}
            <Grid display="flex" flexDirection={"row"} justifyContent={"space-between"}>
              <Grid size={{ xs: 3, sm: 2, md: 2, lg: 2 }}>
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

              <Grid size={{ xs: 9, sm: 10, md: 10, lg: 10 }}>
                <ThemeProvider theme={buttonTheme}>
                  <Button
                    onClick={handleQuestClick}  // Updated onClick to increment counter and navigate
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "#FEAF2F",
                      borderRadius: "10%",
                      boxShadow: 4
                    }}
                  >
                    <Grid display="flex" flexDirection={"column"} padding={2}>
                      <Grid size={"auto"}>
                        <ThemeProvider theme={textTheme}>
                          <Typography variant="h3">
                            Quest 1
                          </Typography>
                        </ThemeProvider>
                      </Grid>

                      <Grid size={"auto"} flexWrap={"wrap"}>
                        <ThemeProvider theme={textTheme}>
                          <Typography variant="body1">
                            Cook one recipe.
                          </Typography>
                        </ThemeProvider>
                      </Grid>

                      <Grid padding={1}>
                        {<ArrowForwardIcon />}
                      </Grid>
                    </Grid>
                  </Button>
                </ThemeProvider>
              </Grid>
            </Grid>

            {/* Quest 2 (same pattern can be followed for more quests) */}
            {/* Quest 2 here is not interactive but can follow a similar structure */}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
