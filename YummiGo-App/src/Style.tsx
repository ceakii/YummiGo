import { createTheme } from "@mui/material/styles";

// Button Theme
const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#C67B58",
      contrastText: "#C67B58",
    },
  },
});

// Text Theme
const textTheme = createTheme({
  palette: {
    primary: {
      main: "#F3F1F6",
      contrastText: "#F3F1F6",
    },
  },
});

// Bar Height
const barHeight: number = 60;

// Top/Bottom Bar Size/Position/Color
const barStyle = {
  width: "100%",
  height: barHeight,
  position: "fixed",
  left: 0,
  right: 0,
  bgcolor: "#FEAF2F",
  boxShadow: 4,
};

const modalStyle = {
  bgcolor: "#FEAF2F"
}

// Center Page Size/Position
const pageStyle = {
  width: "vw",
  height: "vh",
  maxWidth: "100%",
  maxHeight: "calc(100vh - 2*barHeight)",
  top: barHeight,
  bottom: barHeight,
  left: 0,
  right: 0,
  position: "fixed",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
};

// H3 Font Size
textTheme.typography.h3 = {
  fontSize: '2.5rem',                                        // Extra Small Width: Screen Width < 600px
  [textTheme.breakpoints.up('sm')]: { fontSize: '3rem', },   // Small width: Screen Width >= 600px
  [textTheme.breakpoints.up('md')]: { fontSize: '4rem', },   // Medium width: Screen Width >= 900px
  color: "white",
  fontFamily: "'Moul', sans-serif",
  textShadow: `
                  -1px -1px 0px #000,  
                  1px -1px 0px #000,
                  -1px 1px 0px #000,
                  1px 1px 0px #000
                  `,
};

// H4 Font Size
textTheme.typography.h4 = {
  fontFamily: "'Moul', sans-serif",
  fontSize: '2rem',                                        // Extra Small Width: Screen Width < 600px
  [textTheme.breakpoints.up('sm')]: { fontSize: '2rem', },   // Small width: Screen Width >= 600px
  [textTheme.breakpoints.up('md')]: { fontSize: '3rem', },   // Medium width: Screen Width >= 900px
  color: "white",
  textShadow: `
                  -1px -1px 0px #000,  
                  1px -1px 0px #000,
                  -1px 1px 0px #000,
                  1px 1px 0px #000
                  `,
};

// H6 Font Size
textTheme.typography.h6 = {
  fontFamily: "'Moul', sans-serif",
  fontSize: "1.3rem",
  color: "white",
  textShadow: `
                  -1px -1px 0px #000,  
                  1px -1px 0px #000,
                  -1px 1px 0px #000,
                  1px 1px 0px #000
                  `,
};

// Body1 Font Size
textTheme.typography.body1 = {
  fontSize: "1.6rem", // Extra Small Width: Screen Width < 600px
  [textTheme.breakpoints.up("sm")]: { fontSize: "2.0rem" }, // Small width: Screen Width >= 600px
  [textTheme.breakpoints.up("md")]: { fontSize: "2.4rem" }, // Medium width: Screen Width >= 900px
  fontFamily: "'Moul', sans-serif",
  color: "white",
  whiteSpace: "pre-line",
  textShadow: `
                  -1px -1px 0px #000,  
                  1px -1px 0px #000,
                  -1px 1px 0px #000,
                  1px 1px 0px #000
                  `,
};

// Button Font Size
textTheme.typography.button = {
  fontSize: "1.4rem", // Extra Small Width: Screen Width < 600px
  [textTheme.breakpoints.up("sm")]: { fontSize: "1.9rem" }, // Small width: Screen Width >= 600px
  [textTheme.breakpoints.up("md")]: { fontSize: "2.2rem" }, // Medium width: Screen Width >= 900px
  fontFamily: "'Moul', sans-serif",
  color: "white",
  textShadow: `
                  -1px -1px 0px #000,  
                  1px -1px 0px #000,
                  -1px 1px 0px #000,
                  1px 1px 0px #000
                  `,
};

export { buttonTheme, barStyle, modalStyle, pageStyle, textTheme };
