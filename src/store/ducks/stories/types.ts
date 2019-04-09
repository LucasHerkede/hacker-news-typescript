import { Story } from "../../../models";

export enum StoriesTypes {
  LOAD_REQUEST = "@stories/LOAD_REQUEST",
  LOAD_SUCCESS = "@stories/LOAD_SUCCESS",
  lOAD_FAILURE = "@stories/lOAD_FAILURE"
}

export interface StoryState {
  readonly data?: Story;
  readonly loading: boolean;
  readonly error: boolean;
}
