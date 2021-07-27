import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    verticalAlign: "baseline !important",
  },
  margin: {
    margin: theme.spacing(1),
  },
  labelStyle: {
    fontFamily: "Raleway",
    color: theme.palette.common.grey,
  },
}));

export default function Datepicker({ label, onChange, date }) {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          ariant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label={<span className={classes.labelStyle}>{label}</span>}
          value={date}
          onChange={onChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
