import { combineReducers } from "redux";
import categoriesSlice from "./categories/categoriesSlice";

const rootReducer = combineReducers({
  category: categoriesSlice,
});

export default rootReducer;
