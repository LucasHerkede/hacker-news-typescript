import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "./actions";

export function* loadTop(page?: number) {
  try {
    page = page ? page : 1;
    const response = yield call(api.get, `news?page=${page}`);
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
