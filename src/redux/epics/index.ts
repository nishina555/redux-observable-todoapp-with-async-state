import { combineEpics } from "redux-observable";
import { getTodosEpic } from "./todoEpics";

export default combineEpics(getTodosEpic);
