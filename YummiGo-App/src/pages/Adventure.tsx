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
          backgroundImage: `url(${AdventureBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          width: "100%",
          maxWidth: 300,
          textAlign: "center",
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
    </Box>
  );
}
