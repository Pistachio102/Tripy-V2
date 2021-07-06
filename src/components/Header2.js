import React, { useState, useEffect } from "react";
import { makeStyles, Typography, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Header from "./Header";
import { Link } from "react-router-dom";
import * as route from "../Constants/Routes";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const AntTabs = withStyles((theme) => ({
  root: {
    minWidth: "100%",
    borderBottom: "0.9px solid #b2c2cd",
  },
  indicator: {
    backgroundColor: theme.palette.secondary.main,
  },
}))(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.common.black,
    "&:hover": {
      color: theme.palette.secondary.main,
      opacity: 1,
      fontWeight: "bold",
    },
    // "&$selected": {
    //   color: theme.palette.common.black,
    //   fontWeight: "bold",
    // },
    // "&:focus": {
    //   color: theme.palette.common.black,
    //   fontWeight: "bold",
    // },
  },
  selected: {
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "1rem",
    marginLeft: "15rem",
    marginRight: "15rem",
    alignItems: "center",
  },
  tabs: {
    "& button": {
      minWidth: 50,
    },
  },
  root: {
    //position: "absolute",
    //marginTop: "2em",
    padding: "2px",
    display: "flex",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    //padding: 10,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  antTabText: {
    fontFamily: "Raleway",
    //color: theme.palette.common.black,
    //fontWeight: 500,
  },
}));

export default function Header2() {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const tabRoutes = [
    {
      name: "Hotels",
      link: "/hotels",
      activeIndex: 0,
      icon: "<CreateOutlinedIcon />",
    },
    {
      name: "Restaurants",
      link: "/restaurants",
      activeIndex: 1,
      icon: "<CreateOutlinedIcon />",
    },
    {
      name: "Things to Do",
      link: "/attractions",
      activeIndex: 2,
    },
  ];
  useEffect(() => {
    [...tabRoutes].forEach(
      (option) => {
        switch (window.location.pathname) {
          case `${option.link}`:
            if (tabValue !== option.activeIndex) {
              setTabValue(option.activeIndex);
            }
            break;
          default:
            break;
        }
      },
      [tabValue, tabRoutes]
    );
  });
  return (
    <React.Fragment>
      <Header />
      <div className={classes.mainContainer}>
        <Grid container direction="column">
          <Grid item>
            <div className={classes.tabContainer}>
              <AntTabs
                className={classes.tabs}
                variant="fullWidth"
                value={tabValue}
                onChange={handleChange}
              >
                <AntTab
                  component={Link}
                  to={route.HOTELS}
                  label={<span className={classes.antTabText}>Hotels</span>}
                />
                <AntTab
                  component={Link}
                  to={route.RESTAURANTS}
                  label={
                    <span className={classes.antTabText}>Restaurants</span>
                  }
                />
                <AntTab
                  component={Link}
                  to={route.ATTRACTIONS}
                  label={
                    <span className={classes.antTabText}>Things to do</span>
                  }
                />
              </AntTabs>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
