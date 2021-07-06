import { makeStyles } from "@material-ui/core";
import React from "react";
import Header2 from "../components/Header2";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginLeft: drawerWidth + 50,
    marginRight: 50,
    marginTop: 25,
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Header2 />
      <main>{children}</main>
    </div>
  );
}
