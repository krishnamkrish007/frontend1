
import {combineReducers} from "redux";
import foo from "./modelReducer";

const RootReducer = combineReducers({
   models: foo,
});

export default RootReducer;