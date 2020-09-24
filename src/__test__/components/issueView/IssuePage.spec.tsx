import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { defaultState } from "../../../store/reducers/issues.reducer";
import { NewStore } from "../../../store";
import { normalIssue } from "../../common";
import issuesReducer from "../../../store/reducers/issues.reducer";
import { IssuePage } from "../../../components/issueView/IssuePage";

configure({ adapter: new Adapter() });

describe("Issue page test", () => {
  test("Should render principal issue page", () => {
    let initialState = defaultState;
    initialState.currentIssue = normalIssue;

    const store = NewStore(issuesReducer, initialState);

    const comp = mount(
      <Provider store={store}>
        <IssuePage />
      </Provider>
    );

    // Find cmp header
    expect(comp.find(".header-cmp").length).toBeGreaterThanOrEqual(1);
    // Find cmp body
    expect(comp.find(".body-cmp").length).toBeGreaterThanOrEqual(1);
  });
});
