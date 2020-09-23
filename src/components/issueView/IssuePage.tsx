import React from "react";
import HeaderCmp from "../shared/HeadesIssue.container";
import BodyIssueCmp from "./BodyIssue.container";
import CssBaseline from "@material-ui/core/CssBaseline";

export const IssuePage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderCmp />
      <BodyIssueCmp />
    </React.Fragment>
  );
};
