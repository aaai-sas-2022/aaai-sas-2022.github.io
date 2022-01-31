// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/scheduleStyle.js";
import NameCard from "components/Card/NameCard";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";

const useStyles = makeStyles(styles);

export default function Speaker(props) {
  const { name, object } = props;
  const classes = useStyles();
  const infos = [
    [
      "James Glass",
      "MIT",
      "https://www.csail.mit.edu/person/jim-glass",
      "https://www.csail.mit.edu/sites/default/files/styles/headshot/public/images/people/profile/jim%20glass-full-17%20copy.jpg?h=4c964bae&itok=gF1QBfpQ",
    ],
    [
      "Kristen Grauman",
      "University of Texas at Austin",
      "https://www.cs.utexas.edu/users/grauman/",
      "https://www.cs.utexas.edu/users/grauman/grauman.jpg",
    ],
    [
      "Yu Zhang",
      "Google Brain",
      "https://research.google/people/105680/",
      "https://sunprinces.github.io/interspeech2020-meta-learning/authors/yu/avatar_hu8314cdd3c0c87f4902511c1e311fafc1_69482_270x270_fill_q90_lanczos_center.jpg",
    ],
    [
      "Danqi Chen",
      "Princeton University",
      "https://www.cs.princeton.edu/~danqic/",
      "https://www.cs.princeton.edu/~danqic/images/danqi_2019.jpg",
    ],
    [
      "Alexei Baevski",
      "FAIR",
      "https://ai.facebook.com/people/alexei-baevski/",
      "https://i.imgur.com/cjrnYUl.png",
    ],
    [
      "Wei-Ning Hsu",
      "FAIR",
      "https://scholar.google.com/citations?user=N5HDmqoAAAAJ&hl=en",
      "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=N5HDmqoAAAAJ&citpid=3",
    ],
    [
      "Herman Kamper",
      "Stellenbosch University",
      "https://www.kamperh.com/",
      "https://www.kamperh.com/images/herman_scaled_rounded.jpg",
    ],
    [
      "Jan Chorowski",
      "University of Wroclaw and NavAlgo",
      "https://sites.google.com/a/cs.uni.wroc.pl/jch/home/about",
      "https://warsaw.ai/wp-content/uploads/2020/12/chorowski_larger-e1609416203905.jpg",
    ],
    [
      "Sakriani Sakti",
      "JAIST / NAIST",
      // "Japan Advanced Institute of Science and Technology (JAIST) / Nara Institute of Science and Technology (NAIST)",
      "https://www.jaist.ac.jp/~ssakti/index.html",
      "https://ahcweb01.naist.jp/ssakti/ssakti2.JPG",
    ],
    [
      "Odette Scharenborg",
      "Delft University of Technology",
      "https://www.tudelft.nl/en/eemcs/the-faculty/departments/intelligent-systems/multimedia-computing/people/odette-scharenborg",
      "https://d2k0ddhflgrk1i.cloudfront.net/_processed_/f/6/csm_IMG_3139-2_f6480d7740.jpg",
    ],
  ];
  return (
    <div className={classes.section} style={{ textAlign: "left" }}>
      <h2 className={classes.title}>Speakers</h2>

      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description} style={{ textAlign: "left" }}>
            Keynote speakers:
          </h4>
        </GridItem>

        <GridItem xs={12} sm={12} md={8}>
          <GridContainer>
            {infos.slice(0, 2).map((info) => (
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <div style={{ padding: 10, maxWidth: 400, margin: "auto" }}>
                  <NameCard
                    name={info[0]}
                    org={info[1]}
                    page={info[2]}
                    imgurl={info[3]}
                  />
                </div>
              </GridItem>
            ))}
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description} style={{ textAlign: "left" }}>
            Invited speakers:
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer>
            {infos.slice(2).map((info) => (
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <div style={{ padding: 10, maxWidth: 400, margin: "auto" }}>
                  <NameCard
                    name={info[0]}
                    org={info[1]}
                    page={info[2]}
                    imgurl={info[3]}
                  />
                </div>
              </GridItem>
            ))}
          </GridContainer>
        </GridItem>
      </GridContainer>
      <p style={{ height: 30 }}></p>
    </div>
  );
}
