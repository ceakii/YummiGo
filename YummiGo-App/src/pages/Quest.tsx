import { Box, ThemeProvider, Typography } from "@mui/material";
import { pageStyle, textTheme } from "../Style";
//kaiden

export default function Quest() {
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
          Quest Page Coming Soon!
        </Typography>
      </ThemeProvider>
    </Box>
  );
}