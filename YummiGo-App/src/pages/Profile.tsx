import { useContext } from "react"; // Import useContext here
import {
  Box,
  ThemeProvider,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { pageStyle, textTheme } from "../Style";
import { useQuestUpload } from "../../QuestUploadContext";
import { useRecipe } from "../../RecipeContext";
import HeroAvatarPfp from "/images/HeroAvatarPfp.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom"; // Import Navigate here
import { useEffect, useState } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const { recipeCount } = useRecipe();
  const [recipeUploadCount, setRecipeUploadCount] = useState(0);
  const { questUploadCount } = useQuestUpload();
  const { user, logout } = useContext(AuthContext); // Access user and logout function from AuthContext

  useEffect(() => {
    const storageKey = user;
    const prefix = `${storageKey}_recipePhoto_`;
    var count = 0;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(prefix)) {
        count++;
      }
    }

    setRecipeUploadCount(count);
  });

  // If the user is not logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/YummiGo/login" />;
  }

  const customPageStyle = {
    ...pageStyle,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  const orangeBox = {
    backgroundColor: "#FEAF2F",
    color: "#FFFFFF",
    padding: "1vw",
    borderRadius: "3vw",
    width: "80%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1vw",
  };

  const textSpacing = {
    display: "flex",
    justifyContent: "space-between", // Spaces between text items
    width: "85%", // Full width within the box
  };

  return (
    <Box sx={customPageStyle}>
      <CardMedia
        component="img"
        image={HeroAvatarPfp}
        alt="Hero Avatar"
        sx={{
          height: "100vw",
          width: "70vh",
          border: "1px",
          borderRadius: "50%",
          marginTop: "33vw"
        }}
      />

      <ThemeProvider theme={textTheme}>
        <Typography variant="h3">{user}</Typography>{" "}
        {/* Display the logged-in username */}
      </ThemeProvider>

      <Button sx={{ ...orangeBox, textTransform: "none" }}>
        <ThemeProvider theme={textTheme}>
          <Box sx={textSpacing}>
            <Typography variant="h4">Recipes</Typography>
            <Typography variant="h4">{recipeCount}/12</Typography>{" "}
          </Box>
        </ThemeProvider>
      </Button>

      <Button sx={{ ...orangeBox, textTransform: "none" }}>
        <ThemeProvider theme={textTheme}>
          <Box sx={textSpacing}>
            <Typography variant="h4">Quests</Typography>
            <Typography variant="h4">{questUploadCount}</Typography>
          </Box>
        </ThemeProvider>
      </Button>

      <Button
        sx={{ ...orangeBox, textTransform: "none" }}
        onClick={() => navigate("/YummiGo/myuploads/myuploads")}
      >
        <ThemeProvider theme={textTheme}>
          <Box sx={textSpacing}>
            <Typography variant="h4">Uploads</Typography>
            <Typography variant="h4">{recipeUploadCount}</Typography>
          </Box>
        </ThemeProvider>
      </Button>

      <Button
        sx={{ ...orangeBox, textTransform: "none" }}
        onClick={() => navigate("/YummiGo/avatarcustom/avatarcustom")}
      >
        <ThemeProvider theme={textTheme}>
          <Typography variant="h4">Edit Avatar</Typography>
        </ThemeProvider>
      </Button>

      <Button
        sx={{ ...orangeBox, textTransform: "none" }}
        onClick={logout} // Logout button
      >
        <ThemeProvider theme={textTheme}>
          <Typography variant="h4">Logout</Typography>
        </ThemeProvider>
      </Button>
    </Box>
  );
}
