import { combineReducers } from "redux";
import todos from "./todos";
import requests from "./requests";

export default combineReducers({ todos, requests });
