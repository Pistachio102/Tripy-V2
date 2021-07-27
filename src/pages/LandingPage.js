import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import HomePageImage from "../assets/homepageImage.png";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import RowingOutlinedIcon from "@material-ui/icons/RowingOutlined";
import Header from "../components/Header";
import { Link } from "react-router-dom";

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
      color: theme.palette.common.white,
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
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <div className={classes.mainContainer}>
        <Grid
          container
          direction="column"
          alignContent="center"
          // alignItems="space-between"
        >
          <Grid
            item
            // container
            // direction="row"
            // justify="space-around"
            // alignContent="center"
          >
            <Grid container direction="row" justify="space-between">
              <Grid item>
                <Button variant="outlined" className={classes.buttonStyle}>
                  Hotel
                  <KingBedOutlinedIcon style={{ marginLeft: "0.5em" }} />
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.buttonStyle}>
                  Restaurant
                  <RestaurantOutlinedIcon style={{ marginLeft: "0.5em" }} />
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.buttonStyle}>
                  Things to Do
                  <RowingOutlinedIcon style={{ marginLeft: "0.5em" }} />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.secondContainer}>
            <Grid container direction="row" justify="space-between">
              <Grid item className={classes.leftGrid}>
                <Typography className={classes.typography1}>
                  We Take Care <br /> of Your Trip
                </Typography>
                <Typography
                  className={classes.typography2}
                  style={{ marginTop: "2em" }}
                >
                  Travelling is fun & exciting and we don't want
                  <br />
                  you to miss out any of the amusement being
                  <br />
                  busy with planning your trip!
                </Typography>
                <Paper
                  variant="outlined"
                  component="form"
                  className={classes.root}
                >
                  <InputBase
                    className={classes.input}
                    placeholder="Where to go?"
                    inputProps={{ "aria-label": "search database" }}
                    onChange={(e) => {}}
                  />
                  <Button
                    variant="contained"
                    className={classes.searchButton}
                    aria-label="search"
                    component={Link}
                    to="/hotels"
                  >
                    Let's Go
                  </Button>
                </Paper>
              </Grid>
              <Grid item alignItems="flex-end">
                <img
                  alt="Home page image"
                  src={HomePageImage}
                  className={classes.homepageImage}
                ></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
