import RecipeContainer from "../../components/RecipeContainer"
import HummusaVeggieSticks from "/images/HummusaVeggieSticks.png"

export default function hummusaveggiesticks() {
  return (
    <RecipeContainer
      recipeId="Hummus_and_Veggie_Sticks"
      title="Hummus and Veggie Sticks"
      imageSrc={HummusaVeggieSticks}
    >
      {`
        Servings: 1 
        Prep time: 10 mins 
        Cooking time: 0 mins

        
        
        Ingredients 
        • 50g/3.5oz red capsicum/bell pepper (1/4 medium capsicum)
        • 50g/1.8oz celery
        • 100g/3.5oz carrot (about 1 small-med size)
        • 150g/5.3oz Homemade hummus or 75g store-bought* hummus

        
        
        Directions
        1. Use this easy recipe to make your own hummus. Takes less than 10 minutes.

        2. Cut the capsicum, celery and carrot into thin strips.
        
        3. Place the hummus in a bowl and other ingredients on a plate, ready to serve.

      `}
    </RecipeContainer>
  );
}




