import { SEARCH_NEW_ISSUE, ISSUES_FOUND, ActionTypes } from "./types";

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

export function issuesFound(): ActionTypes {
  return {
    type: ISSUES_FOUND,
    payload: [
      {
        title: "Titulo de prueba",
      },
    ],
  };
}
