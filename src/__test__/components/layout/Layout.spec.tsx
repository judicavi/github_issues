import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { defaultState } from "../../../store/reducers/issues.reducer";
import { NewStore } from "../../../store";
import issuesReducer from "../../../store/reducers/issues.reducer";
import { Layout } from "../../../components/layout/Layout";
import history from "../../../history";
import { normalIssue } from "../../common";

import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("Layout page test", () => {
  test("Should render searcher view page", () => {
    const initialState = defaultState;

    const store = NewStore(issuesReducer, initialState);

    const comp = mount(
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    // Find btn search in SearcherIssues.component
    expect(comp.find(".btn-search").length).toBeGreaterThanOrEqual(1);
    expect(comp.find(".body-cmp").length).toBe(0);
  });

  test("Should render issue view page", () => {
    const initialState = defaultState;
    initialState.currentIssue = normalIssue;

    const store = NewStore(issuesReducer, initialState);

    history.push("/show_issue");

    const comp = mount(
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    // Find cmp body in issue page
    expect(comp.find(".body-cmp").length).toBeGreaterThanOrEqual(1);
    expect(comp.find(".btn-search").length).toBe(0);
  });
});
