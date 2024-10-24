import { Box, ThemeProvider, Typography } from "@mui/material";
import { pageStyle, textTheme } from "../Style";
//hamza

export default function Settings() {
  const customPageStyle = {
    ...pageStyle,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <Box sx={customPageStyle}>
      <ThemeProvider theme={textTheme}>
        <Typography variant="h4">
          Settings Page Coming Soon!
        </Typography>
      </ThemeProvider>
    </Box>
  );
}