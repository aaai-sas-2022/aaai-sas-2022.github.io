import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(time, activity, note, slides = null, video = null) {
  return { time, activity, note, slides, video };
}

function listofname(names) {
  return (
    <div style={{ width: 170, overflowX: "auto" }}>
      {names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}

function listoftitle(names) {
  return (
    <div style={{ width: 720, overflowX: "auto" }}>
      {names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}

const section1 = [
  createData(
    "8:50 - 9:00",
    "Opening",
    "Organizers",
    "",
    <a href="https://youtu.be/TaBksCBwtnc">[video]</a>
  ),
  createData(
    "9:00 - 9:50",
    "Keynote - Kristen Grauman",
    "40 mins presentation + 10 mins Q&A",
    "",
    <a href="https://youtu.be/dae2QnMsWJM">[video]</a>
  ),
  createData(
    "9:50 - 10:10",
    "Invited talk - Danqi Chen",
    "",
    <a
      href={require("assets/slides/keynote_talks/Danqi_Chen_aaai2022_talk.pdf")}
    >
      [slides]
    </a>,
    <a href="https://youtu.be/WJsOPVGw5HQ">[video]</a>
  ),
  createData(
    "10:10 - 10:30",
    "Invited talk - Herman Kamper",
    "",
    <a
      href={require("assets/slides/keynote_talks/Herman_Kamper_aaai2022_talk.pdf")}
    >
      [slides]
    </a>,
    <a href="https://youtu.be/SfJhPBo3kjg">[video]</a>
  ),
  createData(
    "10:30 - 10:50",
    "Invited talk - Jan Chorowski",
    "",
    <a
      href={require("assets/slides/keynote_talks/Jan_Chorowski_aaai2022_talk.pdf")}
    >
      [slides]
    </a>,
    <a href="https://youtu.be/0QgCcM3z2mo">[video]</a>
  ),
  createData(
    "10:50 - 11:00",
    "Q&A for Danqi Chen, Herman Kamper, and Jan Chorowski",
    "",
    "",
    <a href="https://youtu.be/qHc28G_9c9Q">[video]</a>
  ),
];

const section2 = [
  createData(
    "11:10 - 12:00",
    "Paper presentation - session 1",
    "Regular paper (10 mins for each speaker + 10 mins Q&A)",
    "",
    <a href="https://youtu.be/uWvizUPAh6U">[video]</a>
  ),
  createData(
    "12:00 - 12:50",
    "Paper presentation - session 2",
    "Regular paper (10 mins for each speaker + 10 mins Q&A)",
    "",
    <a href="https://youtu.be/a9spIgNeupM">[video]</a>
  ),
];
const section3 = [
  createData(
    "13:20 - 13:40",
    "Invited talk - Wei-Ning Hsu",
    "",
    <a
      href={require("assets/slides/keynote_talks/Weining_Hsu_aaai2022_talk.pdf")}
    >
      [slides]
    </a>,
    <a href="https://youtu.be/ykhI-Qp7ZGc">[video]</a>
  ),
  createData(
    "13:40 - 14:00",
    "Invited talk - Odette Scharenborg",
    "",
    <a href="https://youtu.be/yRuUHWFdims">[video]</a>
  ),
  createData(
    "14:00 - 14:20",
    "Invited talk - Alexei Baevski",
    "",
    <a href={require("assets/slides/keynote_talks/Alexei_aaai2022_talk.pdf")}>
      [slides]
    </a>,
    <a href="https://youtu.be/zWc_Lx-FnPc">[video]</a>
  ),
  createData(
    "14:20 - 14:30",
    "Q&A for Wei-Ning Hsu, Odette Scharenborg, and Alexei Baevski",
    "",
    "",
    <a href="https://youtu.be/fVNoypCJkm0">[video]</a>
  ),
  createData(
    "14:30 - 15:20",
    "Paper presentation - session 3",
    "Regular paper (10 mins for each speaker + 10 mins Q&A)",
    "",
    <a href="https://youtu.be/spneUyuG_aQ">[video]</a>
  ),
];
const section4 = [
  createData(
    "15:50 - 16:40",
    "Keynote - James Glass",
    "40 mins presentation + 10 mins Q&A ",
    <a href={require("assets/slides/keynote_talks/Jim_aaai2022_keynote.pdf")}>
      [slides]
    </a>,
    <a href="https://youtu.be/TBKM7YJZ8g0">[video]</a>
  ),
];
const section5 = [
  createData("17:10 - 17:30", "Invited talk - Yu Zhang", ""),
  createData(
    "17:30 - 17:50",
    "Invited talk - Sakriani Sakti",
    "",
    <a
      href={require("assets/slides/keynote_talks/Sakriani_Sakti_AAAI2022_talk.pdf")}
    >
      [slides]
    </a>,
    <a href="https://youtu.be/3cMozabIN7I">[video]</a>
  ),
  createData("17:50 - 18:00", "Q&A for Yu Zhang and Sakriani Sakti", ""),
  createData(
    "18:00 - 19:05",
    "Paper presentation (SUPERB)",
    "SUPERB intro and result (15 mins) + 4 papers (10 mins each) + 10 mins Q&A",
    "",
    <a href="https://youtu.be/bln898kRvSU">[video]</a>
  ),
  createData(
    "19:05 - 19:15",
    "Closing remarks",
    "Organizers",
    "",
    <a href="https://youtu.be/3s53w-MJO2o">[video]</a>
  ),
];
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Time (EST)</StyledTableCell>
            <StyledTableCell align="left">Activity</StyledTableCell>
            <StyledTableCell align="left">Note</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {section1.map((row) => (
            <StyledTableRow key={row.activity}>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">
                {row.activity} {row.slides} {row.video}
              </StyledTableCell>
              <StyledTableCell align="left">{row.note}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell colspan="3" align="center" className="table-break">
              10-min Break
            </StyledTableCell>
          </StyledTableRow>
          {section2.map((row) => (
            <StyledTableRow key={row.activity}>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">
                {row.activity} {row.slides} {row.video}
              </StyledTableCell>
              <StyledTableCell align="left">{row.note}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell colspan="3" align="center" className="table-break">
              30-min Break
            </StyledTableCell>
          </StyledTableRow>
          {section3.map((row) => (
            <StyledTableRow key={row.activity}>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">
                {" "}
                {row.activity} {row.slides} {row.video}
              </StyledTableCell>
              <StyledTableCell align="left">{row.note}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell colspan="3" align="center" className="table-break">
              30-min Break
            </StyledTableCell>
          </StyledTableRow>
          {section4.map((row) => (
            <StyledTableRow key={row.activity}>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">
                {" "}
                {row.activity} {row.slides} {row.video}
              </StyledTableCell>
              <StyledTableCell align="left">{row.note}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell colspan="3" align="center" className="table-break">
              30-min Break
            </StyledTableCell>
          </StyledTableRow>
          {section5.map((row) => (
            <StyledTableRow key={row.activity}>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">
                {" "}
                {row.activity} {row.slides} {row.video}
              </StyledTableCell>
              <StyledTableCell align="left">{row.note}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
