import React from "react";
import HeaderCmp from "../components/HeadesIssue.container";
import BodyIssueCmp from "../components/BodyIssue.container";
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
