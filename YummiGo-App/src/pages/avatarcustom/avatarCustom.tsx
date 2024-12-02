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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import { pageStyle, textTheme } from "../../Style";
import avatarimg from "/images/avatar_customization_screen.png";
import avatarimgwCrown from "/images/avatar_customization_wCrown.png";
import avatarimgwWizard from "/images/avatar_customization_wWizard.png";
import avatarimgwBaseball from "/images/avatar_customization_wBaseball.png";
import avatarimgwCowboy from "/images/avatar_customization_wCowboy.png";
import avatarimgwSanta from "/images/avatar_customization_wSanta.png";

import hatIcon from "/images/hat_icon.png";
import shirtIcon from "/images/ShirtIcon.png";
import pantsIcon from "/images/PantsIcon.png";
import shoesIcon from "/images/ShoeIcon.png";
import bkgIcon from "/images/BkgIcon.png";

import wizardHatIcon from "/images/WizardHat.png";
import crownIcon from "/images/Crown.png";
import baseballCapIcon from "/images/BaseballCap.png";
import cowboyHatIcon from "/images/CowboyHat.png";
import santaHatIcon from "/images/SantaHat.png";

import bkgPink from "/images/bkg_Pink.png";

export default function AvatarCustom() {
  const [hatAnchorEl, setHatAnchorEl] = useState<null | HTMLElement>(null);
  const [bkgAnchorEl, setBkgAnchorEl] = useState<null | HTMLElement>(null);
  const [currentHat, setCurrentHat] = useState<string | null>(null);
  const [confirmationOpenHat, setConfirmationOpenHat] = useState(false);
  const [selectedHat, setSelectedHat] = useState<string | null>(null);

  const [currentBkg, setCurrentBkg] = useState<string | null>(null);
  const [confirmationOpenBkg, setConfirmationOpenBkg] = useState(false);
  const [selectedBkg, setSelectedBkg] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0)");

  const handleHatIconClick = (event: MouseEvent<HTMLElement>) => {
    setHatAnchorEl(hatAnchorEl ? null : event.currentTarget);
    setBkgAnchorEl(null);
  };

  const handleBkgIconClick = (event: MouseEvent<HTMLElement>) => {
    setBkgAnchorEl(bkgAnchorEl ? null : event.currentTarget);
    setHatAnchorEl(null);
  };
  const handleHatClick = (hat: string) => {
    setSelectedHat(hat);
    setConfirmationOpenHat(true);
  };

  const handleHatSelection = () => {
    if (selectedHat) {
      setCurrentHat(selectedHat);
    }
    setConfirmationOpenHat(false);
    setHatAnchorEl(null);
  };

  const getAvatarImage = () => {
    switch (currentHat) {
      case "crown":
        return avatarimgwCrown;
      case "wizard":
        return avatarimgwWizard;
      case "baseball":
        return avatarimgwBaseball;
      case "cowboy":
        return avatarimgwCowboy;
      case "santa":
        return avatarimgwSanta;
      default:
        return avatarimg;
    }
  };

  const handleBkgClick = (bkg: string) => {
    setSelectedBkg(bkg);
    setConfirmationOpenBkg(true);
  };

  const handleBkgSelection = () => {
    if (selectedBkg) {
      setCurrentBkg(selectedBkg);
    }
    setConfirmationOpenBkg(false);
    setBkgAnchorEl(null);
  };

  const getBackground = () => {
    switch (currentBkg) {
      case "pink":
        return bkgPink;
      default:
    }
  };

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

  const getCombinedImage = () => {
    const background = getBackground();
    const avatar = getAvatarImage();
    return background ? `${background}, ${avatar}` : avatar;
  };

  return (
    <Box sx={customPageStyle}>
      <Box
        sx={{
          position: "relative", // Enables absolute positioning inside the parent
          width: "100%", // Makes the parent take full width
          height: "70vh", // Optional: sets a height for the parent container
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Background Overlay */}
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0)", // Semi-transparent black overlay
            borderRadius: "5% 5% 50% 50%", // Optional: to make the overlay circular if needed
            width: "30vh",
            height: "59vh",
          }}
        />
        <Box
          component="img"
          sx={{
            height: "70vh",
            border: "1px",
            borderRadius: "30%",
            position: "absolute",
          }}
          alt="Avatar with background"
          src={getCombinedImage()}
        />
      </Box>

      <Dialog
        open={confirmationOpenHat}
        onClose={() => setConfirmationOpenHat(false)}
      >
        <DialogContent>
          <DialogContentText>
            {selectedHat === "crown"
              ? "Get Crown?"
              : selectedHat === "wizard"
              ? "Get Wizard Hat?"
              : selectedHat === "baseball"
              ? "Get Baseball Cap?"
              : selectedHat === "cowboy"
              ? "Get Cowboy Hat?"
              : selectedHat === "santa"
              ? "Get Santa Hat?"
              : "Remove all hats?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleHatSelection}>Yes</Button>
          <Button onClick={() => setConfirmationOpenHat(false)}>No</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={confirmationOpenBkg}
        onClose={() => setConfirmationOpenBkg(false)}
      >
        <DialogContent>
          <DialogContentText>
            {selectedBkg === "pink"
              ? "Get pink background"
              : "Remove background?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBkgSelection}>Yes</Button>
          <Button onClick={() => setConfirmationOpenBkg(false)}>No</Button>
        </DialogActions>
      </Dialog>

      {/*hat stuff */}
      {hatAnchorEl && (
        <Box
          sx={{
            position: "absolute",
            top: hatAnchorEl.getBoundingClientRect().top + 40,
            middle: hatAnchorEl.getBoundingClientRect(),
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
              width: "15vw",
            }}
          >
            <CardContent>
              <ThemeProvider theme={textTheme}>
                <Typography variant="h6">CHOOSE HAT</Typography>
              </ThemeProvider>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "1vh",
                }}
              >
                <Button onClick={() => handleHatClick("crown")}>
                  <Box
                    component="img"
                    src={crownIcon}
                    alt="Crown Icon"
                    sx={{ ...iconImageStyle }}
                  />
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6">Crown</Typography>
                  </ThemeProvider>
                </Button>

                <Button onClick={() => handleHatClick("wizard")}>
                  <Box
                    component="img"
                    src={wizardHatIcon}
                    alt="Wizard Hat Icon"
                    sx={{ ...iconImageStyle }}
                  />
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6">Wizard Hat</Typography>
                  </ThemeProvider>
                </Button>

                <Button onClick={() => handleHatClick("baseball")}>
                  <Box
                    component="img"
                    src={baseballCapIcon}
                    alt="Baseball Hat Icon"
                    sx={{ ...iconImageStyle }}
                  />
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6">Baseball Cap</Typography>
                  </ThemeProvider>
                </Button>

                <Button onClick={() => handleHatClick("cowboy")}>
                  <Box
                    component="img"
                    src={cowboyHatIcon}
                    alt="Cowboy Hat Icon"
                    sx={{ ...iconImageStyle }}
                  />
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6">Cowboy Hat</Typography>
                  </ThemeProvider>
                </Button>

                <Button onClick={() => handleHatClick("santa")}>
                  <Box
                    component="img"
                    src={santaHatIcon}
                    alt="Santa Hat Icon"
                    sx={{ ...iconImageStyle }}
                  />
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6">Santa Hat</Typography>
                  </ThemeProvider>
                </Button>

                {/*no hat*/}
                <Button onClick={() => handleHatClick("none")}>
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6">Remove Hat</Typography>
                  </ThemeProvider>
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      {/*Background stuff */}
      {bkgAnchorEl && (
        <Box
          sx={{
            position: "absolute",
            top: bkgAnchorEl.getBoundingClientRect().top + 40,
            middle: bkgAnchorEl.getBoundingClientRect(),
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
              width: "15vw",
            }}
          >
            <CardContent>
              <ThemeProvider theme={textTheme}>
                <Typography variant="h6">CHOOSE BACKGROUND</Typography>
              </ThemeProvider>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "1vh",
                }}
              >
                <Button onClick={() => handleBkgClick("pink")}>
                  <Box
                    component="img"
                    src={bkgPink}
                    alt="Pink bkg"
                    sx={{ ...iconImageStyle }}
                  />
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6">Pink</Typography>
                  </ThemeProvider>
                </Button>

                {/*no bkg*/}
                <Button onClick={() => handleBkgClick("none")}>
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6">Remove Bkg</Typography>
                  </ThemeProvider>
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      <Stack
        spacing={{ xs: 1, sm: 2 }}
        useFlexGap
        direction="column"
        sx={{
          position: "absolute",
          right: "2vw",
          top: "10vh",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={handleHatIconClick}
          sx={{ ...iconButtonStyle }}
          aria-label="Hats"
        >
          <Box
            component="img"
            src={hatIcon}
            alt="Hat Icon"
            sx={{ ...iconImageStyle }}
          />
        </IconButton>

        <IconButton
          onClick={handleBkgIconClick}
          sx={{ ...iconButtonStyle }}
          aria-label="Background"
        >
          <Box
            component="img"
            src={bkgIcon}
            alt="Bkg Icon"
            sx={{ ...iconImageStyle }}
          />
        </IconButton>

        {/*
        <IconButton sx={{ ...iconButtonStyle }} aria-label="Shirts">
          <Box
            component="img"
            src={shirtIcon}
            alt="Shirt Icon"
            sx={{ ...iconImageStyle }}
          />
        </IconButton>
        <IconButton sx={{ ...iconButtonStyle }} aria-label="Pants">
          <Box
            component="img"
            src={pantsIcon}
            alt="Pants Icon"
            sx={{ ...iconImageStyle }}
          />
        </IconButton>
        <IconButton sx={{ ...iconButtonStyle }} aria-label="Shoes">
          <Box
            component="img"
            src={shoesIcon}
            alt="Shoes Icon"
            sx={{ ...iconImageStyle }}
          />
        </IconButton>
        */}
      </Stack>
    </Box>
  );
}
