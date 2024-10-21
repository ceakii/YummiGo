import { Box } from "@mui/material";
import { pageStyle } from "../Style";
import RecipeGrid from "../components/RecipeGrid";

export default function Recipe() {
  return (
    <Box sx={pageStyle}>
      <RecipeGrid />
    </Box>
  );
}