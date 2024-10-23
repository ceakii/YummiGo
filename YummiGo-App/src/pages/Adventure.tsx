import { Box, ThemeProvider, Typography } from "@mui/material";
import { pageStyle, textTheme } from "../Style";

export default function Adventure() {
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
          Adventure Page Coming Soon!
        </Typography>
      </ThemeProvider>
    </Box>
  );
}