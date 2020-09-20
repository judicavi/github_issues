import React from "react";
import { ISearchCmp } from "./types";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
  },
  searcher: {
    width: "50%",
  },
}));

export const SearcherIssuesCmp = (props: ISearchCmp) => {
  const classes = useStyles();

  let nuTimeOut: any = null;

  const onHandleChange = (event) => {
    clearTimeout(nuTimeOut);
    let newIssue = event.target.value;

    //wait a few seconds to start the search.
    //That way it won't search with any changes to the text, only when the user finishes typing
    nuTimeOut = setTimeout(() => {
      props.onChangeSearch(newIssue);
    }, 2000);
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <TextField
          id="outlined-basic"
          label="Search issues"
          variant="outlined"
          className={classes.searcher}
          onChange={onHandleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {props.isSearching ? <div>Cargando...</div> : null}
      </div>
    </React.Fragment>
  );
};
