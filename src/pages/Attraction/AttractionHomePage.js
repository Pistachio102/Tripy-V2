import React, { useEffect, useState } from "react";
import { makeStyles, Typography, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Header2 from "../../components/Header2";
import { Link } from "react-router-dom";
import AttractionPlaceCard from "../../components/AttractionPlaceCard";
import HotelThumbnail from "../../assets/hotel.png";
import HotelThumbnail2 from "../../assets/hotel2.jpg";
import HotelThumbnail3 from "../../assets/hotel3.jpg";
import HotelThumbnail4 from "../../assets/hotel4.jpeg";
import axios from "axios";

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
    marginTop: "2rem",
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

export default function AttractionHomePage() {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);
  const [data, setData] = useState([]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const fetchData = async () => {
    const res = await axios.get(`things-to-do/`);
    console.log(res);
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <div className={classes.mainContainer}>
        <Grid container direction="row" spacing={3}>
          {data.map((item) => (
            <Grid item>
              <AttractionPlaceCard
                name={item.name}
                image={item.image}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
}
