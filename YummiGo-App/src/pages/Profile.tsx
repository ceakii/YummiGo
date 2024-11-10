import { useContext } from 'react'; // Import useContext here
import {
  Box,
  ThemeProvider,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { pageStyle, textTheme } from "../Style";
import { useRecipeUpload } from "../../RecipeUploadContext";
import { useQuestUpload } from "../../QuestUploadContext";
import { useUpload } from "../../UploadContext";
import HeroAvatarPfp from "/images/HeroAvatarPfp.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from 'react-router-dom'; // Import Navigate here

export default function Profile() {
  const navigate = useNavigate();
  const { recipeUploadCount } = useRecipeUpload(); // Get recipe upload count from context
  const { questUploadCount } = useQuestUpload();
  const { UploadCount } = useUpload();
  const { user, logout } = useContext(AuthContext); // Access user and logout function from AuthContext

  // If the user is not logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/YummiGo/login" />;
  }

  const customPageStyle = {
    ...pageStyle,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1vw",
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
          height: "70vw",
          width: "70vh",
          border: "1px",
          borderRadius: "50%",
          marginTop: "33vw",
        }}
      />

      <ThemeProvider theme={textTheme}>
        <Typography variant="h3">{user}</Typography> {/* Display the logged-in username */}
      </ThemeProvider>

      <Button sx={{ ...orangeBox, textTransform: "none" }}>
        <ThemeProvider theme={textTheme}>
          <Box sx={textSpacing}>
            <Typography variant="h4">Recipes</Typography>
            <Typography variant="h4">{recipeUploadCount}/12</Typography>
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

      <Button sx={{ ...orangeBox, textTransform: "none" }}>
        <ThemeProvider theme={textTheme}>
          <Box sx={textSpacing}>
            <Typography variant="h4">Uploads</Typography>
            <Typography variant="h4">{UploadCount}</Typography>
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
