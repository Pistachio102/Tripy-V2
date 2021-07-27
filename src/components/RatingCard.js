import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Typography, TextField, MenuItem, Slider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import "antd/dist/antd.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "6rem",
    // marginLeft: "10rem",
    // marginRight: "10rem",
    //paddingLeft: "15rem",
    //justifyContent: "center",
  },
  ratingTitle: {
    ...theme.typography.h2,
    color: theme.palette.common.black,
    marginBottom: "0.5rem",
  },
  cardStyle: {
    minWidth: "22em",
    height: "7em",
    boxShadow: theme.shadows[3],
    paddingTop: 0,
  },
  avatar: {
    backgroundColor: theme.palette.common.grey,
  },
  nameButton: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "0.7rem",
    color: theme.palette.common.black,

    // marginBottom: "0.5rem",
    borderBottom: "2px solid transparent",
    "&:hover": {
      //color: theme.palette.common.grey,
      backgroundColor: "transparent",
      borderBottom: "2px solid #000",
    },
  },
}));

export default function RatingCard({ avatar, name, rate }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.cardStyle}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {avatar}
            </Avatar>
          }
          title={
            <Button variant="text">
              <span className={classes.nameButton}>{name}</span>
            </Button>
          }
          subheader={<Rating name="read-only" value={rate} readOnly />}
        />
      </Card>
    </React.Fragment>
  );
}
