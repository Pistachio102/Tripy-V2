import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  withStyles,
  Paper,
  Button,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Rating from "@material-ui/lab/Rating";
import * as route from "../constants/Routes";
import { Link } from "react-router-dom";
import HotelThumbnail from "../assets/hotel.png";
import HotelThumbnail2 from "../assets/hotel2.jpg";
import HotelThumbnail3 from "../assets/hotel3.jpg";
import HotelThumbnail4 from "../assets/hotel4.jpeg";
import RadioGroup from "@material-ui/core/RadioGroup";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "1rem",
    marginLeft: "15rem",
    marginRight: "15rem",
  },
  carouselStyle: {
    // width: "70%",
    height: "32em",
    backgroundColor: "transparent",
  },
  hotelThumbnail: {
    height: "30em",
    width: "70em",
    margin: 0,
  },
}));

export default function Carousels() {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = React.useState(0);

  const images = [
    {
      title: "1",
      img: HotelThumbnail,
    },
    {
      title: "1",
      img: HotelThumbnail2,
    },
    {
      title: "1",
      img: HotelThumbnail3,
    },
  ];
  function Item(props) {
    return (
      <Paper>
        <img
          alt="Hotel Picture"
          src={props.item.img}
          className={classes.hotelThumbnail}
        />
      </Paper>
    );
  }
  return (
    <React.Fragment>
      <Carousel className={classes.carouselStyle}>
        {images.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </React.Fragment>
  );
}
