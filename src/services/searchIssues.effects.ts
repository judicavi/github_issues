import { from } from "rxjs";
import { distinctUntilChanged, filter } from "rxjs/operators";
import { StoreType } from "../store";
import * as ActionsSearchIssues from "../store/actions/searchIssues.actions";
import { searchIssue } from "./searchIssues.services";

export default function addSideEffect(store: StoreType) {
  listenToSearchIssue(store);
}

export function listenToSearchIssue(store: StoreType) {
  from(store)
    .pipe(
      distinctUntilChanged(
        (prev, newVal) => prev.isSearching === newVal.isSearching
      ),
      filter((state) => state.isSearching)
    )
    .subscribe(async (state) => {
      console.log("Llego hasta el sideEffect");
      const response = await searchIssue(state.newIssue);
      const arIssues = response.map((issue) => {
        const obIssue = {
          title: issue.title,
        };

        return obIssue;
      });
      store.dispatch(ActionsSearchIssues.issuesFound(arIssues));
    });
}
