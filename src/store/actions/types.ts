export const SEARCH_NEW_ISSUE = "SEARCH_NEW_ISSUE";
export const ISSUES_FOUND = "ISSUES_FOUND";
export const SELECT_ISSUE = "SELECT_ISSUE";
export const BACK_SEARCH = "BACK_SEARCH";

interface SearchIssueAction {
  type: typeof SEARCH_NEW_ISSUE;
  payload: string;
}

interface IssuesFoundAction {
  type: typeof ISSUES_FOUND;
  payload: IIssues[];
}

interface SelectIssueAction {
  type: typeof SELECT_ISSUE;
  payload: number;
}

export type ActionTypes =
  | SearchIssueAction
  | IssuesFoundAction
  | SelectIssueAction;

export interface IIssues {
  title: string;
  number: number;
}

export interface IIssuesState {
  isSearching: boolean;
  newIssue: string;
  currentIssue?: IIssues;
  issues: IIssues[];
}
