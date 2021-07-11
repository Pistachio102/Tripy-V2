import { createMuiTheme } from "@material-ui/core/styles";

const tripyBlue = "#52C6FE";
const tripyPink = "#FE0355";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${tripyBlue}`,
      orange: `${tripyPink}`,
      white: "#FFF",
      grey: "#5a5e63",
      lightGrey: "#dddbdb",
      mastard: "#f2b203",
      lightMastard: "#f4c953",
      yellow: "#fcea2a",
      green: "#2db583",
    },
    primary: {
      main: `${tripyBlue}`,
    },
    secondary: {
      main: `${tripyPink}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 400,
      fontSize: "1rem",
    },
    h1: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "bold",
      fontSize: "1.8rem",
    },
    h2: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "bold",
      fontSize: "1rem",
    },
    subtitle1: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 400,
      fontSize: 14,
    },
  },
});
