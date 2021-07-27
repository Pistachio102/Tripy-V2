import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Typography, TextField, MenuItem, Slider } from "@material-ui/core";
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
import Datepicker from "../../components/DatePicker";
import Rating from "@material-ui/lab/Rating";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { MailOutlineOutlined } from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import RatingCard from "../../components/RatingCard";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const PrettoSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.common.grey,
    height: 8,
    padding: "10px 0",
    width: "25em",
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: theme.palette.common.white,
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 3px)",
    // right: "calc(50% + 12px)",
    top: -30,
    "& *": {
      background: theme.palette.common.lightGrey,
      color: theme.palette.common.black,
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 10,
    borderRadius: 4,
    opacity: 0.2,
  },
}))(Slider);

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "2rem",
    marginLeft: "12rem",
    marginRight: "12rem",
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
  cardQuote: {
    //padding: 10,
    marginTop: "2em",
    fontFamily: "Raleway",
    color: theme.palette.secondary.main,
  },
  hotelNameDescSub: {
    ...theme.typography.subtitle1,
    color: theme.palette.common.grey,
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
  amenitiesIcon: {
    height: "0.6em",
    width: "0.6em",
    marginRight: "0.5em",
    // paddingTop: "0.2em",
    //color: theme.palette.common.green,
    alignItems: "flex-end",
  },
  contentStyle: {
    height: "2em",
    color: "#fff",
    lineHeight: "2em",
    textAlign: "center",
    background: "#364d79",
  },
  sidePaperDiv: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      //margin: theme.spacing(1),
      width: "40em",
      height: "30em",
    },
  },
  sidePaper: {
    padding: "2em",
  },
  map: {
    width: "40em",
    height: "40em",
  },
  textField: {
    margin: theme.spacing(1),
    width: "12em",
  },
  formControl: {
    //margin: theme.spacing(2),
  },
  formLabel: {
    ...theme.typography.tab,
    //fontWeight: "bold",
    color: theme.palette.common.black,
    marginBottom: "0.7em",
    fontSize: "0.8rem",
    "&.Mui-focused": {
      color: theme.palette.common.black,
    },
  },
  formControlLabelText: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 400,
    fontSize: "0.6rem",
    color: theme.palette.common.black,
  },
  labelStyle: {
    fontFamily: "Raleway",
    color: theme.palette.common.grey,
  },
  phoneIcon: {
    height: "0.6em",
    width: "0.6em",
    verticalAlign: "bottom",
    marginRight: "0.2em",
  },
  mailIcon: {
    height: "0.6em",
    width: "0.6em",
    verticalAlign: "bottom",
    marginRight: "0.2em",
  },
  ratingTitle: {
    ...theme.typography.h2,
    color: theme.palette.common.black,
    marginBottom: "0.5rem",
  },

  avatar: {
    backgroundColor: theme.palette.common.grey,
  },
  searchStyle: {
    marginTop: "2em",
    padding: "2px",
    display: "flex",
    alignItems: "flex-start",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    //padding: 10,
  },
}));
const guestPerRoom = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "4",
    label: "4",
  },
];

const numberOfRooms = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
];
export default function RestaurantSpecific() {
  const classes = useStyles();
  const [from, setFrom] = React.useState(new Date());
  const [to, setTo] = React.useState(new Date());
  const handleFromDateChange = (date) => {
    setFrom(date);
  };
  const handleToDateChange = (date) => {
    setTo(date);
  };

  const [guestNumber, setGuestNumber] = React.useState("1");

  const handleGuestNumberChange = (event) => {
    setGuestNumber(event.target.value);
  };

  const [rooms, setRooms] = React.useState("1");

  const handleRoomNumberChange = (event) => {
    setRooms(event.target.value);
  };
  return (
    <React.Fragment>
      <Header />
      <Grid container justify="center">
        <Grid item>
          <Paper
            variant="outlined"
            component="form"
            className={classes.searchStyle}
          >
            <InputBase
              className={classes.input}
              placeholder="Where to go?"
              inputProps={{ "aria-label": "search database" }}
              onChange={(e) => {}}
            />
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.mainContainer}>
        <Grid container direction="column" spacing={3} alignItems="center">
          <Grid item>
            <Carousels />
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Typography variant="h1">
                  Sea Food Heaven{"  "}
                  <Rating
                    name="read-only"
                    value={4}
                    readOnly
                    style={{ verticalAlign: "" }}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Fresh food, good food!
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  spacing={3}
                  style={{ marginTop: "2em" }}
                >
                  <Grid item>
                    <div className={classes.sidePaperDiv}>
                      <Paper elevation={4} className={classes.sidePaper}>
                        <Grid
                          container
                          direction="column"
                          alignItems="center"
                          spacing={2}
                        >
                          <Grid item>
                            <Typography className={classes.cardQuote}>
                              Enjoy the food with a great view!
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle1">
                              <PhoneInTalkOutlinedIcon
                                className={classes.phoneIcon}
                              />
                              <span>+99018726356, </span>
                              <MailOutlineOutlined
                                className={classes.mailIcon}
                              />
                              <span>tasnim282@gmail.com</span>
                            </Typography>
                          </Grid>

                          <Grid item>
                            <div className={classes.formControl}>
                              <Typography
                                className={classes.formLabel}
                                style={{ marginBottom: "0.5em" }}
                              >
                                Price: $
                              </Typography>
                            </div>
                            <div className={classes.formControl}>
                              <Typography
                                className={classes.formLabel}
                                style={{ marginBottom: "0.5em" }}
                              >
                                Cuisine: Sea Food
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item>
                            <Typography className={classes.hotelNameDescSub}>
                              Amenities:
                            </Typography>

                            <Typography className={classes.amenitiesText}>
                              <WifiIcon className={classes.amenitiesIcon} />{" "}
                              Free wi-fi
                            </Typography>

                            <Typography className={classes.amenitiesText}>
                              <LocalOfferIcon
                                className={classes.amenitiesIcon}
                              />{" "}
                              Special offer
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  </Grid>
                  <Grid item>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.1295244442!2d91.82596229788118!3d24.899837316737425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1623075185302!5m2!1sen!2sbd"
                      // width="40em"
                      // height="40em"
                      allowfullscreen=""
                      loading="lazy"
                      className={classes.map}
                    ></iframe>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ marginTop: "2em" }}>
                <Grid container direction="row">
                  <Grid item>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <Typography className={classes.ratingTitle}>
                          Ratings:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <RatingCard avatar="P" name="Penny" rate={4} />
                      </Grid>
                      <Grid item>
                        <RatingCard avatar="A" name="Amy" rate={3.5} />
                      </Grid>
                      <Grid item>
                        <RatingCard avatar="K" name="Kripke" rate={5} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
