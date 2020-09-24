import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { defaultState } from "../../../store/reducers/issues.reducer";
import { NewStore } from "../../../store";
import { normalIssue } from "../../common";
import issuesReducer from "../../../store/reducers/issues.reducer";
import BodyIssueCmp from "../../../components/issueView/BodyIssue.container";

configure({ adapter: new Adapter() });

describe("Body issues component test", () => {
  test("Should render BodyIssue component", () => {
    let initialState = defaultState;
    initialState.currentIssue = normalIssue;

    const store = NewStore(issuesReducer, initialState);

    const comp = mount(
      <Provider store={store}>
        <BodyIssueCmp />
      </Provider>
    );

    // Find the title element
    expect(comp.find("h6")).toHaveLength(1);
  });
});
