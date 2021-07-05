import React, { useState } from "react";
import "date-fns";
import { makeStyles, Typography, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Header2 from "../../components/Header2";
import { Link } from "react-router-dom";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
    fontWeight: theme.typography.fontWeightRegular,

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
  },
  tabs: {
    "& button": {
      minWidth: 50,
    },
  },
  tabContainer: {},
}));

export default function HotelHomePage() {
  const classes = useStyles();
  const [from, setFrom] = React.useState(new Date("2014-08-18T21:11:54"));
  const [to, setTo] = useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <React.Fragment>
      <Header2 />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}
