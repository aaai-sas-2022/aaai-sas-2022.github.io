// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/callStyle.js";
import React from "react";

const useStyles = makeStyles(styles);

export default function CallSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ textAlign: "left" }}>
      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}> */}
      <h2 className={classes.title}>Call for Papers</h2>

      {/* <h5 className={classes.description}>
          The workshop welcomes the submission of work on, but not limited to, the following research directions. 
          </h5> */}
      <h5 className={classes.description}>
        The workshop welcomes the submission of work on, but not limited to, the
        following research directions.
      </h5>
      <ul style={{ color: "#696969", lineHeight: "30px" }}>
        <li>
          New self-supervised proxy tasks or new approaches using
          self-supervised models in speech and audio processing.
        </li>
        <li>
          Theoretical or empirical studies focusing on understanding why
          self-supervision methods work for speech and audio.
        </li>
        <li>
          Exploring the limits of self-supervised learning approaches for speech
          and audio processing, for example, adverse environment conditions,
          multiple languages, or generalization across downstream tasks.
        </li>
        <li>
          Comparison or integration of self-supervised learning methods and
          other semi-supervised and transfer learning methods in speech and
          audio processing tasks.
        </li>
        <li>
          Self-supervised learning approaches involving the interaction of
          speech/audio and other modalities.
        </li>
      </ul>
      <br />
      <h5 className={classes.description}>
        The workshop also welcomes participants of{" "}
        <a href={"https://superbbenchmark.org/"}>SUPERB</a> and{" "}
        <a href={"https://zerospeech.com/2021/index.html"}>Zero Speech</a>{" "}
        challenge to submit their results.
      </h5>
      <ul style={{ color: "#696969", lineHeight: "30px" }}>
        <li>
          SUPERB is a benchmarking platform that allows the community to train,
          evaluate, and compare the speech representations on diverse downstream
          speech processing tasks. The challenge requires participants to build
          competitive models for diverse downstream tasks with limited labeled
          data and trainable parameters, by reusing self-supervised pre-trained
          networks.
        </li>
        <li>
          Zero Speech challenge is to build language models only based on audio
          or audio-visual information, without using any textual input. The
          trained models are intended to assign scores to novel utterances,
          assessing whether they are possible or likely utterances in the
          training language.
        </li>
      </ul>
      {/* <Paper className={classes.paper} elevation={3} children={(<span>SUPERB is a benchmarking platform that allows the community to train, evaluate, and compare the speech representations on diverse downstream speech processing tasks. The challenge requires participants to build competitive models for diverse downstream tasks with limited labeled data and trainable parameters, by reusing self-supervised pre-trained networks.</span>)} />
          <Paper className={classes.paper} elevation={3} children={(<span>Zero Speech challenge is to build language models only based on audio or audio-visual information, without using any textual input. The trained models are intended to assign scores to novel utterances, assessing whether they are possible or likely utterances in the training language.</span>)} /> */}
      <br />
      <h5 className={classes.description}>
        Papers may consist of up to eight (8 ) pages of content, plus unlimited
        pages of references and appendix, in the AAAI submission format and will
        be submitted to the submission site in the track of regular paper,
        SUPERB or Zero Speech result paper. Each paper will be reviewed by three
        reviewers from the workshop program committee in double-blind. Accepted
        papers will not be archived but will be hosted on the workshop website.
        We allow papers that are concurrently submitted to or currently under
        review at other conferences or venues.
      </h5>

      <h5 className={classes.description}>
        We also want to let you know that{" "}
        <a
          href={
            "https://signalprocessingsociety.org/blog/ieee-jstsp-special-issue-self-supervised-learning-speech-and-audio-processing"
          }
        >
          IEEE JSTSP Special Issue on Self-Supervised Learning for Speech and
          Audio Processing
        </a>{" "}
        is call-for-paper. The deadline is <b>January 15, 2022</b>. Submissions
        to both the workshop and the special issue are possible, but the journal
        paper should show added extension. If you want to submit to the special
        issue but have problems meeting the deadline, please feel free to
        contact Hung-yi Lee (hungyilee@ntu.edu.tw).
      </h5>

      {/*
          <h5 className={classes.description}>
          We welcome submissions that work in the area of self-supervised learning for audio and speech processing. Relevant research directions include, but not limited to:
          </h5>

          <Paper className={classes.paper} elevation={3} children={(<span>New self-supervised <strong>training approaches</strong></span>)} />
          <Paper className={classes.paper} elevation={3} children={(<span><strong>Application</strong> of self-supervised models to downstream tasks, such as automatic speech recognition, speech enhancement, speech augmentation, and spoken language understanding</span>)} />
          <Paper className={classes.paper} elevation={3} children={(<span><strong>Generalizability</strong> of self-supervised models across domains, tasks, or languages</span>)} />
          <Paper className={classes.paper} elevation={3} children={(<block><strong>Understanding</strong> of why do self-supervision methods work for speech and audio, for example:
            <ul>
              <li>What does the model learn in self-supervised learning tasks?</li>
              <li>Why unrelated self-supervised proxy tasks improve downstream speech application performance?</li>
              <li>Are there some self-supervision proxy tasks that are suitable for some downstream applications but not others?</li>
            </ul>
          </block>)} />
          <Paper className={classes.paper} elevation={3} children={(<span><strong>Comparative study</strong> on self-supervised learning approaches</span>)} />
          <h5 className={classes.description}>
          The submissions should be in <strong>NeurIPS</strong> style between <strong>4 to 8 pages, excluding the references</strong>. Authors can add supplementary material in addition to the 8 pages, but reviewers are not required to review the extra material. Original works are preferred. Submissions that are published on <strong>arXiv</strong> or similar repositories are acceptable. Papers submitted to other conferences or workshops can be submitted, but <strong>the authors must contact the organizers.</strong> Submissions will be reviewed by at least three reviewers. Authors and reviewers are asked to disclose any possible conflict of interest, and the organizers will manage the conflict of interest when assigning submissions for reviews. The review will be <strong>double blind</strong>. Note that our workshop is not archival, but the accepted papers will be hosted on the workshop website. For reproducibility, we also encourage the authors to release the code of their experiments publicly.
          </h5>
          */}
      {/* </GridItem>
      </GridContainer> */}
    </div>
  );
}
