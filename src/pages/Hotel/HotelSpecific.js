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
    marginTop: "6rem",
    // marginLeft: "10rem",
    // marginRight: "10rem",
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
    marginTop: "2em",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    width: "20em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
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
      height: "40em",
    },
  },
  sidePaper: {
    paddingTop: "3em",
    padding: "0.4em",
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
    color: theme.palette.common.grey,
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
export default function HotelSpecific() {
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
      <div className={classes.mainContainer}>
        <Grid container direction="column" spacing={3} alignContent="center">
          <Grid item>
            <Carousels />
          </Grid>
          <Grid item>
            <Typography variant="h1">
              Hotel Pasadena{"  "}
              <Rating
                name="read-only"
                value={4}
                readOnly
                style={{ verticalAlign: "" }}
              />
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
                      justify="center"
                      spacing={3}
                    >
                      <Grid item>
                        <Grid
                          container
                          direction="row"
                          spacing={3}
                          justify="center"
                        >
                          <Grid item xs={4}>
                            <Datepicker
                              label="Check In"
                              onChange={handleFromDateChange}
                              date={from}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <Datepicker
                              label="Check Out"
                              onChange={handleToDateChange}
                              date={to}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="row"
                          spacing={3}
                          justify="center"
                        >
                          <Grid item xs={6}>
                            <TextField
                              id="standard-select-guests"
                              select
                              label={
                                <span className={classes.labelStyle}>
                                  Guests Per Room
                                </span>
                              }
                              value={guestNumber}
                              onChange={handleGuestNumberChange}
                              className={classes.textField}
                            >
                              {guestPerRoom.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              id="standard-select-rooms"
                              select
                              label={
                                <span className={classes.labelStyle}>
                                  Rooms
                                </span>
                              }
                              value={rooms}
                              onChange={handleRoomNumberChange}
                              className={classes.textField}
                            >
                              {numberOfRooms.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <div className={classes.formControl}>
                          <Typography
                            className={classes.formLabel}
                            style={{ marginBottom: "3.5em" }}
                          >
                            Price Range
                          </Typography>
                          <div style={{ padding: "0em 0.8em" }}>
                            <PrettoSlider
                              //ThumbComponent={AirbnbThumbComponent}
                              getAriaLabel={(index) =>
                                index === 0 ? "Minimum price" : "Maximum price"
                              }
                              min={0}
                              max={50000}
                              defaultValue={[0, 20000]}
                              valueLabelDisplay="on"
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          className={classes.searchButton}
                        >
                          Search
                        </Button>
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
        </Grid>
      </div>
    </React.Fragment>
  );
}
