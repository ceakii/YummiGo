import RecipeContainer from "../../components/RecipeContainer"
import GreekYogurtwFBaN from "/images/GreekYogurtwFBaN.png";

export default function greekyogurtwfban() {
  return (
    <RecipeContainer
      title="Greek Yogurt with Fresh Berries and Nuts"
      imageSrc={GreekYogurtwFBaN}
    >
      {`
        Servings: 1

        -----------------------------------------------------------------------------------------------------
        Ingredients 
        • Raspberries 1 cup (150 g)
        • Yogurt 1 cup (240 g)
        • Honey 1 teaspoon (5 g)

        -----------------------------------------------------------------------------------------------------
        Directions
        1. Place the yogurt as a base in a bowl and then top with the raspberries and then pour over some honey.

      `}
    </RecipeContainer>
  );
}



