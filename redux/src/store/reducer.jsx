import { combineReducers } from "redux";
import ticketReducer from "../components/duck/reducer";
const rootReducer = combineReducers({
  ticketReducer,
});
export { rootReducer };
