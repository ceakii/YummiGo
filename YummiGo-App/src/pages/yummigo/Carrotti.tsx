import YummigoContainer from "../../components/YummigoContainer"
import CarrottiImage from "/images/Yummigos/001_Carrotti.png";
import { Box, Typography } from "@mui/material";

export default function Carrotti() {
  return (
    <YummigoContainer
      title="Yummigo: Carrotti"
      imageSrc={CarrottiImage}
    >
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body1" sx={{ marginTop: 10 }}>
          "The Sprout Yummigo"
        </Typography>
      </Box>
      {`
        Carroti are very friendly and never get angry. They are born with very poor eyesight. A planted Carrotti gathers nutrients through its stem to develop its eyesight.

        Likes: Vegetables

      `}
    </YummigoContainer>
  );
}