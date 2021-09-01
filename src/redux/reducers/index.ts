import { combineReducers } from "redux";
import todos from "./todos";
import requests from "./requests";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({ todos, requests, visibilityFilter });
