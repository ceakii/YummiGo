import { Box, IconButton, Stack, Popper } from "@mui/material";
import { useState, MouseEvent } from "react";

import { pageStyle } from "../../Style";
import avatarimg from "/images/avatar_customization_screen.png";
import hatIcon from "/images/hat_icon.png";
import shirtIcon from "/images/ShirtIcon.png";
import pantsIcon from "/images/PantsIcon.png";
import shoesIcon from "/images/ShoeIcon.png";
import wizardHatIcon from "/images/WizardHat.png";
import crownIcon from "/images/Crown.png";

export default function AvatarCustom() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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
        spacing={{ xs: 1, sm: 2 }}
        useFlexGap
        sx={{
          position: "absolute",
          alignItems: "flex-end",
          justifyContent: "center",
          marginTop: "5vh",
          height: "80vh",
          pl: { xs: "80vw", sm: "90vw" },
        }}
      >
        <IconButton sx={{ ...iconButtonStyle }} onClick={handleClick}>
          <Box
            component="img"
            src={hatIcon}
            alt="Hat icon"
            sx={{ ...iconImageStyle }}
          />
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement="left-end"
            sx={{ pr: "1vw" }}
          >
            <IconButton sx={{ ...iconButtonStyle }}>
              <Box
                component="img"
                src={crownIcon}
                alt="Crown icon"
                sx={{ ...iconImageStyle }}
              />
              <Box
                component="img"
                src={wizardHatIcon}
                alt="wizard hat icon"
                sx={{ ...iconImageStyle, marginLeft: "1vw" }}
              />
            </IconButton>
          </Popper>
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