import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { CalendarToday } from "@material-ui/icons";
import { IconButton, InputAdornment } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    verticalAlign: "baseline !important",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Datepicker({ label, onChange, date }) {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <InputLabel>{label}</InputLabel>
      <DatePicker
        className={classes.root}
        fullWidth
        autoOk
        inputVariant="outlined"
        margin="dense"
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        value={date}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <CalendarToday />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
