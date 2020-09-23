import searchIssuesEffects from "../components/searcherView/searchIssues.effects";

export function addSideEffectsToStore(store) {
  const effects = [searchIssuesEffects];
  effects.forEach((effect) => effect(store));
}
