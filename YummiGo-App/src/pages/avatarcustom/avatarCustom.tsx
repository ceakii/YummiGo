import {
  Box,
  IconButton,
  Stack,
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
import { SketchPicker } from "react-color"; // Import color picker from react-color
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

import avatarimg from "/images/avatar_customization_screen.png";
import avatarimgwCrown from "/images/avatar_customization_wCrown.png";
import avatarimgwWizard from "/images/avatar_customization_wWizard.png";
import avatarimgwBaseball from "/images/avatar_customization_wBaseball.png";
import avatarimgwCowboy from "/images/avatar_customization_wCowboy.png";
import avatarimgwSanta from "/images/avatar_customization_wSanta.png";

import hatIcon from "/images/hat_icon.png";
import bkgIcon from "/images/BkgIcon.png";

import wizardHatIcon from "/images/WizardHat.png";
import crownIcon from "/images/Crown.png";
import baseballCapIcon from "/images/BaseballCap.png";
import cowboyHatIcon from "/images/CowboyHat.png";
import santaHatIcon from "/images/SantaHat.png";
import bigRedX from "/images/bigRedX.png";
import goldCoin from "/images/goldCoin.png";

export default function AvatarCustom() {
  const [hatAnchorEl, setHatAnchorEl] = useState<null | HTMLElement>(null);
  const [bkgAnchorEl, setBkgAnchorEl] = useState<null | HTMLElement>(null);
  const [currentHat, setCurrentHat] = useState<string | null>(null);
  const [confirmationOpenHat, setConfirmationOpenHat] = useState(false);
  const [selectedHat, setSelectedHat] = useState<string | null>(null);

  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0)");
  const [colorPickerOpen, setColorPickerOpen] = useState(false); // Toggle for color picker
  const [numOfCoins, setNumOfCoins] = useState(0);

  const { boughtStatus, setBoughtStatus, user } =
    useContext(AuthContext);

  const crownHatBought = boughtStatus[0];
  const wizardHatBought = boughtStatus[1];
  const baseballHatBought = boughtStatus[2];
  const cowboyHatBought = boughtStatus[3];
  const santaHatBought = boughtStatus[4];

  const username = user ?? "";

  useEffect(() => {
    var newCoins = 0;
   
    setCurrentHat(localStorage.getItem(`${username}_currhat`));
    setBackgroundColor(localStorage.getItem(`${username}_currbkg`) ?? "");

    if (!localStorage.getItem(`${username}_coins`)) {
      localStorage.setItem(`${username}_coins`, newCoins.toString());
      setNumOfCoins(newCoins);
    } else {
      const currentCoins = parseInt(
        localStorage.getItem(`${username}_coins`) || "0",
        10
      );
      setNumOfCoins(currentCoins);
    }
  });

  const handleHatIconClick = (event: MouseEvent<HTMLElement>) => {
    setHatAnchorEl(hatAnchorEl ? null : event.currentTarget);
    setBkgAnchorEl(null);
  };

  const handleBkgIconClick = (event: MouseEvent<HTMLElement>) => {
    setBkgAnchorEl(bkgAnchorEl ? null : event.currentTarget);
    setHatAnchorEl(null);
    setColorPickerOpen(!colorPickerOpen);
  };

  const handleHatClick = (hat: string) => {
    const hatIndexes: Record<string, number> = {
      crown: 0,
      wizard: 1,
      baseball: 2,
      cowboy: 3,
      santa: 4,
    };
    setSelectedHat(hat);

    if (hat === "none") {
      // Directly handle removing hats
      handleHatSelection("none");
      return;
    }

    if (!hat || !(hat in hatIndexes)) {
      return; // Handle invalid hat case
    }

    const hatIndex = hatIndexes[hat];
    const isHatBought = boughtStatus[hatIndex];

    if (isHatBought) {
      // Directly apply the hat if already purchased
      handleHatSelection(hat);
    } else {
      // Open the dialog for unbought hats
      setConfirmationOpenHat(true);
    }
  };

  const handleHatSelection = (hat: string) => {
    const coins = parseInt(
      localStorage.getItem(`${username}_coins`) || "0",
      10
    );

    // Define hat mappings
    const hatIndexes: Record<string, number> = {
      crown: 0,
      wizard: 1,
      baseball: 2,
      cowboy: 3,
      santa: 4,
    };

    // Validate `selectedHat`
    if (!hat || !(hat in hatIndexes)) {
      setCurrentHat("none");
      localStorage.setItem(`${username}_currhat`, "none");
      setConfirmationOpenHat(false);
      setHatAnchorEl(null);
      return;
    }

    const hatIndex = hatIndexes[hat];
    const isHatBought = boughtStatus[hatIndex];

    console.log(!isHatBought && coins >= 200);

    if (!isHatBought && coins >= 200) {
      // Deduct coins and mark the hat as bought
      localStorage.setItem(`${username}_coins`, (coins - 200).toString());
      const updatedBoughtStatus = [...boughtStatus];
      updatedBoughtStatus[hatIndex] = true;
      setBoughtStatus(updatedBoughtStatus); // Update context state

      // Optionally persist the bought status (e.g., in localStorage or via API)
      localStorage.setItem(
        `${username}_boughtStatus`,
        JSON.stringify(updatedBoughtStatus)
      );
    } else if (!isHatBought && coins < 200) {
      // Reset selection if hat not bought or insufficient coins
      setSelectedHat("none");
      hat = "none";
    }
    else if (isHatBought && coins < 200) {
      // Reset selection if hat not bought or insufficient coins
      setSelectedHat(hat);
    }

    // Update current hat and UI state
    localStorage.setItem(`${username}_currhat`, hat);
    setCurrentHat(hat);
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

  const handleColorChange = (color: any) => {
    setBackgroundColor(color.hex);
   
    localStorage.setItem(`${username}_currbkg`, color.hex);
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

  const iconCoinsBox = {
    bgcolor: "#FEAF2F",
    borderRadius: "15px",
    p: "2vh", // Adjust padding for smaller devices
    minWidth: "8vw", // Minimum width to accommodate content
    position: "absolute",
    display: "flex", // Enables flexbox
    justifyContent: "center", // Center the content horizontally
    alignItems: "center", // Center the content vertically
    flexWrap: "no-wrap", // Allow wrapping
  };

  const iconImageStyle = {
    width: { xs: "clamp(4vh, 10vw, 15vh)", sm: "clamp(4vh, 4vw, 7vh)" },
    height: { xs: "clamp(4vh, 10vw, 15vh)", sm: "clamp(4vh, 3vw, 7vh)" },
  };

  const getCombinedImage = () => {
    const avatar = getAvatarImage();
    return avatar;
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
        {/* Background Banner */}
        <Box
          sx={{
            backgroundColor: backgroundColor, // Use dynamic state to set background color
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

        {/* Gold coin balance */}
        <Box
          sx={{
            ...iconCoinsBox,
            bottom: "-2vw",
            height: "20px",
            display: "flex", // Enable flexbox
            justifyContent: "flex", // Align to the left
            alignItems: "center", // Center vertically
          }}
        >
          <Box
            component="img"
            alt="Gold coin"
            src={goldCoin}
            sx={{
              height: "30px",
            }}
          />
          <ThemeProvider theme={textTheme}>
            <Typography variant="h2" sx={{ marginLeft: "2.5vw" }}>
              {numOfCoins}
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>

      <Dialog
        open={confirmationOpenHat}
        onClose={() => setConfirmationOpenHat(false)}
      >
        <DialogContent>
          <DialogContentText>
            {selectedHat === "crown"
              ? "Get Crown for 200 coins?"
              : selectedHat === "wizard"
              ? "Get Wizard Hat for 200 coins?"
              : selectedHat === "baseball"
              ? "Get Baseball Cap for 200 coins?"
              : selectedHat === "cowboy"
              ? "Get Cowboy Hat for 200 coins?"
              : selectedHat === "santa"
              ? "Get Santa Hat for 200 coins?"
              : "Remove all hats?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleHatSelection(selectedHat as string);
            }}
          >
            Yes
          </Button>
          <Button onClick={() => setConfirmationOpenHat(false)}>No</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={colorPickerOpen} onClose={() => setColorPickerOpen(false)}>
        <DialogContent>
          <DialogContentText>
            <SketchPicker
              color={backgroundColor}
              onChangeComplete={handleColorChange}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setColorPickerOpen(false)}>Apply</Button>
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
              width: "55vw",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "1vh",
              }}
            ></Box>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "1vh",
                }}
              >
                <ThemeProvider theme={textTheme}>
                  <Typography variant="h6">CHOOSE HAT</Typography>
                </ThemeProvider>
                <Box sx={{ marginBottom: 5 }} />{" "}
                {/* Adds a blank space between elements */}
                <Button onClick={() => handleHatClick("crown")}>
                  <Box
                    component="img"
                    src={crownIcon}
                    alt="Crown Icon"
                    sx={{
                      ...iconImageStyle,
                      filter: crownHatBought ? "none" : "grayscale(100%)", // Apply grayscale effect when locked
                    }}
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
                    sx={{
                      ...iconImageStyle,
                      filter: wizardHatBought ? "none" : "grayscale(100%)", // Apply grayscale effect when locked
                    }}
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
                    sx={{
                      ...iconImageStyle,
                      filter: baseballHatBought ? "none" : "grayscale(100%)", // Apply grayscale effect when locked
                    }}
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
                    sx={{
                      ...iconImageStyle,
                      filter: cowboyHatBought ? "none" : "grayscale(100%)", // Apply grayscale effect when locked
                    }}
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
                    sx={{
                      ...iconImageStyle,
                      filter: santaHatBought ? "none" : "grayscale(100%)", // Apply grayscale effect when locked
                    }}
                  />
                  <ThemeProvider theme={textTheme}>
                    <Typography variant="h6">Santa Hat</Typography>
                  </ThemeProvider>
                </Button>
                {/*no hat*/}
                <Button onClick={() => handleHatClick("none")}>
                  <Box
                    component="img"
                    src={bigRedX}
                    alt="Remove Hat"
                    sx={{ ...iconImageStyle }}
                  />
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
      </Stack>
    </Box>
  );
}
