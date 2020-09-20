import searchIssuesEffects from "./searchIssues.effects";

export function addSideEffectsToStore(store) {
  const effects = [searchIssuesEffects];
  effects.forEach((effect) => effect(store));
}
