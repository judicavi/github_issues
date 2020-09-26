import reducer from "../../../store/reducers/issues.reducer";
import {
  SEARCH_NEW_ISSUE,
  ISSUES_FOUND,
  SELECT_ISSUE,
  BACK_SEARCH,
  BACK_SEARCH_FINISH,
} from "../../../store/actions/types";
import { normalIssue } from "../../common";
import { defaultState } from "../../../store/reducers/issues.reducer";

describe("Reducer test", () => {
  test("Should handle SEARCH_NEW_ISSUE", () => {
    expect(
      reducer(undefined, {
        type: SEARCH_NEW_ISSUE,
        payload: "Issue text",
      })
    ).toMatchObject({
      newIssue: "Issue text",
      isSearching: true,
    });
  });

  test("Should handle ISSUES_FOUND", () => {
    expect(
      reducer(undefined, {
        type: ISSUES_FOUND,
        payload: [normalIssue],
      })
    ).toMatchObject({
      issues: [normalIssue],
    });
  });

  test("Should handle SELECT_ISSUE", () => {
    const initialState = defaultState;

    initialState.issues = [normalIssue];

    expect(
      reducer(initialState, {
        type: SELECT_ISSUE,
        payload: normalIssue.number,
      })
    ).toMatchObject({
      currentIssue: normalIssue,
    });
  });

  test("Should handle BACK_SEARCH", () => {
    expect(
      reducer(undefined, {
        type: BACK_SEARCH,
      })
    ).toMatchObject({
      goSearch: true,
    });
  });

  test("Should handle BACK_SEARCH_FINISH", () => {
    expect(
      reducer(undefined, {
        type: BACK_SEARCH_FINISH,
      })
    ).toMatchObject({
      goSearch: false,
    });
  });
});
