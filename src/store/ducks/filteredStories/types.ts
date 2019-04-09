import { Story } from "../../../models";

export enum FilteredStoriesTypes {
  LOAD_REQUEST = "@filteredStories/LOAD_REQUEST",
  LOAD_SUCCESS = "@filteredStories/LOAD_SUCCESS",
  lOAD_FAILURE = "@filteredStories/lOAD_FAILURE"
}

export interface FilteredStoryState {
  readonly data: Story[];
  readonly page: number;
  readonly loading: boolean;
  readonly error: boolean;
}
