// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import TransitionsModal from "components/Modal/Modal.js";
import React from "react";

const useStyles = makeStyles(styles);

function Person(props) {
  const {
    classes,
    imageClasses,
    name,
    email,
    title,
    description,
    imgurl,
    page,
  } = props;
  return (
    <GridItem xs={12} sm={12} md={4}>
      <Card plain>
        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
          <img
            src={imgurl}
            alt="..."
            className={imageClasses}
            style={{ width: 150, height: 150, objectFit: "cover" }}
          />
        </GridItem>
        <h4 className={classes.cardTitle} style={{ textAlign: "center" }}>
          {name}
          <br />
          <small className={classes.smallTitle}>{title}</small>
          <br />
          <small className={classes.smallTitle}>{email}</small>
        </h4>
        <CardBody>
          <p className={classes.description}>{description}</p>
          <TransitionsModal page={page} description={description} />
        </CardBody>
      </Card>
    </GridItem>
  );
}

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const infos = [
    [
      "Abdelrahman Mohamed",
      "Facebook",
      "abdo@fb.com",
      <span>
        <strong>Abdelrahman Mohamed</strong> is a research scientist at Facebook
        AI research (FAIR) in Seattle. Before FAIR, he was a principal
        scientist/manager in Amazon Alexa AI team. From 2014 to 2017, he was in
        Microsoft Research Redmond. He received his PhD from the University of
        Toronto with Geoffrey Hinton and Gerald Penn where he was part of the
        team that started the Deep Learning revolution in Spoken Language
        Processing in 2009. He is the recipient of the IEEE Signal Processing
        Society Best Journal Paper Award for 2016. His research interests span
        Deep Learning, Spoken Language Processing, and Natural Language
        Understanding. He is the co-organizer of the special session on "New
        Trends in self-supervised speech processing" at Interspeech (2020) and
        two workshops "Self-Supervised Learning for Speech and Audio
        Processing", and “Self-Supervised Learning - Theory and Practice” at
        NeurIPS (2020).
      </span>,
      "https://www.cs.toronto.edu/~asamir/Abdelrahman_Mohamed.jpg",
      "https://research.fb.com/people/mohamed-abdelrahman/",
    ],
    [
      "Hung-yi Lee",
      "National Taiwan University",
      "hungyilee@ntu.edu.tw",
      <span>
        <strong>Hung-yi Lee</strong> received the M.S. and Ph.D. degrees from
        National Taiwan University (NTU), Taipei, Taiwan, in 2010 and 2012,
        respectively. From September 2012 to August 2013, he was a postdoctoral
        fellow in Research Center for Information Technology Innovation,
        Academia Sinica. From September 2013 to July 2014, he was a visiting
        scientist at the Spoken Language Systems Group of MIT Computer Science
        and Artificial Intelligence Laboratory (CSAIL). He is currently an
        associate professor of the Department of Electrical Engineering of
        National Taiwan University, with a joint appointment at the Department
        of Computer Science & Information Engineering of the university. His
        research focuses on machine learning (especially deep learning), spoken
        language understanding and speech recognition. He is the special session
        co-organizer about "Meta Learning for Human Language Technology" and
        “New Trends in self-supervised speech processing” at Interspeech (2020).
      </span>,
      "https://yt3.ggpht.com/a/AATXAJyD-nikDxFYMS26xENSwBrdycxguBTdocSATQ=s900-c-k-c0xffffffff-no-rj-mo",
      "https://speech.ee.ntu.edu.tw/~tlkagk/",
    ],
    [
      "Shinji Watanabe",
      "Carnegie Mellon University",
      "shinjiw@ieee.org",
      <span>
        <strong>Shinji Watanabe</strong> is an Associate Professor at Carnegie
        Mellon University, Pittsburgh, PA. He received his B.S., M.S., and Ph.D.
        (Dr. Eng.) degrees from Waseda University, Tokyo, Japan. He was a
        research scientist at NTT Communication Science Laboratories, Kyoto,
        Japan, from 2001 to 2011, a visiting scholar in Georgia institute of
        technology, Atlanta, GA in 2009, and a senior principal research
        scientist at Mitsubishi Electric Research Laboratories (MERL),
        Cambridge, MA USA from 2012 to 2017. Prior to the move to Carnegie
        Mellon University, he was an associate research professor at Johns
        Hopkins University, Baltimore, MD USA from 2017 to 2020. His research
        interests include automatic speech recognition, speech enhancement,
        spoken language understanding, and machine learning for speech and
        language processing. He has published more than 200 papers in
        peer-reviewed journals and conferences and received several awards,
        including the best paper award from the IEEE ASRU in 2019. He served as
        an Associate Editor of the IEEE Transactions on Audio Speech and
        Language Processing. He was/has been a member of several technical
        committees, including the APSIPA Speech, Language, and Audio Technical
        Committee (SLA), IEEE Signal Processing Society Speech and Language
        Technical Committee (SLTC), and Machine Learning for Signal Processing
        Technical Committee (MLSP).
      </span>,
      "https://i.imgur.com/QZk6wXw.png",
      "https://sites.google.com/view/shinjiwatanabe",
    ],
    [
      "Tara Sainath",
      "Google",
      "tsainath@google.com",
      <span>
        <strong>Tara Sainath</strong> received her PhD in Electrical Engineering
        and Computer Science from MIT in 2009. The main focus of her PhD work
        was in acoustic modeling for noise robust speech recognition. After her
        PhD, she spent 5 years at the Speech and Language Algorithms group at
        IBM T.J. Watson Research Center, before joining Google Research. She has
        co-organized a special session on Sparse Representations at Interspeech
        2010 in Japan. She has also organized a special session on Deep Learning
        at ICML 2013 in Atlanta, a special session on "New Trends in
        self-supervised speech processing" at Interspeech (2020), and the
        workshop on "Self-Supervised Learning for Speech and Audio Processing"
        at NeurIPS (2020). In addition, she is a staff reporter for the IEEE
        Speech and Language Processing Technical Committee (SLTC) Newsletter.
        Her research interests are mainly in acoustic modeling, including deep
        neural networks, sparse representations and adaptation methods.
      </span>,
      "https://i.imgur.com/Nq2TItJ.png",
      "https://ai.google/research/people/TaraSainath/",
    ],
    [
      "Karen Livescu",
      "TTI-Chicago",
      "klivescu@ttic.edu",
      <span>
        <strong>Karen Livescu</strong> is an Associate Professor at TTI-Chicago,
        a philanthropically endowed academic computer science institute located
        on the University of Chicago campus. She completed her PhD in 2005 at
        MIT in the Spoken Language Systems group of the Computer Science and
        Artificial Intelligence Laboratory. In 2005-2007 she was a post-doctoral
        lecturer in the MIT EECS department. Her main research interests are in
        speech and language processing and related problems in machine learning.
        Her recent work includes multi-view representation learning, acoustic
        word embeddings, visually grounded speech modeling, and automatic sign
        language recognition. Her recent professional activities include serving
        as a program chair of ICLR 2019 and a technical co-chair of ASRU
        2015/2017/2019 and Interspeech 2022.
      </span>,
      "https://www.ttic.edu/img/livescu.jpg",
      "https://ttic.uchicago.edu/~klivescu/",
    ],
    [
      "Shang-Wen Li",
      "Facebook",
      "shangwel@fb.com",
      <span>
        <strong>Shang-Wen Li</strong> is an Research and Engineering Manager at
        Facebook AI, and he worked at Apple Siri, Amazon Alexa and AWS before
        joining Facebook. He earned his Ph.D. from MIT Computer Science and
        Artificial Intelligence Laboratory (CSAIL) in 2016. His research is
        focused on spoken language understanding, dialog management, machine
        reading comprehension, and low-resource speech processing. He
        co-organized the workshop of "Self-Supervised Learning for Speech and
        Audio Processing" at NeurIPS (2020) and the workshop of "Meta Learning
        and Its Applications to Natural Language Processing" at ACL (2021).
      </span>,
      "https://sunprinces.github.io/interspeech2020-meta-learning/authors/shangwen/avatar_hube98b48111b6c1a4c81f443802127d8f_68512_270x270_fill_q90_lanczos_center.jpg",
      "https://swdanielli.github.io/index.html",
    ],
    [
      "Ewan Dunbar",
      "University of Toronto",
      "ewan.dunbar@utoronto.ca",
      <span>
        <strong>Ewan Dunbar</strong> is an Assistant Professor at University of
        Toronto and affiliated scientist in the Cognitive Machine Learning
        (CoML) team at the École Normale Supérieure. He received his PhD from
        the University of Maryland, College Park, in 2013. His research
        interests are in psycholinguistics, human speech perception, and
        language acquisition. He has done previous work in the area of
        unsupervised speech representation modelling, and has served on the
        organization committee of the Zero Resource Speech Challenge since 2017.
      </span>,
      "https://i.imgur.com/t5x6a2k.png",
      "https://ewan.website/",
    ],
    [
      "Emmanuel Dupoux",
      "EHESS/Facebook",
      "dpx@fb.com",
      <span>
        <strong>Emmanuel Dupoux</strong> is full professor at the Ecole des
        Hautes Etudes en Sciences Sociales (EHESS) and research scientist at
        Facebook AI Research. He directs the Cognitive Machine Learning (CoML)
        team at the École Normale Supérieure (ENS) in Paris and INRIA
        (www.syntheticlearner.com). His education includes a PhD in Cognitive
        Science (EHESS), a MA in Computer Science (Orsay University) and a BA in
        Applied Mathematics (Pierre & Marie Curie University, ENS). His research
        mixes developmental science, cognitive neuroscience, and machine
        learning, with a focus on the reverse engineering of infant language and
        cognitive development. He is an organizer of the Intuitive Physics
        Benchmark (2017), and led in 2017 a Jelinek Summer Workshop at CMU on
        multimodal speech learning. He has authored 150 articles in peer
        reviewed outlets from both cognitive science and language technology. He
        is the main initiator of the Zero Resource Speech Challenge series, and
        has served on the organization committee since 2015.
      </span>,
      "https://i.imgur.com/2NEDD8C.jpg",
      "http://www.lscp.net/persons/dupoux/",
    ],
  ];
  return (
    <div className={classes.section} style={{ textAlign: "left" }}>
      <h2 className={classes.title}>Organizers</h2>
      <div>
        <GridContainer>
          {infos.map((info) => (
            <Person
              classes={classes}
              imageClasses={imageClasses}
              name={info[0]}
              title={info[1]}
              email={info[2]}
              description={info[3]}
              imgurl={info[4]}
              page={info[5]}
            />
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
