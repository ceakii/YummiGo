import { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ButtonData {
  id: number;
  label: string;
}

export default function LevelContainer({ level }: { level: string }) {
  const [buttons, setButtons] = useState<ButtonData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get stored buttons from sessionStorage when the component is mounted
    const storedButtons = JSON.parse(sessionStorage.getItem("buttons") || "[]");
    setButtons(storedButtons);
  }, []);

  const handleClick = () => {
    if (buttons.length < 4) {
      const newButton = { id: buttons.length + 1, label: `Level ${buttons.length + 1}` };
      const updatedButtons = [newButton, ...buttons];
      setButtons(updatedButtons);

      // Save the updated button list to sessionStorage
      sessionStorage.setItem("buttons", JSON.stringify(updatedButtons));
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4">Level: {level}</Typography>
      <Button variant="contained" onClick={handleClick} sx={{ marginTop: 2 }}>
        Add Button to Adventure
      </Button>
    </Box>
  );
}