// reducers/index.js
import { combineReducers } from "redux";
import enrollmentReducer from "./enrollmentReducer";

const rootReducer = combineReducers({
  enrollment: enrollmentReducer,
});

export default rootReducer;
