import RecipeContainer from "../../components/RecipeContainer"
import GranolaBars from "/images/GranolaBars.png";

export default function granolabar() {
  return (
    <RecipeContainer
      recipeId="Granola-Bars"
      title="Granola Bars"
      imageSrc={GranolaBars}
    >
      {`
        Prep Time:  15 mins
        Cook Time:  25 mins
        Additional Time:  1 hr
        Total Time: 1 hr 40 mins
        Servings: 8

        
        
        Ingredients

        • cooking spray
        • 2 cups rolled oats
        • ½ cup shredded coconut
        • ½ cup honey
        • 2 tablespoons creamy peanut butter
        • 1 teaspoon vanilla extract
        • ⅛ teaspoon salt

        
        
        Directions

        1. Gather all ingredients. Preheat the oven to 325 degrees F (165 degrees C). Grease a 9-inch square baking dish.

        2. Spread oats and coconut evenly across a baking sheet. Toast oats and coconut in the preheated oven until browned, about 10 minutes; transfer to a large mixing bowl.

        3. Mix honey, peanut butter, vanilla, and salt in a saucepan over medium-low heat. Cook and stir until smooth.

        4. Pour honey mixture over oats and coconut. Stir to coat. Spread mixture evenly into the prepared baking dish.

        5. Bake in the preheated oven until beginning to dry, about 15 minutes for crunchy granola bars, less if you like them chewy.

        6. Cool completely before cutting.

      `}
    </RecipeContainer>
  );
}


