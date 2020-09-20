import {
  SEARCH_NEW_ISSUE,
  ISSUES_FOUND,
  ActionTypes,
  IIssuesState,
} from "../actions/types";

export const defaultState: IIssuesState = {
  isSearching: false,
  newIssue: "",
  issues: [],
};

export const issuesReducer = (
  state: IIssuesState = defaultState,
  action: ActionTypes
) => {
  switch (action.type) {
    case SEARCH_NEW_ISSUE: {
      return {
        ...state,
        newIssue: action.payload,
        isSearching: true,
      };
    }
    case ISSUES_FOUND: {
      return {
        ...state,
        isSearching: false,
        issues: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default issuesReducer;
