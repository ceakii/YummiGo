import { Box } from "@mui/material";
import { pageStyle } from "../Style";
import MuiImageList from "../components/MuiImageList";

export default function Recipe() {
  return (
    <Box sx={pageStyle}>
      <MuiImageList />
    </Box>
  );
}