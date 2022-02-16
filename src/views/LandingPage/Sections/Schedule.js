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
          Speech Representations [
          <a
            href={require("assets/CameraReadys/7/CameraReady/AAAI_SAS_2022_S3PRL_VC.pdf")}
          >
            paper link
          </a>
          ]
        </li>
        <li>
          Pronunciation Adaptive Self Speaking Agent Using WaveGrad [
          <a
            href={require("assets/CameraReadys/12/CameraReady/aaai22_ssl_camera_ready.pdf")}
          >
            paper link
          </a>
          ]
        </li>
        <li>
          Mandarin-English Code-Switching Speech Recognition with
          Self-Supervised Speech Representation Models [
          <a
            href={require("assets/CameraReadys/4/CameraReady/SSL-CS-ASR_AAAI-SAS.pdf")}
          >
            paper link
          </a>
          ]
        </li>
        <li>
          Don't speak too fast: The impact of data bias on self-supervised
          speech models [
          <a
            href={require("assets/CameraReadys/11/CameraReady/AAAI_SAS_2022_final.pdf")}
          >
            paper link
          </a>
          ]
        </li>
      </ul>
      <h5 className={classes.title}>Paper presentation - session 2</h5>
      <ul style={{ color: "#696969", lineHeight: "30px" }}>
        <li>
          Characterizing the Adversarial Vulnerability of Speech Self-Supervised
          Learning [
          <a
            href={require("assets/CameraReadys/21/CameraReady/Characterizing_the_adversarial_vulnerability_of_speech_self-supervised_learning.pdf")}
          >
            paper link
          </a>
          ]
        </li>
        <li>
          Membership Inference Attacks Against Self-supervised Speech Models [
          <a
            href={require("assets/CameraReadys/22/CameraReady/AAAI_SAS_workshop_Membership_Inference_Attacks_Against_Self_supervised_Speech_Models.pdf")}
          >
            paper link
          </a>
          ]
        </li>
        <li>
          Pretext Tasks Selection for Multitask Self-Supervised Speech
          Representation [
          <a
            href={require("assets/CameraReadys/14/CameraReady/AAAI_Workshop.pdf")}
          >
            paper link
          </a>
          ]
        </li>
        <li>
          DeLoRes: Decorrelating Latent Spaces for Low-Resource Audio
          Representation Learning [
          <a
            href={require("assets/CameraReadys/18/CameraReady/aaai_delores_final.pdf")}
          >
            paper link
          </a>
          ]
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
          [
          <a
            href={require("assets/CameraReadys/9/CameraReady/paper_millet_dunbar.pdf")}
          >
            paper link
          </a>
          ] [
          <a href={require("assets/CameraReadys/9/CameraReady/appendix.pdf")}>
            appendix
          </a>
          ]
        </li>
        <li>
          Investigation on instance mixup regularization strategies for
          self-supervised speaker representation learning
        </li>
        <li>
          Detecting Depression with a Temporal Context of Speaker Embeddings [
          <a
            href={require("assets/CameraReadys/20/CameraReady/SAS_AAAI_2022_depression.pdf")}
          >
            paper link
          </a>
          ]
        </li>
      </ul>
      <h5 className={classes.title}>Paper presentation (SUPERB)</h5>
      <ul style={{ color: "#696969", lineHeight: "30px" }}>
        <li>SUPERB introduction and hidden set evaluation results</li>
        <li>
          Self-Supervised Representation Learning for Speech Using Visual
          Grounding and Masked Language Modeling [
          <a
            href={require("assets/CameraReadys/15/CameraReady/sas_aaai_fastvgs_zs21_superb.pdf")}
          >
            paper link
          </a>
          ]
        </li>
        <li>
          Invitation talk: WavLM: Large-Scale Self-Supervised Pre-Training for
          Full Stack Speech Processing [
          <a
            href={require("assets/CameraReadys/3/CameraReady/AAAISAS2022_vmix_cameraready-compressed.pdf")}
          >
            paper link
          </a>
          ]
        </li>
        <li>
          DistilHuBERT: Speech Representation Learning by Layer-wise
          Distillation of Hidden-unit BERT [
          <a
            href={require("assets/CameraReadys/1/CameraReady/DistilHuBERT_AAAI_SAS_2022.pdf")}
          >
            paper link
          </a>
          ]
        </li>
        <li>
          Speech Representation Learning through Self-supervised Pretraining and
          Multi-task Finetuning [
          <a
            href={require("assets/CameraReadys/2/CameraReady/AAAI_SUPERB_MTL_camera.pdf")}
          >
            paper link
          </a>
          ]
        </li>
      </ul>
    </div>
  );
}
