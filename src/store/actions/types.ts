export const SEARCH_NEW_ISSUE = "SEARCH_NEW_ISSUE";
export const ISSUES_FOUND = "ISSUES_FOUND";
export const SELECT_ISSUE = "SELECT_ISSUE";
export const BACK_SEARCH = "BACK_SEARCH";
export const BACK_SEARCH_FINISH = "BACK_SEARCH_FINISH";

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

interface BackSearchAction {
  type: typeof BACK_SEARCH;
}

interface BackSearchOKAction {
  type: typeof BACK_SEARCH_FINISH;
}

export type ActionTypes =
  | SearchIssueAction
  | IssuesFoundAction
  | SelectIssueAction
  | BackSearchAction
  | BackSearchOKAction;

/**
 * Interface to define the properties to one Issue
 */
export interface IIssues {
  /**
   * Title issue
   */
  title: string;
  /**
   * Issue identificator
   */
  number: number;
  /**
   * Issue main text
   */
  body?: string;
  /**
   * Current issue state
   */
  state?: string;
  /**
   * Opening date of the Issue
   */
  created_at?: string;
  /**
   * Who open the issue
   */
  user?: IUserGit;
  /**
   * Labels to group the issue
   */
  labels?: ILabelGit[];
}

/**
 * Interface to define information of owner issue
 */
export interface IUserGit {
  /**
   * URL of picture user
   */
  avatar_url: string;
  /**
   * User nick name
   */
  login: string;
}

/**
 * Interface to define information about one label of issue
 */
export interface ILabelGit {
  /**
   * Hexa color of issue
   */
  color: string;
  /**
   * Label description
   */
  name: string;
}

/**
 * Define element of Main state
 */
export interface IIssuesState {
  /**
   * Flag to indicate if system is searching issues
   */
  isSearching: boolean;
  /**
   * New issue to search
   */
  newIssue: string;
  /**
   * Flag to indicate if is necesary go to search view
   */
  goSearch: boolean;
  /**
   * Current Issue selected to show in show issue view
   */
  currentIssue?: IIssues;
  /**
   * Issues array to list in search view
   */
  issues: IIssues[];
}
