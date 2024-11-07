import InfoContainer from "../../components/InfoContainer"
import HummusaVeggieSticks from "/images/HummusaVeggieSticks.png"

export default function hummusaveggiesticks() {
  return (
    <InfoContainer
      title="Hummus and Veggie Sticks"
      imageSrc={HummusaVeggieSticks}
    >
      {`
        • Hummus, made from chickpeas and tahini, provide a plant-based protein source, beneficial for muscle maintenance and energy.

        • Carrots are high in beta-carotene (vitamin A), which is essential for eye health, skin health, and immune function.

        • Celery contains potassium, magnesium, and other electrolytes, which aid in hydration and muscle function.

      `}
    </InfoContainer>
  );
}




