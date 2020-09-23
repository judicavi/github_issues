import React from "react";
import SearcherIssuesCmp from "../components/SearcherIssues.container";
import { HeaderCmp } from "../components/Header.cmp";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  conteiner: {
    paddingBottom: 65,
    paddingTop: 80,
    display: "flex",
    justifyContent: "center",
  },
  searcher: {
    width: "50%",
  },
}));

export const SearchPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderCmp title="Searcher view" />
      <Container maxWidth="md" className={classes.conteiner}>
        <SearcherIssuesCmp />
      </Container>
    </React.Fragment>
  );
};
