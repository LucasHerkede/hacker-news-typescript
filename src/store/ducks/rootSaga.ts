
import { all, takeLatest } from 'redux-saga/effects';
import { FilteredStoriesTypes } from './filteredStories/types';
import { loadTop } from './filteredStories/sagas';
import { CommentsTypes } from './comments/types';
import { loadStory } from './comments/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(FilteredStoriesTypes.LOAD_REQUEST, loadTop),
        takeLatest(CommentsTypes.LOAD_REQUEST, loadStory)
    ]);
}