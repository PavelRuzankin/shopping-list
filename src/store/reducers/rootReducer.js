import { combineReducers } from "redux";
import controlReducer from "./controlReducer";
import listsReducer from "./listsReducer";

export default combineReducers({
  controls: controlReducer,
  lists: listsReducer,
});
