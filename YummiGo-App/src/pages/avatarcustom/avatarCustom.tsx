import {
  Box,
  IconButton,
  Stack,
  Popper,
  Card,
  CardContent,
  Typography,
  Button,
  ThemeProvider,
} from "@mui/material";
import { useState, MouseEvent } from "react";

import { pageStyle, textTheme } from "../../Style";
import avatarimg from "/images/avatar_customization_screen.png";
import hatIcon from "/images/hat_icon.png";
import shirtIcon from "/images/ShirtIcon.png";
import pantsIcon from "/images/PantsIcon.png";
import shoesIcon from "/images/ShoeIcon.png";
import wizardHatIcon from "/images/WizardHat.png";
import crownIcon from "/images/Crown.png";

export default function AvatarCustom() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorCrown, setAnchorCrown] = useState<null | HTMLElement>(null);
  const [anchorWiz, setAnchorWiz] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClick2 = (event: MouseEvent<HTMLElement>) => {
    setAnchorCrown(anchorCrown ? null : event.currentTarget);
  };
  const handleClick3 = (event: MouseEvent<HTMLElement>) => {
    setAnchorWiz(anchorWiz ? null : event.currentTarget);
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
      {anchorCrown && (
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: (theme) => theme.zIndex.modal + 1,
            backgroundColor: "#FEAF2F",
            padding: 2,
            borderRadius: "10px",
          }}
        >
          <Card
            sx={{
              bgcolor: "#FEAF2F",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "30vw",
              height: "30vh",
            }}
          >
            <CardContent>
              <ThemeProvider theme={textTheme}>
                <Typography variant="h4">Wear</Typography>
              </ThemeProvider>
              <Box
                sx={{
                  borderRadius: "50px",
                  width: "4vw",
                  height: "4vw",
                  bgcolor: "#FFFFFFB0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={crownIcon}
                  alt="Crown icon"
                  sx={{ ...iconImageStyle }}
                />
              </Box>

              <Button onClick={handleClick2}>
                <ThemeProvider theme={textTheme}>
                  <Typography variant="h6">Get Crown</Typography>
                </ThemeProvider>
              </Button>
            </CardContent>
          </Card>
        </Box>
      )}

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
            <IconButton
              sx={{ ...iconButtonStyle, marginRight: "0.5vw" }}
              onClick={handleClick2}
            >
              <Box
                component="img"
                src={crownIcon}
                alt="Crown icon"
                sx={{ ...iconImageStyle }}
              />
            </IconButton>
            <IconButton sx={{ ...iconButtonStyle }} onClick={handleClick3}>
              <Box
                component="img"
                src={wizardHatIcon}
                alt="wizard hat icon"
                sx={{ ...iconImageStyle }}
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
