import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUs";
import HotelHomePage from "./pages/Hotel/HotelHomePage";
import RestaurantHomePage from "./pages/Restaurant/RestaurantHomePage";
import AttractionHomePage from "./pages/Attraction/AttractionHomePage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={() => <div>login</div>} />
          <Route exact path="/about" component={AboutUsPage} />
          <Route exact path="/contact" component={ContactUsPage} />
          <Route exact path="/hotels" component={HotelHomePage} />
          <Route exact path="/restaurants" component={RestaurantHomePage} />
          <Route exact path="/attractions" component={AttractionHomePage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
