import YummigoContainer from "../../components/YummigoContainer"
import CarrottiImage from "/images/Yummigos/001_Carrotti.png";

export default function Carrotti() {
  return (
    <YummigoContainer
      title="Carrotti"
      imageSrc={CarrottiImage}
    >
      {`
        "The Sprout Yummigo"

        Carroti are very friendly and never get angry. They are born with very poor eyesight. 
        A planted Carrotti gathers nutrients through its stem to develop its eyesight.

        Likes: Vegetables

      `}
    </YummigoContainer>
  );
}