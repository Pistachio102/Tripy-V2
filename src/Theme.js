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
    h1: {},
  },
});
