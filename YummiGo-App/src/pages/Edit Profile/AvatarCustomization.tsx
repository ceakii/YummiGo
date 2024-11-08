import { Box, ThemeProvider, Typography } from "@mui/material";
import { pageStyle, textTheme } from "../../Style";

export default function AvatarCustomization() {
  const customPageStyle = {
    ...pageStyle,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1vw",
  };

  return (
    <Box sx={customPageStyle}>
      
    </Box>
  );
}
