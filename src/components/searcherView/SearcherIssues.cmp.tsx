import React, { useState } from "react";
import { ISearchCmp } from "./types";
import {
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
  },
  listCont: {
    width: "100%",
  },
}));

export const SearcherIssuesCmp = (props: ISearchCmp) => {
  const classes = useStyles();
  const [issueSelected, setIssueSelected] = useState(0);

  let nuTimeOut: any = null;

  const onHandleChange = (event) => {
    clearTimeout(nuTimeOut);
    let newIssue = event.target.value;

    //wait a few seconds to start the search.
    //That way it won't search with any changes to the text, only when the user finishes typing
    nuTimeOut = setTimeout(() => {
      props.onChangeSearch(newIssue);
    }, 1000);
  };

  const onHandleSelect = (event, issueNumber) => {
    setIssueSelected(issueNumber);

    props.onSelectIssue(issueNumber);
  };

  return (
    <React.Fragment>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Search issues"
            variant="outlined"
            onChange={onHandleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton className={"btn-search"}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {props.arIssues.length && props.arIssues.length > 0 ? (
          <Grid item className={classes.listCont}>
            <Paper>
              <List component="nav" aria-label="contacts">
                {props.arIssues.map((issueInfo) => {
                  return (
                    <ListItem
                      button
                      key={issueInfo.number}
                      selected={issueSelected === issueInfo.number}
                      className={"list-item"}
                      onClick={(event) =>
                        onHandleSelect(event, issueInfo.number)
                      }
                    >
                      <ListItemText primary={issueInfo.title} />
                    </ListItem>
                  );
                })}
              </List>
            </Paper>
          </Grid>
        ) : null}
        {props.isSearching ? <div>Loading...</div> : null}
      </Grid>
    </React.Fragment>
  );
};
