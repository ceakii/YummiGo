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
          {children}
        </Typography>
      </div>

    </Box>
  );
}
