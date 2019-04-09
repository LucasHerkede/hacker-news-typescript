
import { all, takeLatest } from 'redux-saga/effects';
import { FilteredStoriesTypes } from './filteredStories/types';
import { loadTop } from './filteredStories/sagas';
import { StoriesTypes } from './stories/types';
import { loadStory } from './stories/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(FilteredStoriesTypes.LOAD_REQUEST, loadTop),
        takeLatest(StoriesTypes.LOAD_REQUEST, loadStory)
    ]);
}