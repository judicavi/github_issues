import { IIssues } from "../../store/actions/types";

/**
 * Interface used to define BodyCmp's props to show the issues content in issue view
 */
export interface IPropsBody {
  issueSelected?: IIssues;
}
