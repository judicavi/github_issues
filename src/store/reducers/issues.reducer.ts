import { CHANGE_SEARCH, ActionTypes, IIssues } from "../actions/types";

export const defaultState: IIssues = {
  title: "Hola mundo",
};

export const issuesReducer = (
  state: IIssues = defaultState,
  action: ActionTypes
) => {
  switch (action.type) {
    case CHANGE_SEARCH: {
      return {
        ...state,
        title: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default issuesReducer;
