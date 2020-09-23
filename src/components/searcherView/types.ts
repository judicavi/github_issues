import { IIssues } from "../../store/actions/types";

/**
 * Interface used to define SearchCmp's props
 */
export interface IPropsSearchCmp {
  /**
   * Flag to indicate if the system is searching right now some issues
   */
  isSearching: boolean;
  /**
   * Array of issues to show in list of Search view
   */
  arIssues: IIssues[];
}
/**
 * Interface used to define SearchCmp's component actions
 */
export interface IDispatchSearchCmp {
  /**
   * Action used when the user typing in search field and is necesary start to
   * search some issue
   */
  onChangeSearch: (...args) => void;
  /**
   * Action used when the user select some issue in result list. Change to Issue view
   */
  onSelectIssue: (...args) => void;
}

export type ISearchCmp = IPropsSearchCmp & IDispatchSearchCmp;
