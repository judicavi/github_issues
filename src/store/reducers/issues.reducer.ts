import {
  SEARCH_NEW_ISSUE,
  ISSUES_FOUND,
  SELECT_ISSUE,
  BACK_SEARCH,
  BACK_SEARCH_FINICH,
  ActionTypes,
  IIssuesState,
} from "../actions/types";

export const defaultState: IIssuesState = {
  isSearching: false,
  goSearch: false,
  newIssue: "",
  currentIssue: undefined,
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
    case SELECT_ISSUE: {
      // Get the issue's information
      const currentIssue = state.issues.filter((issue) => {
        return issue.number === action.payload;
      });

      return {
        ...state,
        currentIssue: currentIssue[0],
      };
    }
    case BACK_SEARCH: {
      return {
        ...state,
        goSearch: true,
      };
    }
    case BACK_SEARCH_FINICH: {
      return {
        ...state,
        goSearch: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default issuesReducer;
