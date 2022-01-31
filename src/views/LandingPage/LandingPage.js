// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import CallSection from "./Sections/CallSection.js";
import Information from "./Sections/Information.js";
import Schedule from "./Sections/Schedule.js";
import Speaker from "./Sections/Speaker.js";
// Sections for this page
import SummarySection from "./Sections/SummarySection.js";
import TeamSection from "./Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

/*
1. Header
2. Parallax
--- main---
3. SummarySection
4. CallSection
5. Information
6. Speaker
7. Schedule
8. TeamSection
9. Information(Accepted Papers)
*/

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <span id="top"></span>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="AAAI SAS 2022"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/location.jpg")}>
        <div style={{ paddingBottom: "30px" }} className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.subtitle}>AAAI 2022 workshop</h2>
              <h1 className={classes.title} style={{ maxWidth: 900 }}>
                The 2nd Workshop on Self-supervised Learning for Audio and
                Speech Processing
              </h1>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://cmt3.research.microsoft.com/SAS2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                SUBMIT PAPERS
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <span
            style={{ display: "block", height: 50 }}
            id="description"
          ></span>
          <SummarySection />
          <span style={{ display: "block", height: 50 }} id="call"></span>
          <CallSection />
          <span style={{ display: "block", height: 50 }} id="deadlines"></span>

          {/*Use <strike></strike>*/}
          <Information
            title="Important Dates"
            descriptions={[
              <div style={{ textAlign: "left" }}>
                <div style={{ margin: "30px 0 5px 0" }}>
                  <span style={{ fontWeight: "bold", color: "red" }}>
                    <s>23:59 (Anywhere on Earth), Nov 12, 2021</s>
                  </span>
                  <br />
                  <span style={{ fontWeight: "bold", color: "red" }}>
                    <s>23:59 (Anywhere on Earth), Nov 15, 2021</s>
                  </span>
                  <br />
                  <span style={{ fontWeight: "bold", color: "red" }}>
                    23:59 (Anywhere on Earth), Nov 16, 2021
                  </span>
                </div>
                <block style={{ margin: "5px 0 30px 0" }}>
                  Submission deadline
                </block>

                <div style={{ margin: "30px 0 5px 0" }}>
                  <span style={{ fontWeight: "bold", color: "red" }}>
                    23:59 (Anywhere on Earth), Dec 3, 2021
                  </span>
                </div>
                <block style={{ margin: "5px 0 30px 0" }}>
                  Notification of Acceptance/Rejection
                </block>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    margin: "30px 0 5px 0",
                  }}
                >
                  Feb 28, 2022
                </div>
                <block style={{ margin: "5px 0 30px 0" }}>
                  Date of workshop
                </block>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    margin: "30px 0 5px 0",
                  }}
                ></div>
                <block style={{ margin: "5px 0 30px 0" }}>
                  (Please check{" "}
                  <a href={"https://superbbenchmark.org/"}>SUPERB</a> and{" "}
                  <a href={"https://zerospeech.com/2021/index.html"}>
                    Zero Speech
                  </a>{" "}
                  website for challenge-specific timelines)
                </block>
              </div>,
            ]}
          />
          <span style={{ display: "block", height: 50 }} id="speakers"></span>
          <Speaker />
          <span style={{ display: "block", height: 50 }} id="schedule"></span>
          <Schedule />
          <span style={{ display: "block", height: 50 }} id="organizers"></span>

          <TeamSection />

          <span style={{ display: "block", height: 50 }} id="papers"></span>

          {/* Accepted Papers
          <Information title="Accepted Papers" descriptions={[<div style={{textAlign: "left"}}>
            {
              [
                [
                  '[Paper Link]',
                  '[Paper Title]',
                  '[Authors]',
                ],
              ].map(info =>
                <div>
                  <div style={{margin: "30px 0 5px 0"}}>
                    <span style={{fontWeight: "bold"}}><a target="_blank" href={info[0]}><span style={{color: "#7986CB"}}>{info[1]}</span></a><a>{info.length > 3? <a target="_blank" href={info[3]}><span style={{color: "#f29e4c"}}> (supplementary)</span></a>:""}</a></span>
                  </div>
                    <block style={{margin: "5px 0 30px 0"}}>{info[2]}</block>
                </div>
                )
            }
          </div>]} />
          Accepted Papers */}

          <span style={{ display: "block", height: 50 }} id="committee"></span>
          <Information
            title="Program Committee"
            descriptions={[
              <div style={{ textAlign: "left" }}>
                {[["TBD", "TBD"]].map((info) => (
                  <div>
                    <div style={{ margin: "30px 0 5px 0" }}>
                      <span style={{ fontWeight: "bold" }}>{info[0]}</span>
                    </div>
                    <block style={{ margin: "5px 0 30px 0" }}>{info[1]}</block>
                  </div>
                ))}
              </div>,
            ]}
          />
          <span style={{ display: "block", height: 50 }} id="contact"></span>

          <Information
            title="Contact"
            descriptions={[
              <span style={{ textAlign: "left" }}>
                sas.aaai.2022@gmail.com
              </span>,
            ]}
          />

          <span
            style={{ display: "block", height: 50 }}
            id="previous_workshops"
          ></span>

          <Information
            title="Previous Workshops"
            descriptions={[
              <span style={{ textAlign: "left" }}>
                <a href={"https://neurips-sas-2020.github.io/"}>
                  NeurIPS SAS 2020
                </a>
              </span>,
            ]}
          />

          <p style={{ height: 50 }}></p>
        </div>
      </div>
      <p style={{ height: 50 }}></p>
    </div>
  );
}
