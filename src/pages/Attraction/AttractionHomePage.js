import React from "react";
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

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <React.Fragment>
      <div className={classes.mainContainer}>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <AttractionPlaceCard
              name="Lalakhal"
              image={HotelThumbnail}
              description="This is a chbsfsuvidnvdbn"
            />
          </Grid>
          <Grid item>
            <AttractionPlaceCard
              name="Lalakhal"
              image={HotelThumbnail}
              description="This is a chbsfsuvidnvdbn"
            />
          </Grid>
          <Grid item>
            <AttractionPlaceCard
              name="Lalakhal"
              image={HotelThumbnail}
              description="This is a chbsfsuvidnvdbn"
            />
          </Grid>
          <Grid item>
            <AttractionPlaceCard
              name="Lalakhal"
              image={HotelThumbnail}
              description="This is a chbsfsuvidnvdbn"
            />
          </Grid>
          <Grid item>
            <AttractionPlaceCard
              name="Lalakhal"
              image={HotelThumbnail}
              description="This is a chbsfsuvidnvdbn"
            />
          </Grid>
          <Grid item>
            <AttractionPlaceCard
              name="Lalakhal"
              image={HotelThumbnail}
              description="This is a chbsfsuvidnvdbn"
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
