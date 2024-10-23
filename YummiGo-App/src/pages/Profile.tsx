import { Box, ThemeProvider, Typography } from "@mui/material";
import { pageStyle, textTheme } from "../Style";
//phoebes

export default function Profile() {
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
          Profile Page Coming Soon!
        </Typography>
      </ThemeProvider>
    </Box>
  );
}