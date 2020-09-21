import { connect } from "react-redux";
import { BodyIssue } from "./BodyIssue.cmp";
import { IIssuesState } from "../store/actions/types";
import { IPropsBody } from "./types";

const mapStateToProps = (state: IIssuesState): IPropsBody => {
  return {
    issueSelected: {
      title: "Titulo del isue",
      number: 123456,
    },
  };
};

export default connect(mapStateToProps)(BodyIssue);
