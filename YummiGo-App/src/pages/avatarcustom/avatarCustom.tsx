import { Box, IconButton, Stack } from "@mui/material";
import { useState } from "react";

import { pageStyle } from "../../Style";
import avatarimg from "/images/avatar_customization_screen.png";
import hatIcon from "/images/hat_icon.png";
import shirtIcon from "/images/ShirtIcon.png";
import pantsIcon from "/images/PantsIcon.png";
import shoesIcon from "/images/ShoeIcon.png";
import wizardHatIcon from "/images/WizardHat.png";
import crownIcon from "/images/Crown.png";



export default function AvatarCustom() {
  const [isExpanded, setIsExpanded] = useState(false);

  const customPageStyle = {
    ...pageStyle,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "1vw",
  };

  const iconButtonStyle = {
    bgcolor: "#38E2DF",
    borderRadius: "10px",
    p: "1vh",
  };

  const iconImageStyle = {
    width: { xs: "clamp(4vh, 10vw, 15vh)", sm: "clamp(4vh, 4vw, 7vh)" },
    height: { xs: "clamp(4vh, 10vw, 15vh)", sm: "clamp(4vh, 3vw, 7vh)" },
  };

  return (
    <Box sx={customPageStyle}>
      <Box
        component="img"
        sx={{
          height: "70vh",
          border: "1px",
          borderRadius: "50%",
        }}
        alt="Avatar customization screen"
        src={avatarimg}
      />
      <Stack
        sx={{ position: "absolute", marginRight: "-90%", marginTop: "15%" }}
      >
        <IconButton
          sx={{ ...iconButtonStyle, pr: "10vh" }}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <Box
            component="img"
            src={hatIcon}
            alt="Hat icon"
            sx={{ ...iconImageStyle }}
          />
        </IconButton>

        <IconButton sx={iconButtonStyle}>
          <Box
            component="img"
            src={shirtIcon}
            alt="Shirt icon"
            sx={iconImageStyle}
          />
        </IconButton>

        <IconButton sx={iconButtonStyle}>
          <Box
            component="img"
            src={pantsIcon}
            alt="Pants icon"
            sx={iconImageStyle}
          />
        </IconButton>

        <IconButton sx={iconButtonStyle}>
          <Box
            component="img"
            src={shoesIcon}
            alt="Shoes icon"
            sx={iconImageStyle}
          />
        </IconButton>
      </Stack>
    </Box>
  );
}
