import React, { useState } from "react";
import { makeStyles, Typography, withStyles, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import GradeIcon from "@material-ui/icons/Grade";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import PoolIcon from "@material-ui/icons/Pool";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import LanguageIcon from "@material-ui/icons/Language";
import Rating from "@material-ui/lab/Rating";
import * as route from "../constants/Routes";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "1rem",
    marginLeft: "15rem",
    marginRight: "15rem",
  },
  tabs: {
    "& button": {
      minWidth: 50,
    },
  },
  tabContainer: {},
  firstRowSecondContainer: {
    marginLeft: "3em",
  },
  dateContainer: {
    marginTop: "1em",
    //marginLeft: "1.5em",
  },
  sidePaper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      //margin: theme.spacing(1),
      width: "22em",
      //height: "40em",
    },
  },
  hotelDescriptionPaperDiv: {
    //display: "flex",
    // flexWrap: "wrap",
    marginBottom: theme.spacing(1),
    "& > *": {
      //margin: theme.spacing(1),
      width: "100%",

      height: "15em",
    },
  },
  hotelDescriptionPaper: {
    flexWrap: "wrap",
    paddingLeft: "0.2em",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    height: "100%",
    width: "100%",
    "&:hover": {
      boxShadow: theme.shadows[10],
    },
  },
  hotelThumbnail: {
    height: "100%",
    width: "18em",
    margin: 0,
  },
  hotelNameTitle: {
    ...theme.typography.h2,
    color: theme.palette.common.black,
    elevation: 0,
    marginBottom: "0.5rem",
    borderBottom: "2px solid transparent",
    "&:hover": {
      //color: theme.palette.common.grey,
      backgroundColor: "transparent",
      borderBottom: "2px solid #000",
      elevation: 0,
    },
  },
  hotelNameDescSub: {
    ...theme.typography.subtitle1,
    color: theme.palette.common.grey,
  },
  restaurantTypePrice: {
    ...theme.typography.subtitle1,
    color: theme.palette.common.black,
  },
  hotelNameDescBold: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "0.8rem",
  },
  hotelPaperFirstColumn: {
    padding: "0.8em",
    marginLeft: "0.8em",
  },
  secondRow: {
    padding: theme.spacing(1),
    marginTop: "2em",
    backgroundColor: theme.palette.common.lightGrey,
  },
  formControl: {
    margin: theme.spacing(2),
  },
  formLabel: {
    ...theme.typography.tab,
    fontWeight: "bold",
    color: theme.palette.common.black,
    marginBottom: "0.8em",
    "&.Mui-focused": {
      color: theme.palette.common.black,
    },
  },
  formControlLabelText: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 400,
    fontSize: "0.7rem",
    color: theme.palette.common.black,
  },
  ratingIcons: {
    color: theme.palette.common.yellow,
  },
  viewDealsButton: {
    fontFamily: "Raleway",
    textTransform: "none",
    backgroundColor: theme.palette.common.mastard,
    borderRadius: 15,
    width: "10em",
    marginTop: "2rem",
    "&:hover": {
      //color: theme.palette.common.grey,
      backgroundColor: theme.palette.common.lightMastard,
    },
  },
  divider: {
    margin: "2rem",
    height: "80%",
  },
  checkedIcon: {
    height: "0.7em",
    width: "0.7em",
    marginRight: "0.5em",
    color: theme.palette.common.green,
    alignItems: "flex-end",
  },
  checkedIconFalse: {
    height: "0.45em",
    width: "0.45em",
    marginRight: "0.5em",
    color: "transparent",
    alignItems: "flex-end",
  },
  amenitiesText: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 400,
    fontSize: "0.7rem",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "0.4em",
  },
  amenitiesTextFalse: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 400,
    fontSize: "0.7rem",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "0.4em",
    color: "transparent",
  },
  amenitiesIcon: {
    height: "0.6em",
    width: "0.6em",
    marginRight: "0.5em",
    // paddingTop: "0.2em",
    //color: theme.palette.common.green,
    alignItems: "flex-end",
  },
}));

export default function RestaurantCard({
  image,
  name,
  type,
  rating,
  money,
  freeCancellation,
  payAtStay,
  wifi,
  offer,
}) {
  const classes = useStyles();
  return (
    <div className={classes.hotelDescriptionPaperDiv}>
      <Paper elevation={1} className={classes.hotelDescriptionPaper}>
        <Grid item container direction="row" space={1}>
          <Grid item>
            <img
              alt="Hotel Picture"
              src={image}
              className={classes.hotelThumbnail}
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              className={classes.hotelPaperFirstColumn}
            >
              <Grid item>
                <Button
                  variant="text"
                  // disableRipple="true"
                  // disableElevation="true"
                  style={{ margin: 0, padding: 0 }}
                >
                  <span className={classes.hotelNameTitle}>{name}</span>
                </Button>
              </Grid>
              <Grid item>
                <Typography className={classes.restaurantTypePrice}>
                  {type}, {money}
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: "0.5rem" }}>
                <Typography className={classes.hotelNameDescSub}>
                  Rating:
                </Typography>
              </Grid>
              <Grid
                item
                //className={classes.ratingIcons}
                style={{ marginBottom: "1rem" }}
              >
                <Rating name="read-only" value={rating} readOnly />
              </Grid>
              {/* <Grid item>
                <Typography className={classes.hotelNameDescSub}>
                  Starts from:
                </Typography>
              </Grid> */}

              <Grid item>
                <Button
                  variant="contained"
                  className={classes.viewDealsButton}
                  disableRipple="true"
                  //disableElevation="true"
                >
                  View Deals
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Divider
              variant="middle"
              orientation="vertical"
              className={classes.divider}
            />
          </Grid>
          <Grid item>
            <Grid container direction="column">
              {freeCancellation || payAtStay ? (
                <Grid item style={{ marginTop: "1.5rem" }}>
                  {freeCancellation ? (
                    <Typography className={classes.amenitiesText}>
                      <FormatQuoteIcon className={classes.checkedIcon} />
                      Free cancellation
                    </Typography>
                  ) : (
                    ""
                  )}
                </Grid>
              ) : (
                ""
              )}

              <Grid item style={{ marginTop: "2rem" }}>
                <Typography className={classes.hotelNameDescSub}>
                  Amenities:
                </Typography>

                {wifi ? (
                  <Typography className={classes.amenitiesText}>
                    <WifiIcon className={classes.amenitiesIcon} /> Free wi-fi
                  </Typography>
                ) : (
                  ""
                )}
                {offer ? (
                  <Typography className={classes.amenitiesText}>
                    <LocalOfferIcon className={classes.amenitiesIcon} /> Special
                    offer
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
