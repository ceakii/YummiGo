import React from "react";
import { pageStyle } from "../Style";
import { Box, CardMedia, Typography } from "@mui/material";

interface ContainerProps {
  children: React.ReactNode;
  title: string;
  imageSrc: string;
}

export default function Container({
  children,
  title,
  imageSrc,
}: ContainerProps) {
  return (
    <Box sx={pageStyle}>
      {/* for the blue background */}
      <div
        style={{
          backgroundColor: "#38E2DF",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* for the white background behind image */}
          <Box
            sx={{
              width: "15vw",
              height: "15vw",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              top: "-100vh",
              marginTop: "5vh",
              borderRadius: "10%",
              overflowX: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* for the image */}
            <CardMedia
              component="img"
              image={imageSrc}
              alt="Spring Roll"
              sx={{
                height: "13vw",
                width: "13vw",
                marginTop: "1vw",
                borderRadius: "10%",
              }}
            />
          </Box>
        </div>

        {/* brown box */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "20vw",
              height: "9vh",
              top: "-1vh",
              marginTop: "1vh",
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C67B58",
              overflow: "hidden", // Hide overflow
            }}
          >
            {/*Upload Quest Photo txt */}
            <Typography
              gutterBottom
              variant="h2"
              sx={{
                fontFamily: "'Moul', sans-serif",
                marginTop: "1vw",
                color: "#FFFFFF",
                marginLeft: "-2vw",
                whiteSpace: "nowrap", // Prevent wrapping
                maxWidth: "100%", // Keep the text within the box
                fontSize: "calc(1vw + 1rem)", // Responsive font size calculation
                transform: "scale(0.8)", // Scale down the text
                textShadow: `
                -1px -1px 0px #000,  
                1px -1px 0px #000,
                -1px 1px 0px #000,
                1px 1px 0px #000
                `,
              }}
            >
              Upload Quest Photo
            </Typography>
          </Box>
        </div>

        {/*Black line dividers before and after Title text */}
        <div
          style={{
            height: "1px",
            backgroundColor: "black",
            width: "100%",
            margin: "15px 0",
          }}
        />
        <Typography
          gutterBottom
          variant="h1"
          sx={{
            fontFamily: "'Moul', sans-serif",
            marginTop: "-1vw",
            color: "#FFFFFF",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textShadow: `
                -1px -1px 0px #000,  
                1px -1px 0px #000,
                -1px 1px 0px #000,
                1px 1px 0px #000
                `,
            fontSize: "calc(4vw + 1rem)", // Responsive font size calculation
            transform: "scale(0.8)", // Scale down the text
          }}
        >
          {title}
        </Typography>
        <div
          style={{
            height: "1px",
            backgroundColor: "black",
            width: "100%",
            margin: "-26px 0",
          }}
        />
      </div>
      {/*Orange bkg */}
      <div
        style={{
          backgroundColor: "#FEAF2F",
          minHeight: "50%",
          width: "100%",
          marginTop: "-16.45vw",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>


        <Typography
          gutterBottom
          variant="h4"
          sx={{
            fontFamily: "'Moul', sans-serif",
            marginTop: "-15vw",
            color: "#FFFFFF",
            marginLeft: "-6vw",
            whiteSpace: "pre-line", // Preserve line breaks
            maxWidth: "100%", // Keep the text within the box
            fontSize: "calc(1vw + 1rem)", // Responsive font size calculation
            transform: "scale(0.8)", // Scale down the text
            textShadow: `
      -1px -1px 0px #000,  
      1px -1px 0px #000,
      -1px 1px 0px #000,
      1px 1px 0px #000
    `,
          }}
        >
          {`
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
          
          `}
        </Typography>
      </div>

      {children}
    </Box>
  );
}
