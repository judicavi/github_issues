export const CHANGE_SEARCH = "CHANGE_SEARCH";

interface ChangeSearchAction {
  type: typeof CHANGE_SEARCH;
  payload: string;
}

export type ActionTypes = ChangeSearchAction;

export interface IIssues {
  title: string;
}
