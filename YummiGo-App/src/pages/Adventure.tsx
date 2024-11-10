import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { useEffect, useState } from "react";

// Image Paths
import AdventureBackground from "/images/AdventureBackground.png";
import HeroImage from "/images/HeroAvatar.png";

interface ButtonData {
  id: number;
  label: string;
}

export default function Adventure() {
  const adventurePageStyle = { ...pageStyle };
  const navigate = useNavigate();
  const [buttons, setButtons] = useState<ButtonData[]>([]);
  const [levelCompletion, setLevelCompletion] = useState<boolean[]>([]); // Track completion of each level
  const [hoveredButtonId, setHoveredButtonId] = useState<number | null>(null);

  useEffect(() => {
    const storedButtons: ButtonData[] = JSON.parse(sessionStorage.getItem("buttons") || "[]");
    if (storedButtons.length === 0) {
      const initialButtons = [
        { id: 1, label: "Level 1" },
        { id: 2, label: "Level 2" },
        { id: 3, label: "Level 3" },
        { id: 4, label: "Level 4" },
        { id: 5, label: "Level 5" }
      ];
      setButtons(initialButtons);
      sessionStorage.setItem("buttons", JSON.stringify(initialButtons));
    } else {
      setButtons(storedButtons);
    }

    // Retrieve level completion statuses from sessionStorage
    const completionStatuses = [
      sessionStorage.getItem("level1Completed") === "true",
      sessionStorage.getItem("level2Completed") === "true",
      sessionStorage.getItem("level3Completed") === "true",
      sessionStorage.getItem("level4Completed") === "true",
      sessionStorage.getItem("level5Completed") === "true",
    ];
    setLevelCompletion(completionStatuses);
  }, []);

  return (
    <Box
      sx={{
        ...adventurePageStyle,
        backgroundImage: `url(${AdventureBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top: "43%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: 2,
          gap: 1,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        {buttons.map((button, index) => (
          <Box
            key={button.id}
            onMouseEnter={() => setHoveredButtonId(button.id)}
            onMouseLeave={() => setHoveredButtonId(null)}
            sx={{ position: "relative", display: "flex", alignItems: "center" }}
          >
            {/* Show Hover Image */}
            {hoveredButtonId === button.id && (
              <Box
                component="img"
                src={HeroImage}
                alt="Hero Image"
                sx={{
                  position: "absolute",
                  left: "-120px",
                  width: "80%",
                  opacity: 1,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            )}

            <ThemeProvider theme={buttonTheme}>
              <Button
                variant="contained"
                sx={{
                  margin: "8px",
                  width: "200px",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
                onClick={() => {
                  navigate(`/YummiGo/levels/level${button.id}`);
                }}
                disabled={(index == 0 && levelCompletion[index]) || (index > 0 && (!levelCompletion[index - 1] || levelCompletion[button.id - 1]))}
              >
                <ThemeProvider theme={textTheme}>
                  <Typography variant="button">
                    {button.label}
                  </Typography>
                </ThemeProvider>
              </Button>
            </ThemeProvider>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
