import { CommentState, CommentsTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: CommentState = {
  error: false,
  loading: false,
  data: undefined
};

const reducer: Reducer<CommentState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentsTypes.LOAD_REQUEST:
      return { ...state, loading: true, data: undefined };
    case CommentsTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.data };
    case CommentsTypes.lOAD_FAILURE:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;