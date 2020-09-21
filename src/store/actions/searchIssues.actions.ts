import {
  SEARCH_NEW_ISSUE,
  ISSUES_FOUND,
  SELECT_ISSUE,
  ActionTypes,
  IIssues,
} from "./types";
import history from "../../history";

export function changeSearchIssue(newIssue: string): ActionTypes {
  if (newIssue.trim()) {
    return {
      type: SEARCH_NEW_ISSUE,
      payload: newIssue,
    };
  } else {
    return {
      type: ISSUES_FOUND,
      payload: [],
    };
  }
}

export function issuesFound(arIssues: IIssues[]): ActionTypes {
  return {
    type: ISSUES_FOUND,
    payload: arIssues,
  };
}

export function selectIssue(issueNumber: number): ActionTypes {
  history.push("/show_issue");

  return {
    type: SELECT_ISSUE,
    payload: issueNumber,
  };
}
