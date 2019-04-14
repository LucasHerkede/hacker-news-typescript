import { Comment } from "../../../models";

export enum CommentsTypes {
  LOAD_REQUEST = "@stories/LOAD_REQUEST",
  LOAD_SUCCESS = "@stories/LOAD_SUCCESS",
  lOAD_FAILURE = "@stories/lOAD_FAILURE"
}

export interface CommentState {
  readonly data?: Comment[];
  readonly loading: boolean;
  readonly error: boolean;
}
