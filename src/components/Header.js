import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import logo1 from "../assets/logo1.png";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import DepartureBoardOutlinedIcon from "@material-ui/icons/DepartureBoardOutlined";
import IconButton from "@material-ui/core/IconButton";
import * as route from "../constants/Routes";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    //justify: "center",
  },
  logoText: {
    fontFamily: "Pacifico",
    fontSize: "2.75rem",
    fontWeight: 700,
    textTransform: "none",
    color: theme.palette.primary.light,
    marginLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      marginLeft: "10px",
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.8rem",
    },
  },
  logoTextContainer: {
    marginTop: "0.4em",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logoContainer: {
    marginTop: "0.8em",
    marginLeft: "9.5em",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1em",
    },
  },
  logo: {
    height: "3rem",
    [theme.breakpoints.down("xs")]: {
      height: "2.5rem",
    },
  },
  tabContainer: {
    marginTop: "0.4em",
    marginLeft: "auto",
    marginRight: "8.5em",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 5,
    marginLeft: "2em",
    color: theme.palette.primary.main,
  },
  iconButtonHolder: {
    color: theme.palette.common.grey,
    marginRight: "1em",
    minWidth: 15,
  },
  iconButton: {
    color: theme.palette.common.grey,

    height: "0.8em",
    width: "0.8em",
  },
  iconButtonText: {
    ...theme.typography.tab,
    marginLeft: "0.1em",
  },
  signInButtonHolder: {
    //color: theme.palette.common.grey,
    marginRight: "1em",
    minWidth: 15,
    borderColor: theme.palette.common.grey,
    borderRadius: 14,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      borderColor: "transparent",
    },
  },
  signInButtonText: {
    ...theme.typography.tab,
    color: theme.palette.common.grey,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  root: {
    //position: "absolute",
    marginTop: "0.6em",
    marginLeft: "1.8em",
    padding: "2px",
    display: "flex",
    width: 400,
    borderRadius: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    //padding: 10,
    flex: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const [tabIndexValue, setTabIndexValue] = React.useState("0");

  // const handleTabChange = (event, newValue) => {
  //   setTabIndexValue(newValue);
  // };
  const routes = [
    {
      name: "Review",
      link: "/review",
      activeIndex: 0,
      icon: "<CreateOutlinedIcon />",
    },
    {
      name: "Trips",
      link: "/trips",
      activeIndex: 1,
      icon: "<CreateOutlinedIcon />",
    },
    {
      name: "Alerts",
      link: "/alerts",
      activeIndex: 2,
      icon: "<CreateOutlinedIcon />",
    },
  ];

  useEffect(() => {
    [...routes].forEach(
      (route) => {
        switch (window.location.pathname) {
          case `${route.link}`:
            if (tabIndexValue !== route.activeIndex) {
              setTabIndexValue(route.activeIndex);
            }
            break;
          default:
            break;
        }
      },
      [tabIndexValue, routes]
    );
  });
  const tabs = (
    <React.Fragment>
      <div className={classes.tabContainer}>
        {/* <IconButton
          className={classes.iconButtonHolder}
          // onClick={() => setOpenDrawer(!openDrawer)}
        >
          <CreateOutlinedIcon className={classes.iconButton} />
          <span className={classes.iconButtonText}>Review</span>
        </IconButton> */}
        <IconButton
          className={classes.iconButtonHolder}
          // onClick={() => setOpenDrawer(!openDrawer)}
        >
          <DepartureBoardOutlinedIcon className={classes.iconButton} />

          <span className={classes.iconButtonText}>Trips</span>
        </IconButton>
        <IconButton
          className={classes.iconButtonHolder}
          // onClick={() => setOpenDrawer(!openDrawer)}
        >
          <NotificationsActiveOutlinedIcon className={classes.iconButton} />

          <span className={classes.iconButtonText}>Alerts</span>
        </IconButton>
        <Button variant="outlined" className={classes.signInButtonHolder}>
          <span className={classes.signInButtonText}>Sign In</span>
        </Button>
      </div>

      {/* <Tabs
        value={tabIndexValue}
        onChange={handleTabChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab
          // component={Link}
          // to="/"
          label="Review"
          className={classes.tab}
        >
          <CreateOutlinedIcon />{" "}
        </Tab>
      </Tabs> */}
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to={route.HOME}
              className={classes.logoContainer}
              disableRipple
            >
              <img className={classes.logo} alt="Tripy Logo" src={logo1}></img>
            </Button>
            <Button
              component={Link}
              to={route.HOME}
              className={classes.logoTextContainer}
              disableRipple
            >
              <Typography className={classes.logoText}>Tripy</Typography>
            </Button>
            {/* <Paper
              component="form"
              className={classes.root}
              elevation={0}
              variant="outlined"
            >
              <InputBase
                className={classes.input}
                placeholder="Search Place or Hotels"
                inputProps={{ "aria-label": "search database" }}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper> */}
            {tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
