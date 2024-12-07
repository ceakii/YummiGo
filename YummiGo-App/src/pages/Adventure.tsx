import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

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
  const { completionStatuses } = useContext(AuthContext);
  const [hoveredButtonId, setHoveredButtonId] = useState<number | null>(null);

  useEffect(() => {
    const initialButtons = [
      { id: 1, label: "Level 1" },
      { id: 2, label: "Level 2" },
      { id: 3, label: "Level 3" },
      { id: 4, label: "Level 4" },
      { id: 5, label: "Level 5" }
    ];
    setButtons(initialButtons);
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
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          top: { xs: "43%", sm: "50%" },
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: 15,
          gap: 1,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        {buttons.map((button) => (
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
                  top: "-120px",
                  width: "100%",
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
                disabled={button.id > 1 && !completionStatuses[button.id - 2]}
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
