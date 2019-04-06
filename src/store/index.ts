import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface AppState {}

const sagaMiddleWare = createSagaMiddleware();

const store: Store<AppState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

export default store;