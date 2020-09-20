import { SEARCH_NEW_ISSUE, ISSUES_FOUND, ActionTypes, IIssues } from "./types";

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
  console.log("found");
  console.log(arIssues);
  return {
    type: ISSUES_FOUND,
    payload: arIssues,
  };
}
