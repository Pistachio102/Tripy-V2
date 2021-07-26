import React, { useState } from "react";
import { makeStyles, Typography, withStyles, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import GradeIcon from "@material-ui/icons/Grade";
import Rating from "@material-ui/lab/Rating";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PoolIcon from "@material-ui/icons/Pool";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import LanguageIcon from "@material-ui/icons/Language";
import "date-fns";
import Datepicker from "../../components/DatePicker";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import HotelThumbnail from "../../assets/hotel.png";
import HotelThumbnail2 from "../../assets/hotel2.jpg";
import HotelThumbnail3 from "../../assets/hotel3.jpg";
import HotelThumbnail4 from "../../assets/hotel4.jpeg";
import RadioGroup from "@material-ui/core/RadioGroup";
import Slider from "@material-ui/core/Slider";
import RestaurantCard from "../../components/RestaurantCard";

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
      //height: "40em",
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
    // display: "flex",
    // flexWrap: "wrap",
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
    height: "0.45em",
    width: "0.45em",
    marginRight: "0.5em",
    color: theme.palette.common.green,
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
  amenitiesIcon: {
    height: "0.6em",
    width: "0.6em",
    marginRight: "0.5em",
    // paddingTop: "0.2em",
    //color: theme.palette.common.green,
    alignItems: "flex-end",
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

  const [priceState, setpriceState] = React.useState({
    cheapEats: false,
    midRange: false,
    fineDining: false,
  });

  const handlePriceChange = (event) => {
    setpriceState({ ...priceState, [event.target.name]: event.target.checked });
  };

  const { cheapEats, midRange, fineDining } = priceState;

  const [mealsState, setMealsState] = React.useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  const handleMealsChange = (event) => {
    setMealsState({ ...mealsState, [event.target.name]: event.target.checked });
  };

  const { breakfast, lunch, dinner } = mealsState;

  const [cuisineState, setCuisineState] = React.useState({
    asian: false,
    seaFood: false,
    cafe: false,
    korean: false,
    indian: false,
    bengali: false,
    fusion: false,
    chinese: false,
    bar: false,
    italian: false,
    mexican: false,
    thai: false,
    american: false,
    international: false,
    fastFood: false,
  });

  const handleCuisineChange = (event) => {
    setCuisineState({
      ...cuisineState,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    asian,
    seaFood,
    cafe,
    korean,
    indian,
    bengali,
    fusion,
    chinese,
    bar,
    italian,
    mexican,
    thai,
    american,
    international,
    fastFood,
  } = cuisineState;

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
                <Typography variant="h1">Restaurants in Sylhet</Typography>
                {/* <Grid
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
                </Grid> */}
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
                        <FormControl
                          component="fieldset"
                          className={classes.formControl}
                        >
                          <FormLabel
                            component="legend"
                            className={classes.formLabel}
                          >
                            Price
                          </FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={cheapEats}
                                  onChange={handlePriceChange}
                                  name="cheapEats"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Cheap eats
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={midRange}
                                  onChange={handlePriceChange}
                                  name="midRange"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Mid-range
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={fineDining}
                                  onChange={handlePriceChange}
                                  name="fineDining"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Fine dining
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
                            Meals
                          </FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={breakfast}
                                  onChange={handleMealsChange}
                                  name="breakfast"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Breakfast
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={lunch}
                                  onChange={handleMealsChange}
                                  name="lunch"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Lunch
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={dinner}
                                  onChange={handleMealsChange}
                                  name="dinner"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Dinner
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
                            Cuisine
                          </FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={bengali}
                                  onChange={handleCuisineChange}
                                  name="bengali"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Bengali
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={indian}
                                  onChange={handleCuisineChange}
                                  name="indian"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Indian
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={american}
                                  onChange={handleCuisineChange}
                                  name="american"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  American
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={mexican}
                                  onChange={handleCuisineChange}
                                  name="mexican"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Mexican
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={italian}
                                  onChange={handleCuisineChange}
                                  name="italian"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Italian
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={korean}
                                  onChange={handleCuisineChange}
                                  name="korean"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Korean
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={chinese}
                                  onChange={handleCuisineChange}
                                  name="chinese"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Chinese
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={thai}
                                  onChange={handleCuisineChange}
                                  name="thai"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Thai
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={cafe}
                                  onChange={handleCuisineChange}
                                  name="cafe"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Cafe
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={seaFood}
                                  onChange={handleCuisineChange}
                                  name="seaFood"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Sea Food
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={bar}
                                  onChange={handleCuisineChange}
                                  name="bar"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Bar
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={asian}
                                  onChange={handleCuisineChange}
                                  name="asian"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Asian
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={fastFood}
                                  onChange={handleCuisineChange}
                                  name="fastFood"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Fast Food
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={fusion}
                                  onChange={handleCuisineChange}
                                  name="fusion"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  Fusion
                                </span>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={international}
                                  onChange={handleCuisineChange}
                                  name="international"
                                />
                              }
                              label={
                                <span className={classes.formControlLabelText}>
                                  International
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
                            Restaurant Rating
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
                                <Rating name="read-only" value={5} readOnly />
                              }
                            />
                            <FormControlLabel
                              value="fourStar"
                              control={<Radio />}
                              label={
                                <Rating name="read-only" value={4} readOnly />
                              }
                            />
                            <FormControlLabel
                              value="threeStar"
                              control={<Radio />}
                              label={
                                <Rating name="read-only" value={3} readOnly />
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
              <Grid item container direction="column" xs={9}>
                <Grid item>
                  <RestaurantCard
                    image={HotelThumbnail}
                    name="Sea Food Heaven"
                    type="Sea Food"
                    rating={5}
                    money="$"
                    freeCancellation={true}
                    wifi={true}
                    offer={true}
                  />
                </Grid>
                <Grid item>
                  <RestaurantCard
                    image={HotelThumbnail2}
                    name="Thai Heaven"
                    type="Thai"
                    rating={4}
                    money="$$"
                    freeCancellation={true}
                    wifi={true}
                    offer={false}
                  />
                </Grid>
                <Grid item>
                  <RestaurantCard
                    image={HotelThumbnail3}
                    name="Korean Heaven"
                    type="Korean"
                    rating={3}
                    money="$$$"
                    freeCancellation={true}
                    wifi={true}
                    offer={true}
                  />
                </Grid>
                <Grid item>
                  <RestaurantCard
                    image={HotelThumbnail4}
                    name="Intercontinental"
                    type="International"
                    rating={4}
                    money="$$"
                    freeCancellation={true}
                    wifi={true}
                    offer={false}
                  />
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
