import React from "react";
import { IHeader } from "./types";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export const HeaderCmp = (props: IHeader) => {
  const onBackHandler = (event) => {
    console.log("click back");

    props.onBackSearch && props.onBackSearch();
  };

  return (
    <AppBar>
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
