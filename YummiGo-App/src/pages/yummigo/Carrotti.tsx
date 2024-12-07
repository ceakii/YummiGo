import YummigoContainer from "../../components/YummigoContainer"
import CarrottiImage from "/images/Yummigos/001_Carrotti.png";
import { Box, Typography } from "@mui/material";

export default function Carrotti() {
  const level = 1;
  return (
    <YummigoContainer
      title="Carrotti"
      imageSrc={CarrottiImage}
      level={level}
    >
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="h4" fontSize={"14pt"} sx={{ marginTop: 3 }}>
          "The Sprout Yummigo"
        </Typography>
      </Box>
      {`
        Carrotti are very friendly and never get angry. They are born with very poor eyesight. A planted Carrotti gathers nutrients through its stem to develop its eyesight.

        Likes: Vegetables

      `}
    </YummigoContainer>
  );
}