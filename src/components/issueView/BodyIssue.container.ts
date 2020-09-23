import { connect } from "react-redux";
import { BodyIssue } from "./BodyIssue.cmp";
import { IIssuesState } from "../../store/actions/types";
import { IPropsBody } from "./types";

const mapStateToProps = (state: IIssuesState): IPropsBody => {
  return {
    issueSelected: state.currentIssue,
  };
};

export default connect(mapStateToProps)(BodyIssue);
