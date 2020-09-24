import * as actions from "../../../store/actions/searchIssues.actions";
import {
  SEARCH_NEW_ISSUE,
  ISSUES_FOUND,
  SELECT_ISSUE,
} from "../../../store/actions/types";
import { normalIssue } from "../../common";

describe("Actions search Issues test", () => {
  test("Action changeSearchIssue when search text is empty", () => {
    const actionResult = {
      type: ISSUES_FOUND,
      payload: [],
    };

    expect(actions.changeSearchIssue(" ")).toEqual(actionResult);
  });

  test("Action changeSearchIssue when search has value", () => {
    const searchText = "Issue";
    const actionResult = {
      type: SEARCH_NEW_ISSUE,
      payload: searchText,
    };

    expect(actions.changeSearchIssue(searchText)).toEqual(actionResult);
  });

  test("Action issuesFound test", () => {
    const arIssue = [normalIssue];
    const actionResult = {
      type: ISSUES_FOUND,
      payload: arIssue,
    };

    expect(actions.issuesFound(arIssue)).toEqual(actionResult);
  });

  test("Action selectIssue test", () => {
    const numberIssue = 123;
    const actionResult = {
      type: SELECT_ISSUE,
      payload: numberIssue,
    };

    expect(actions.selectIssue(numberIssue)).toEqual(actionResult);
  });
});
