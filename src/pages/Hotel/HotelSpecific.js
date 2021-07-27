import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import RowingOutlinedIcon from "@material-ui/icons/RowingOutlined";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import Carousels from "../../components/Carousel";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "6rem",
    //paddingLeft: "15rem",
    //justifyContent: "center",
  },
  secondContainer: {
    marginTop: "1rem",
  },
  leftGrid: {
    marginTop: "4rem",
  },

  typography1: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 900,
    fontSize: "3rem",
    color: theme.palette.primary.main,
    lineHeight: 1,
  },
  typography2: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 400,
    fontSize: "1rem",
    color: theme.palette.common.grey,
  },
  root: {
    marginTop: "2em",
    padding: "2px",
    display: "flex",
    alignItems: "flex-start",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    //padding: 10,
    flex: 1,
  },
  searchButton: {
    //padding: 10,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonStyle: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1rem",
    color: theme.palette.common.grey,
    width: 300,
    height: 100,
    borderWidth: "0.09em",
    borderRadius: 20,
    borderColor: theme.palette.primary.light,
    marginRight: "2em",
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.light,
    },
  },
  homepageImage: {},
  contentStyle: {
    height: "2em",
    color: "#fff",
    lineHeight: "2em",
    textAlign: "center",
    background: "#364d79",
  },
}));

export default function HotelSpecific() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <div className={classes.mainContainer}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h1">Hotel Pasadena</Typography>
          </Grid>
          <Grid item>
            <Carousels />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
