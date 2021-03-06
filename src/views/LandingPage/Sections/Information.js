// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/informationStyle.js";
import React from "react";




const useStyles = makeStyles(styles);

export default function InformationSection(props) {
  const classes = useStyles();
  const {title, descriptions} = props
  return (
    <div className={classes.section} style={{textAlign : "left"}}>
      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}> */}
          <h2 className={classes.title}>{title}</h2>
          {
            descriptions.map(des => 
            <h5 className={classes.description}>
              {des}
            </h5>)
          }
        {/* </GridItem>
      </GridContainer> */}
    </div>
  );
}
