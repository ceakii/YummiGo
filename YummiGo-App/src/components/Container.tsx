import React from 'react';
import { pageStyle } from "../Style";
import { Box, CardMedia, Typography } from "@mui/material";


interface ContainerProps {
  children: React.ReactNode;  // children should be of type React.ReactNode
  title: string;              // title is a string
  imageSrc: string;
}

export default function Container({ children, title, imageSrc }: ContainerProps) {

  return (
    <Box sx={pageStyle}>
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
          <Box
            sx={{
              width: "15vw",
              height: '15vw',
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              top: "-100vh",
              marginTop: '5vh',
              borderRadius: '10%',
              overflowX: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              
            }}
          >
            <CardMedia
                component="img"
                image={imageSrc}
                alt="Spring Roll"
                sx={{
                  height: '13vw',
                  width: '13vw',
                  marginTop: '1vw',
                  borderRadius: '10%',


                }}
              />

          </Box>
          
        </div>
        <div>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
        </div>
      </div>
      {children}
    </Box>
  );
}
