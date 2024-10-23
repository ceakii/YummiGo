import RecipeContainer from "../../components/RecipeContainer"
import EggaMustardCrackers from "/images/EggaMustardCrackers.png"
import { Box, ThemeProvider, Typography } from "@mui/material";
import { textTheme } from "../../Style"

export default function eggamustardcrackers() {
  return (
    <RecipeContainer
      title="Egg & Mustard Crackers"
      imageSrc={EggaMustardCrackers}
    >
      {/* Food Description Container */}
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          backgroundColor: "#FEAF2F"
        }}
      >
        <ThemeProvider theme={textTheme}>
          <Typography
            variant="body1"
            display="block"
          >
            <div style={{ display: "block", whiteSpace: "" }}>
              Prep Time:
              45 mins
              
              Cook Time:
              5 mins

              Total Time:
              50 mins
                
              Servings:
              8

              Yield:
              8 spring rolls


              Ingredients

              • 2 ounces rice vermicelli
              • 8 rice wrappers (8.5 inch diameter)
              • 8 large cooked shrimp - peeled, deveined and cut in half
              • 2 leaves lettuce, chopped
              • 3 tablespoons chopped fresh mint leaves
              • 3 tablespoons chopped fresh cilantro
              • 1 ⅓ tablespoons chopped fresh Thai basil

              Sauces:
              • ¼ cup water
              • 2 tablespoons fresh lime juice
              • 2 tablespoons white sugar
              • 4 teaspoons fish sauce
              • 1 clove garlic, minced
              • ½ teaspoon garlic chili sauce
              • 3 tablespoons hoisin sauce
              • 1 teaspoon finely chopped peanuts
              
              Directions

              1. Gather all ingredients.

              2. Fill a large pot with lightly salted water and bring to a rolling boil; stir in vermicelli pasta and return to a boil. Cook pasta uncovered, stirring occasionally, until the pasta is tender yet firm to the bite, 3 to 5 minutes.

              3. Fill a large bowl with warm water. Dip one wrapper into the hot water for 1 second to soften.

              4. Lay wrapper flat; place 2 shrimp halves in a row across the center, add some vermicelli, lettuce, mint, cilantro, and basil, leaving about 2 inches uncovered on each side.

              5. Fold uncovered sides inward, then tightly roll the wrapper, beginning at the end with lettuce. Repeat with remaining ingredients.

              6. For the sauces: Mix water, lime juice, sugar, fish sauce, garlic, and chili sauce in a small bowl until well combined.

              7. Mix hoisin sauce and peanuts in a separate small bowl.

              8. Serve rolled spring rolls with fish sauce and hoisin sauce mixtures.
            </div>
            
          </Typography>
        </ThemeProvider>
      </Box>
    </RecipeContainer>
  );
}
