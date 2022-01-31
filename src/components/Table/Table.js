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

function createData(time, activity, title) {
  return { time, activity, title };
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
  createData("8:50 - 9:00", "Opening", "Organizers"),
  createData("9:00 - 9:50", "Keynote 1", "40 mins presentation + 10 mins Q&A"),
  createData(
    "9:50 - 11:00",
    "Invited talks 1 & 2 & 3",
    "20 mins presentations for each speaker + 10 mins Q&A"
  ),
];

const section2 = [
  createData(
    "11:10 - 12:00",
    "Paper presentation - session 1",
    "Regular paper (10 mins for each speaker + 10 mins Q&A)"
  ),
  createData(
    "12:00 - 12:50",
    "Paper presentation - session 2",
    "Regular paper (10 mins for each speaker + 10 mins Q&A)"
  ),
];
const section3 = [
  createData(
    "13:20 - 14:30",
    "Invited talk 4 & 5 & 6",
    "20 mins presentations for each speaker + 10 mins Q&A"
  ),
  createData(
    "14:30 - 15:20",
    "Paper presentation - session 3",
    "Regular paper (10 mins for each speaker + 10 mins Q&A)"
  ),
];
const section4 = [
  createData(
    "15:50 - 16:40",
    "Keynote 2",
    "40 mins presentation + 10 mins Q&A "
  ),
];
const section5 = [
  createData(
    "17:10 - 18:00",
    "Invited talks 7 & 8",
    "20 mins presentations for each speaker + 10 mins Q&A"
  ),
  createData(
    "18:00 - 19:00",
    "Paper presentation (SUPERB)",
    "3 papers + wavLM + result presentation (10 mins each) + 10 mins Q&A"
  ),
  createData("19:00 - 19:10", "Closing remarks", "Organizers"),
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
            <StyledTableCell align="left">
              Presenters / Presentation title / Note
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {section1.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">{row.activity}</StyledTableCell>
              <StyledTableCell align="left">{row.title}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell colspan="3" align="center">
              10-min Break
            </StyledTableCell>
          </StyledTableRow>
          {section2.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">{row.activity}</StyledTableCell>
              <StyledTableCell align="left">{row.title}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell colspan="3" align="center">
              30-min Break
            </StyledTableCell>
          </StyledTableRow>
          {section3.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">{row.activity}</StyledTableCell>
              <StyledTableCell align="left">{row.title}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell colspan="3" align="center">
              30-min Break
            </StyledTableCell>
          </StyledTableRow>
          {section4.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">{row.activity}</StyledTableCell>
              <StyledTableCell align="left">{row.title}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell colspan="3" align="center">
              30-min Break
            </StyledTableCell>
          </StyledTableRow>
          {section5.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">{row.activity}</StyledTableCell>
              <StyledTableCell align="left">{row.title}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
