import { combineReducers } from "redux";
import filteredStories from "./filteredStories";
import comments from './comments';
export default combineReducers({
  filteredStories,
  comments
});
