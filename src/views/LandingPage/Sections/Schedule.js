// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/scheduleStyle.js";
import CustomizedTables from "components/Table/Table.js";
import React from "react";



const useStyles = makeStyles(styles);

export default function Information(props) {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{textAlign : "left"}}>
      <h2 className={classes.title}>Schedule</h2>
      <p style={{height: 10}}></p>
      <CustomizedTables />
      <p style={{height: 30}}></p>
    </div>
  );
}
