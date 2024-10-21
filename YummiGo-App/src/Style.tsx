import { createTheme } from '@mui/material/styles';

// Text Theme
const textTheme = createTheme({
    palette: {
        primary: {
          main: "#F3F1F6",
          contrastText: "#F3F1F6"
        }
    }
});

// Button Theme
const buttonTheme = createTheme({
    palette: {
        primary: {
        main: "#F3F1F6",
        contrastText: "#F3F1F6"
        }
    }
});

// Bar Height
const barHeight: number = 60;

// Top/Bottom Bar Size/Position/Color
const barStyle = {
    width: "vw",
    height: barHeight,
    position: "fixed",
    left: 0,
    right: 0,
    bgcolor: "#F2B24D"
}

// Center Page Size/Position
const pageStyle = {
    width: "vw",
    height: "vh",
    top: barHeight,
    bottom: barHeight,
    left: 0,
    right: 0,
    position: "fixed"
}

// H1 Font Size
textTheme.typography.h1 = {
  fontSize: '1.3rem'   
}

// Button Font Size
textTheme.typography.button = {
  fontSize: '1.3rem'
}

export {
  textTheme,
  buttonTheme,
  barStyle,
  pageStyle
};