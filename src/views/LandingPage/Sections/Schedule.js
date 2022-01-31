// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/scheduleStyle.js";
import CustomizedTables from "components/Table/Table.js";
import React from "react";

const useStyles = makeStyles(styles);

export default function Information(props) {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ textAlign: "left" }}>
      <h2 className={classes.title}>Schedule</h2>
      <p style={{ height: 10 }}></p>
      <CustomizedTables />

      <h5 className={classes.title}>Paper presentation - session 1</h5>
      <ul style={{ color: "#696969", lineHeight: "30px" }}>
        <li>
          S3PRL-VC: Open-source Voice Conversion Framework with Self-supervised
          Speech Representations
        </li>
        <li>Pronunciation Adaptive Self Speaking Agent Using WaveGrad</li>
        <li>
          Mandarin-English Code-Switching Speech Recognition with
          Self-Supervised Speech Representation Models
        </li>
        <li>
          Don't speak too fast: The impact of data bias on self-supervised
          speech models
        </li>
      </ul>
      <h5 className={classes.title}>Paper presentation - session 2</h5>
      <ul style={{ color: "#696969", lineHeight: "30px" }}>
        <li>
          Characterizing the Adversarial Vulnerability of Speech Self-Supervised
          Learning
        </li>
        <li>
          Membership Inference Attacks Against Self-supervised Speech Models
        </li>
        <li>
          Pretext Tasks Selection for Multitask Self-Supervised Speech
          Representation
        </li>
        <li>
          DeLoRes: Decorrelating Latent Spaces for Low-Resource Audio
          Representation Learning
        </li>
      </ul>
      <h5 className={classes.title}>Paper presentation - session 3</h5>
      <ul style={{ color: "#696969", lineHeight: "30px" }}>
        <li>
          An Overview of Unsupervised Representation Learning for Speech, Lasse
          Borgholt
        </li>
        <li>
          Do self-supervised speech models develop human-like perception biases
        </li>
        <li>
          Investigation on instance mixup regularization strategies for
          self-supervised speaker representation learning
        </li>
        <li>
          Detecting Depression with a Temporal Context of Speaker Embeddings
        </li>
      </ul>
      <h5 className={classes.title}>Paper presentation (SUPERB)</h5>
      <ul style={{ color: "#696969", lineHeight: "30px" }}>
        <li>SUPERB introduction and hidden set evaluation results</li>
        <li>
          Self-Supervised Representation Learning for Speech Using Visual
          Grounding and Masked Language Modeling
        </li>
        <li>
          Invitation talk: WavLM: Large-Scale Self-Supervised Pre-Training for
          Full Stack Speech Processing
        </li>
        <li>
          DistilHuBERT: Speech Representation Learning by Layer-wise
          Distillation of Hidden-unit BERT
        </li>
        <li>
          Speech Representation Learning through Self-supervised Pretraining and
          Multi-task Finetuning
        </li>
      </ul>
    </div>
  );
}
