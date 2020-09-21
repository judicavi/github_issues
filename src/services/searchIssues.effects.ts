import { from } from "rxjs";
import history from "../history";
import { distinctUntilChanged, filter } from "rxjs/operators";
import { StoreType } from "../store";
import * as ActionsSearchIssues from "../store/actions/searchIssues.actions";
import * as ActionsShowIssue from "../store/actions/showIssue.action";
import { searchIssue } from "./searchIssues.services";

export default function addSideEffect(store: StoreType) {
  listenToSearchIssue(store);
  listenToGoSearch(store);
  //listenToSelectIssue(store);
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
      const response = await searchIssue(state.newIssue);
      const arIssues = response.map((issue) => {
        const obIssue = {
          title: issue.title,
          number: issue.number,
        };

        return obIssue;
      });
      store.dispatch(ActionsSearchIssues.issuesFound(arIssues));
    });
}

export function listenToGoSearch(store: StoreType) {
  from(store)
    .pipe(
      distinctUntilChanged((prev, newVal) => prev.goSearch === newVal.goSearch),
      filter((state) => state.goSearch)
    )
    .subscribe(async (state) => {
      console.log("Redirigiendo al buscador");

      history.push({
        pathname: "/search_view",
      });

      store.dispatch(ActionsShowIssue.goSearchOk());
    });
}
/*export function listenToSelectIssue(store: StoreType) {
  from(store)
    .pipe(
      distinctUntilChanged(
        (prev, newVal) => prev.currentIssue === newVal.currentIssue
      ),
      filter((state) => {
        return state.currentIssue && state.currentIssue.number !== 0
          ? true
          : false;
      })
    )
    .subscribe(async (state) => {
      console.log("Redirigiendo");
      const path = state.currentIssue
        ? "/issues/" + state.currentIssue.number
        : "/search_view";

      history.push({
        pathname: path,
      });
    });*/
