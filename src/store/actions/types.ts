export const SEARCH_NEW_ISSUE = "SEARCH_NEW_ISSUE";
export const ISSUES_FOUND = "ISSUES_FOUND";

interface SearchIssueAction {
  type: typeof SEARCH_NEW_ISSUE;
  payload: string;
}

interface IssuesFoundAction {
  type: typeof ISSUES_FOUND;
  payload: IIssues[];
}

export type ActionTypes = SearchIssueAction | IssuesFoundAction;

export interface IIssues {
  title: string;
}

export interface IIssuesState {
  isSearching: boolean;
  newIssue: string;
  issues: IIssues[];
}
