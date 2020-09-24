import React from "react";
import { IHeader } from "./types";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

export const HeaderCmp = (props: IHeader) => {
  const onBackHandler = (event) => {
    console.log("click back");

    props.onBackSearch && props.onBackSearch();
  };

  return (
    <AppBar className={"header-cmp"}>
      <Toolbar>
        {props.useBack ? (
          <IconButton
            edge="end"
            color="inherit"
            onClick={(event) => onBackHandler(event)}
          >
            <ArrowBackIos />
          </IconButton>
        ) : null}
        <Typography variant="h6" color="inherit">
          {props.title}
          {props.issueId ? ` #${props.issueId}` : null}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
