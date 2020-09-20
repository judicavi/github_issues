import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import { SearcherIssuesCmp } from "./SearcherIssues.cmp";
import * as Actions from "../store/actions/searchIssues.actions";
import { IIssuesState } from "../store/actions/types";
import { IPropsSearchCmp, IDispatchSearchCmp } from "./types";

const mapStateToProps = (state: IIssuesState): IPropsSearchCmp => {
  return {
    isSearching: state.isSearching,
  };
};

const matchDispatchToProps = (dispatch: Dispatch): IDispatchSearchCmp => {
  return bindActionCreators(
    {
      onChangeSearch: Actions.changeSearchIssue,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SearcherIssuesCmp);
