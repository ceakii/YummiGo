import RecipeContainer from "../../components/RecipeContainer"
import AvocadoSmoothieImage from "/images/AvocadoSmoothie.jpg";

export default function AvocadoSmoothie() {
  return (
    <RecipeContainer
      recipeId="Avocado_Smoothie"
      title="Avocado Smoothie"
      imageSrc={AvocadoSmoothieImage}
    >
      {`
        Prep Time: 5 minutes
        Total Time: 10 minutes
        Servings: 1


        
        
        Ingredients

        • 1 ripe Haas avocado
        • 1 cup of ice
        • 1/2 cup whole or coconut milk
        • 1/4 cup condensed milk

        
        
        Directions

        1. Remove flesh of avocado and add to a blender, along with ice cubes, milk, and condensed milk. Blend until totally smooth.

        2. Transfer to a glass and serve immediately with a straw.

      `}
    </RecipeContainer>
  );
}


