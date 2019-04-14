import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "./actions";
import { AnyAction } from "redux";

export function* loadTop({payload: { page }}: AnyAction) {
  try {
    page = page ? page : 1;
    const response = yield call(api.get, `news?page=${page}`);
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
