import { StoryState, StoriesTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: StoryState = {
  error: false,
  loading: false,
  data: undefined
};

const reducer: Reducer<StoryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case StoriesTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case StoriesTypes.lOAD_FAILURE:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;