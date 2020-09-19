import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { findByLabelText } from "@testing-library/react";

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
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Header search page
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.conteiner}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className={classes.searcher}
        />
      </Container>
    </React.Fragment>
  );
};
