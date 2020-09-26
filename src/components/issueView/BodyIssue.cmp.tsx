import React from "react";
import { Redirect } from "react-router-dom";
import { IPropsBody } from "./types";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  avatar: {
    borderRadius: "50%",
    height: 40,
    width: "auto",
    margin: 10,
  },
  container: {
    paddingBottom: 65,
    paddingTop: 80,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    flex: 1,
  },
  topCont: {
    flexGrow: 1,
    display: "flex",
  },
  label: {
    borderRadius: "10px",
    width: "fit-content",
    padding: "0 10px",
    margin: 5,
  },
  labelCont: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  avatarCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
  },
}));

export const BodyIssue = (props: IPropsBody) => {
  const classes = useStyles();
  const issueInfo = props.issueSelected;

  if (!issueInfo) {
    return <Redirect to={"/"} />;
  }

  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.container}>
        <Grid container={true} spacing={2} className={"body-cmp"}>
          <Typography variant="h6" color="inherit" className={classes.title}>
            {issueInfo.title}
          </Typography>
          <Grid item={true} className={classes.topCont}>
            <Paper className={classes.paper} style={{ marginRight: "16px" }}>
              <div>State: {issueInfo.state}</div>
              <div>
                Created on: {moment(issueInfo.created_at).format("MMM Do YY")}
              </div>
              <div>
                Opened by
                <div className={classes.avatarCont}>
                  <img
                    src={issueInfo.user?.avatar_url}
                    alt=""
                    className={classes.avatar}
                  />
                  <div>{issueInfo.user?.login}</div>
                </div>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Labels
              </span>
              <div className={classes.labelCont}>
                {issueInfo.labels && issueInfo.labels.length > 0
                  ? issueInfo.labels.map((label, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            backgroundColor: `#${label.color}`,
                          }}
                          className={classes.label}
                        >
                          {label.name}
                        </div>
                      );
                    })
                  : "None yet"}
              </div>
            </Paper>
          </Grid>
          <Grid item={true}>
            <Paper className={classes.paper}>
              <div>{issueInfo.body}</div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
