/**
 * Interface used to define header's props component
 */
export interface IPropsHeader {
  /**
   * Text main of header
   */
  title?: string;
  /**
   * Optional number to concat in title header
   */
  issueId?: number;
  /**
   * Flag to show the back btn
   */
  useBack?: boolean;
}

/**
 * Interface used to define header's component actions
 */
export interface IDispatchHeader {
  /**
   * Action to return to search view
   */
  onBackSearch?: (...args) => void;
}

export type IHeader = IPropsHeader & IDispatchHeader;
