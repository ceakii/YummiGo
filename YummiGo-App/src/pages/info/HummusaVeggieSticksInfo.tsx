import InfoContainer from "../../components/InfoContainer"
import HummusaVeggieSticks from "/images/HummusaVeggieSticks.png"

export default function hummusaveggiesticks() {
  return (
    <InfoContainer
      title="Hummus and Veggie Sticks"
      imageSrc={HummusaVeggieSticks}
    >
      {`
        • Carrots are high in beta-carotene (vitamin A), which is essential for eye health, skin health, and immune function.
        
        • Hummus, made from chickpeas, is rich in fiber, which aids in digestion and helps keep you full longer.

        • Bell peppers are high in antioxidants that help fight inflammation.

        • The combination of hummus and veggies has a low GI, meaning it helps regulate blood sugar, providing a steady energy source without spikes.

        • Incorporating hummus and veggie sticks into your diet regularly can support weight management, improve digestion, and provide sustained energy for an overall balanced diet.

      `}
    </InfoContainer>
  );
}




