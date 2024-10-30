//kaiden

import { Box, ThemeProvider, Typography } from "@mui/material";
import { pageStyle, textTheme } from "../../Style";

export default function Quest1() {
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
          Quest 1 Page Coming Soon!
        </Typography>
      </ThemeProvider>
    </Box>
  );
}