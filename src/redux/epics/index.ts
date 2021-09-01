import { combineEpics } from "redux-observable";
import todoEpic from "./todoEpics";

export default combineEpics(todoEpic);
