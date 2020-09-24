import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "../../history";
import { SearchPage } from "../searcherView/SearchPage";
import { IssuePage } from "../issueView/IssuePage";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  footer: {
    top: "auto",
    bottom: 0,
  },
}));

export const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router history={history}>
        <CssBaseline />
        <Switch>
          <Route exact path="/search_view" component={SearchPage} />
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/show_issue" component={IssuePage} />
          <Route exact path="*" component={SearchPage} />
        </Switch>
        <AppBar className={classes.footer}>
          <Toolbar>
            <Typography color="inherit">
              Written by{" "}
              <Link
                href="https://www.linkedin.com/in/judicavi/"
                color="inherit"
              >
                Juan Diego Castaño Villada
              </Link>{" "}
              A.K.A{" "}
              <Link href="https://github.com/judicavi" color="inherit">
                @judicavi
              </Link>
              .
            </Typography>
          </Toolbar>
        </AppBar>
      </Router>
    </div>
  );
};
