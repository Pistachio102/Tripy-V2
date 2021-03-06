import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HotelHomePage from "./pages/Hotel/HotelHomePage";
import RestaurantHomePage from "./pages/Restaurant/RestaurantHomePage";
import AttractionHomePage from "./pages/Attraction/AttractionHomePage";
import Trips from "./pages/Trips";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HotelSpecific from "./pages/Hotel/HotelSpecific";
import RestaurantSpecific from "./pages/Restaurant/RestaurantSpecific";
import Layout from "./layout/Layout";
import * as route from "./constants/Routes";
import { Provider } from "react-redux";
import store from "./redux/store/Store";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={route.HOME} component={LandingPage} />
            <Route exact path={route.TRIPS} component={Trips} />
            <Route exact path={route.SIGNIN} component={SignIn} />
            <Route exact path={route.SIGNUP} component={SignUp} />
            <Route exact path={route.HOTELSPECIFIC} component={HotelSpecific} />
            <Route
              exact
              path={route.RESTAURANTSPECIFIC}
              component={RestaurantSpecific}
            />

            <Layout>
              <Route exact path={route.HOTELS} component={HotelHomePage} />
              <Route
                exact
                path={route.RESTAURANTS}
                component={RestaurantHomePage}
              />
              <Route
                exact
                path={route.ATTRACTIONS}
                component={AttractionHomePage}
              />
            </Layout>
          </Switch>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}
