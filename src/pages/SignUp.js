import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  TextField,
  Button,
  Grid,
  InputBase,
  Paper,
} from "@material-ui/core";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import RowingOutlinedIcon from "@material-ui/icons/RowingOutlined";
import Header from "../components/Header";
import SignUpImage from "../assets/signup.png";
import * as route from "../constants/Routes";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "6rem",
    marginLeft: "15rem",
    marginRight: "15rem",
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
    "& > *": {
      margin: theme.spacing(1),
      width: "20em",
    },
  },
  textField: {
    margin: theme.spacing(1),
    width: "30em",
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
  signInImage: {
    height: "20rem",
    width: "25rem",
  },
  signInButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(1),
    width: "20em",
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.light,
    },
  },
  signUpButton: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 400,
    fontSize: 14,
    color: theme.palette.primary.main,
    borderBottom: "1px solid transparent",
    "&:hover": {
      borderBottom: "1px solid #52C6FE",
      backgroundColor: "transparent",
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // const [state, setstate] = useState(initialState)

  const signUp = async () => {
    const body = {
      email: email,
      password: password,
      first_name: username,
      last_name: username,
      address: "string",
      phone: "string",
    };
    const res = await axios.post(`user/register/`, body);
    console.log(res);
    if (res.status === 201) {
      history.push("/signin");
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className={classes.mainContainer}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={2}
        >
          <Grid item>
            <img
              alt="Sign In image"
              src={SignUpImage}
              className={classes.signInImage}
            ></img>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <Typography variant="h1">Create Your Account!</Typography>
              </Grid>
              <Grid item>
                <form autoComplete="off">
                  <Grid
                    container
                    direction="column"
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid item>
                      <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        className={classes.textField}
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        className={classes.textField}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        className={classes.textField}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="confirmPassword"
                        label=" Confirm Password"
                        type="password"
                        variant="outlined"
                        className={classes.textField}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        className={classes.signInButton}
                        onClick={signUp}
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Already have an account?{" "}
                  <Button
                    disableElevation
                    disableRipple
                    disableFocusRipple
                    component={Link}
                    to={route.SIGNIN}
                  >
                    <span className={classes.signUpButton}>Sign In!</span>
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
