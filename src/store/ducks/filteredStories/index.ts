import { FilteredStoriesTypes, FilteredStoryState } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: FilteredStoryState = {
  data: [],
  page: 0,
  loading: false,
  error: false
};

const reducer: Reducer<FilteredStoryState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case FilteredStoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true, page: action.payload.page };
    case FilteredStoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case FilteredStoriesTypes.lOAD_FAILURE:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;
