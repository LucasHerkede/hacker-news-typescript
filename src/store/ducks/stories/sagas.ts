import { loadFailure, loadSuccess } from "./actions";
import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { AnyAction } from "redux";

export function* loadStory({payload: { storyId }}: AnyAction) {
  try {
      const response = yield call(api.get, `item=${storyId.toString()}`);
      yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
