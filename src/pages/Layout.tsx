import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import { IssuePage } from "./IssuePage";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
      <CssBaseline />
      <Switch>
        <Route exact path="/issues/:issueId" component={IssuePage} />
        <Route exact path="/search_view" component={SearchPage} />
        <Redirect to="/search_view" />
      </Switch>
      <AppBar className={classes.footer}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            footer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
