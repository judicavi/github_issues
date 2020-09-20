export interface IHeader {
  title: string;
  issueId?: number;
  useBack?: boolean;
}

export interface IPropsSearchCmp {
  isSearching: boolean;
}

export interface IDispatchSearchCmp {
  onChangeSearch: (...args) => void;
}

export type ISearchCmp = IPropsSearchCmp & IDispatchSearchCmp;
