import { IIssues } from "../store/actions/types";

export interface IPropsHeader {
  title: string;
  issueId?: number;
  useBack?: boolean;
}

export interface IDispatchHeader {
  onBackSearch?: (...args) => void;
}

export interface IPropsSearchCmp {
  isSearching: boolean;
  arIssues: IIssues[];
}

export interface IDispatchSearchCmp {
  onChangeSearch: (...args) => void;
  onSelectIssue: (...args) => void;
}

export interface IPropsBody {
  issueSelected: IIssues;
}

export type ISearchCmp = IPropsSearchCmp & IDispatchSearchCmp;

export type IHeader = IPropsHeader & IDispatchHeader;
