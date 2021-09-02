import { GetTodosType, PostTodoType, ToggleTodoType } from "../actionTypes";
import { combineReducers } from "redux";
import { REQUEST_STATUS } from "../../constants";
import {
  GetTodosActions,
  PostTodoActions,
  ToggleTodoActions,
} from "../actions";
import { RequestState } from "../types";

const initialState: RequestState = { status: REQUEST_STATUS.NONE };

const getTodos = (
  state = initialState,
  action: GetTodosActions
): RequestState => {
  switch (action.type) {
    case GetTodosType.GET_TODOS_REQUEST:
      return { status: REQUEST_STATUS.REQUEST };
    case GetTodosType.GET_TODOS_SUCCESS:
      return { status: REQUEST_STATUS.SUCCESS };
    case GetTodosType.GET_TODOS_FAILURE:
      return { status: REQUEST_STATUS.FAILURE };
    default:
      return state;
  }
};

const postTodo = (
  state = initialState,
  action: PostTodoActions
): RequestState => {
  switch (action.type) {
    case PostTodoType.POST_TODO_REQUEST:
      return { status: REQUEST_STATUS.REQUEST };
    case PostTodoType.POST_TODO_SUCCESS:
      return { status: REQUEST_STATUS.SUCCESS };
    case PostTodoType.POST_TODO_FAILURE:
      return { status: REQUEST_STATUS.FAILURE };
    default:
      return state;
  }
};

const toggleTodo = (
  state = initialState,
  action: ToggleTodoActions
): RequestState => {
  switch (action.type) {
    case ToggleTodoType.TOGGLE_TODO_REQUEST:
      return { status: REQUEST_STATUS.REQUEST };
    case ToggleTodoType.TOGGLE_TODO_SUCCESS:
      return { status: REQUEST_STATUS.SUCCESS };
    case ToggleTodoType.TOGGLE_TODO_FAILURE:
      return { status: REQUEST_STATUS.FAILURE };
    default:
      return state;
  }
};

export default combineReducers({
  getTodos,
  postTodo,
  toggleTodo,
});
