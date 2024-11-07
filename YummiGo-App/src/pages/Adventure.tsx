import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { useEffect, useState } from "react";

// Image Paths
import CarrottiImage from "/images/Yummigos/001_Carrotti.png";
import AdventureBackground from "images/AdventureBackground.png";

interface ButtonData {
  id: number;
  label: string;
}

export default function Adventure() {
  const adventurePageStyle = { ...pageStyle };
  const navigate = useNavigate();
  const [buttons, setButtons] = useState<ButtonData[]>([]);

  useEffect(() => {
    const storedButtons: ButtonData[] = JSON.parse(sessionStorage.getItem("buttons") || "[]");
    if (storedButtons.length === 0) {
      const initialButton = [{ id: 1, label: "Level 1" }];
      setButtons(initialButton);
      sessionStorage.setItem("buttons", JSON.stringify(initialButton));
    } else {
      setButtons(storedButtons);
    }
  }, []);

  return (
    <Box
      sx={{
        ...adventurePageStyle,
        backgroundImage: "url('/path/to/your/image.jpg')", // Set your background image path here
        backgroundSize: "cover", // Make sure the background covers the whole page
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        height: "100vh", // Ensure the background image covers the full viewport height
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: 2,
          gap: 2
        }}
      >
        {buttons.map((button, index) => (
          <ThemeProvider theme={buttonTheme} key={button.id}>
            <Button
              variant="contained"
              sx={{
                margin: "8px",
                width: "200px",
                borderRadius: 2,
                boxShadow: 3,
              }}
              onClick={() => navigate(`/YummiGo/levels/level${button.id}`)}
              disabled={index < buttons.length - 1}
            >
              <ThemeProvider theme={textTheme}>
                <Typography variant="button">
                  {button.label}
                </Typography>
              </ThemeProvider>
            </Button>
          </ThemeProvider>
        ))}
      </Box>
      <Grid flexGrow={1} flexWrap="wrap" container spacing={0.5} display="flex">
        {/*Level 1 */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{ height: 300 }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/levels/level1")}
            >
              <CardMedia
                component="img"
                image={CarrottiImage}
                alt="Level 1"
                sx={{
                  height: 300,
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 30,
                    left: 0,
                    width: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.54)",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Level 1: Carrotti
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
