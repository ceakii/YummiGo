import YummigoContainer from "../../components/YummigoContainer"
import CarrottiImage from "/images/Yummigos/001_Carrotti.png";

export default function Carrotti() {
  return (
    <YummigoContainer
      title="Carrotti"
      imageSrc={CarrottiImage}
    >
      {`
        Description of Carrotti.
      `}
    </YummigoContainer>
  );
}