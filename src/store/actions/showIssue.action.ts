import { BACK_SEARCH, BACK_SEARCH_FINISH, ActionTypes } from "./types";

export function onBackSearch(): ActionTypes {
  return {
    type: BACK_SEARCH,
  };
}

export function goSearchOk(): ActionTypes {
  return {
    type: BACK_SEARCH_FINISH,
  };
}
