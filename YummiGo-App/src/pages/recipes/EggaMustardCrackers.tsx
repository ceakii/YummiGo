import RecipeContainer from "../../components/RecipeContainer"
import EggaMustardCrackers from "/images/EggaMustardCrackers.png"

export default function eggamustardcrackers() {
  return (
    <RecipeContainer
      title="Egg & Mustard Crackers"
      imageSrc={EggaMustardCrackers}
    >
      {`
        Prep Time:  5 minutes 
        Total Time: 5 minutes 

        -----------------------------------------------------------------------------------------------------
        Ingredients

        • 2 hard boiled eggs, peeled, (Shortcut)
        • 12 wheat crackers, think Rosi brand in Thailand
        • whole grain Dijon Mustard, as needed
        • fresh chives, minced
        • black pepper, as desired

        -----------------------------------------------------------------------------------------------------
        Directions

        1. Slice the eggs with a slicer or knife.

        2. Spread some mustard on each cracker, top with a slice of egg, skipping the end pieces, sprinkle on some chives then black pepper. Serve.

      `}
    </RecipeContainer>
  );
}

