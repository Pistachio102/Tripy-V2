import React, { useState } from "react";
import { makeStyles, Typography, withStyles, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import Datepicker from "../../components/DatePicker";
import Paper from "@material-ui/core/Paper";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import HotelThumbnail from "../../assets/hotel.png";
import RadioGroup from "@material-ui/core/RadioGroup";
import Slider from "@material-ui/core/Slider";
import GradeIcon from "@material-ui/icons/Grade";

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
      width: "15em",
      height: "40em",
    },
  },
  hotelDescriptionPaperDiv: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      //margin: theme.spacing(1),
      width: "100%",
      height: "15em",
    },
  },
  hotelDescriptionPaper: {
    flexWrap: "wrap",
    padding: "0.2em",
    height: "100%",
    width: "100%",
    "&:hover": {
      boxShadow: theme.shadows[10],
    },
  },
  hotelThumbnail: {
    height: "15em",
    width: "15em",
    margin: 0,
  },
  hotelNameTitle: {
    ...theme.typography.h2,
    color: theme.palette.common.black,
    elevation: 0,
    marginBottom: "0.5rem",
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
}));

const PrettoSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    height: 8,
    padding: "10px 0",
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
      color: theme.palette.secondary.main,
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

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function HotelHomePage() {
  const classes = useStyles();

  const [from, setFrom] = React.useState(new Date());
  const [to, setTo] = React.useState(new Date());
  const handleFromDateChange = (date) => {
    setFrom(date);
  };
  const handleToDateChange = (date) => {
    setTo(date);
  };

  const [dealsState, setDealsState] = React.useState({
    freeCancellation: false,
    payAtStay: false,
    specialOffers: false,
  });

  const handleDealsChange = (event) => {
    setDealsState({ ...dealsState, [event.target.name]: event.target.checked });
  };

  const { freeCancellation, payAtStay, specialOffers } = dealsState;

  const [propertyTypeState, setPropertyTypeState] = React.useState({
    allInclusives: false,
    resorts: false,
  });

  const handlePropertyTypeChange = (event) => {
    setPropertyTypeState({
      ...propertyTypeState,
      [event.target.name]: event.target.checked,
    });
  };

  const { allInclusives, resorts } = propertyTypeState;

  const [hotelClassValue, setHotelClassValue] = React.useState();

  const handleHotelClassChange = (event) => {
    setHotelClassValue(event.target.value);
  };

  return (
    <React.Fragment>
      <div className={classes.mainContainer}>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.1295244442!2d91.82596229788118!3d24.899837316737425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1623075185302!5m2!1sen!2sbd"
                  width="300"
                  height="150"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </Grid>
              <Grid item className={classes.firstRowSecondContainer}>
                <Typography variant="h1">
                  Sylhet Hotels and Places to Stay
                </Typography>
                <Grid
                  container
                  direction="row"
                  className={classes.dateContainer}
                  spacing={3}
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
            </Grid>
          </Grid>
          <Grid item className={classes.secondRow}>
            <Grid container direction="row" spacing={1}>
              <Grid item>
                <div className={classes.sidePaper}>
                  <Paper elevation={1}>
                    <Grid container direction="column">
                      <Grid item>
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
                        <Divider variant="middle" />
                      </Grid>
                      <Grid item>
                        <FormControl
                          component="fieldset"
                          className={classes.formControl}
                        >
                          <FormLabel
                            component="legend"
                            className={classes.formLabel}
                          >
                            Deals
                          </FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={freeCancellation}
                                  onChange={handleDealsChange}
                                  name="freeCancellation"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Free Cancellation
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={payAtStay}
                                  onChange={handleDealsChange}
                                  name="payAtStay"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Reserve now, pay at stay
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={specialOffers}
                                  onChange={handleDealsChange}
                                  name="specialOffers"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Properties with special offers
                                </span>
                              }
                            />
                          </FormGroup>
                          {/* <FormHelperText>Be careful</FormHelperText> */}
                        </FormControl>
                        <Divider variant="middle" />
                      </Grid>
                      <Grid item>
                        <FormControl
                          component="fieldset"
                          className={classes.formControl}
                        >
                          <FormLabel
                            component="legend"
                            className={classes.formLabel}
                          >
                            Property Types
                          </FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={allInclusives}
                                  onChange={handlePropertyTypeChange}
                                  name="allInclusives"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  All-inclusives
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={resorts}
                                  onChange={handlePropertyTypeChange}
                                  name="resorts"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Resorts
                                </span>
                              }
                            />
                          </FormGroup>
                          {/* <FormHelperText>Be careful</FormHelperText> */}
                        </FormControl>
                        <Divider variant="middle" />
                      </Grid>
                      <Grid item>
                        <FormControl
                          component="fieldset"
                          className={classes.formControl}
                        >
                          <FormLabel
                            component="legend"
                            className={classes.formLabel}
                          >
                            Hotel Class
                          </FormLabel>
                          <RadioGroup
                            aria-label="hotelClass"
                            name="hotelClass"
                            value={hotelClassValue}
                            onChange={handleHotelClassChange}
                          >
                            <FormControlLabel
                              value="fiveStar"
                              control={<Radio />}
                              label={
                                <span className={classes.formControlLabelText}>
                                  5 stars
                                </span>
                              }
                            />
                            <FormControlLabel
                              value="fourStar"
                              control={<Radio />}
                              label={
                                <span className={classes.formControlLabelText}>
                                  4 stars
                                </span>
                              }
                            />
                            <FormControlLabel
                              value="threeStar"
                              control={<Radio />}
                              label={
                                <span className={classes.formControlLabelText}>
                                  3 stars
                                </span>
                              }
                            />
                          </RadioGroup>
                          {/* <FormHelperText>Be careful</FormHelperText> */}
                        </FormControl>
                        <Divider variant="middle" />
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={9}>
                <div className={classes.hotelDescriptionPaperDiv}>
                  <Paper
                    elevation={1}
                    className={classes.hotelDescriptionPaper}
                  >
                    <Grid item container direction="row" space={1}>
                      {/* <Grid item> */}
                      <img
                        alt="Hotel Picture"
                        src={HotelThumbnail}
                        className={classes.hotelThumbnail}
                      ></img>
                      {/* </Grid> */}
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
                              <span className={classes.hotelNameTitle}>
                                Hotel Pasadena
                              </span>
                            </Button>
                          </Grid>

                          <Grid item>
                            <Typography className={classes.hotelNameDescSub}>
                              Rating:
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            className={classes.ratingIcons}
                            style={{ marginBottom: "1rem" }}
                          >
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                          </Grid>
                          <Grid item>
                            <Typography className={classes.hotelNameDescSub}>
                              Starts from:
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography className={classes.hotelNameDescBold}>
                              BDT 10,000
                            </Typography>
                          </Grid>
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
                          //className={classes.divider}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
