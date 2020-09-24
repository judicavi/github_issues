import * as actions from "../../../store/actions/showIssue.action";
import { BACK_SEARCH, BACK_SEARCH_FINISH } from "../../../store/actions/types";

describe("Actions show issues test", () => {
  test("Action onBackSearch test", () => {
    const actionResult = {
      type: BACK_SEARCH,
    };

    expect(actions.onBackSearch()).toEqual(actionResult);
  });

  test("Action goSearchOk test", () => {
    const actionResult = {
      type: BACK_SEARCH_FINISH,
    };

    expect(actions.goSearchOk()).toEqual(actionResult);
  });
});
