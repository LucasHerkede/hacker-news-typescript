import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import { FilteredStoryState } from "./ducks/filteredStories/types";
import { StoryState } from "./ducks/stories/types";

export interface AppState {
  filteredStories: FilteredStoryState;
  stories: StoryState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;