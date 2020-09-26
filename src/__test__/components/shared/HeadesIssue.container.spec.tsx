import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { defaultState } from "../../../store/reducers/issues.reducer";
import { NewStore } from "../../../store";
import { normalIssue } from "../../common";
import issuesReducer from "../../../store/reducers/issues.reducer";
import HeaderCmp from "../../../components/shared/HeadesIssue.container";

configure({ adapter: new Adapter() });

describe("Header component test", () => {
  test("Should render Header component", () => {
    const initialState = defaultState;
    initialState.issues = [normalIssue];

    const store = NewStore(issuesReducer, initialState);

    const comp = mount(
      <Provider store={store}>
        <HeaderCmp />
      </Provider>
    );

    // Find cmp header
    expect(comp.find(".header-cmp").length).toBeGreaterThanOrEqual(1);
  });
});
