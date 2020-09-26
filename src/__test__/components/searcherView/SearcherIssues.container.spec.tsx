import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { defaultState } from "../../../store/reducers/issues.reducer";
import { NewStore } from "../../../store";
import { normalIssue } from "../../common";
import issuesReducer from "../../../store/reducers/issues.reducer";
import SearcherIssues from "../../../components/searcherView/SearcherIssues.container";

configure({ adapter: new Adapter() });

describe("Searcher issues component test", () => {
  test("Should render SearcherIssues component and list one issue", () => {
    const initialState = defaultState;
    initialState.issues = [normalIssue];

    const store = NewStore(issuesReducer, initialState);

    const comp = mount(
      <Provider store={store}>
        <SearcherIssues />
      </Provider>
    );

    // Find btn search in SearcherIssues.component
    expect(comp.find(".btn-search").length).toBeGreaterThanOrEqual(1);

    // One element in issues list
    expect(comp.find(".MuiListItem-button").length).toBeGreaterThanOrEqual(1);
  });

  test("Select one issue in result list", () => {
    const initialState = defaultState;
    initialState.issues = [normalIssue];

    const store = NewStore(issuesReducer, initialState);

    const comp = mount(
      <Provider store={store}>
        <SearcherIssues />
      </Provider>
    );

    comp.find(".list-item").first().simulate("click");

    // After select one element, in the state there will be same
    expect(store.getState().currentIssue).toEqual(normalIssue);
  });
});
