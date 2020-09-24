import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import { HeaderCmp } from "./Header.cmp";
import * as Actions from "../../store/actions/showIssue.action";
import { IIssuesState } from "../../store/actions/types";
import { IPropsHeader, IDispatchHeader } from "./types";

const mapStateToProps = (state: IIssuesState): IPropsHeader => {
  return {
    title: "Issue",
    issueId: state.currentIssue?.number,
    useBack: true,
  };
};

const matchDispatchToProps = (dispatch: Dispatch): IDispatchHeader => {
  return bindActionCreators(
    {
      onBackSearch: Actions.onBackSearch,
    },
    dispatch
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(HeaderCmp);
