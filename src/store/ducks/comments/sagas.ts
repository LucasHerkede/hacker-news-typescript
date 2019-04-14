import { loadFailure, loadSuccess } from "./actions";
import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { AnyAction } from "redux";
import {Story } from '../../../models';

export function* loadStory({payload: { storyId }}: AnyAction) {
  try {
      const response = yield call(api.get, `item/${storyId}`);
      yield put(loadSuccess((response.data as Story).comments));
  } catch (error) {
    yield put(loadFailure());
  }
}
