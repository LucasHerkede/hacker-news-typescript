import { combineReducers } from "redux";
import filteredStories from "./filteredStories";
import stories from './stories';
export default combineReducers({
  filteredStories,
  stories
});
