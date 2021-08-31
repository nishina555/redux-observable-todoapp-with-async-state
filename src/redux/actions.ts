import { TodoActionTypes, GetTodosType } from "./actionTypes";
import { TodoItem } from "./types";

type SetTodosAction = {
  type: TodoActionTypes.SET_TODOS;
  payload: { todos: TodoItem[] };
};

export const setTodos = (todos: TodoItem[]): SetTodosAction => ({
  type: TodoActionTypes.SET_TODOS,
  payload: { todos },
});

export type TodoActions = SetTodosAction;

type GetTodosRequestAction = {
  type: GetTodosType.GET_TODOS_REQUEST;
};
export const getTodosRequest = (): GetTodosRequestAction => ({
  type: GetTodosType.GET_TODOS_REQUEST,
});

type GetTodosSuccessAction = {
  type: GetTodosType.GET_TODOS_SUCCESS;
};
export const getTodosSuccess = (): GetTodosSuccessAction => ({
  type: GetTodosType.GET_TODOS_SUCCESS,
});

type GetTodosFailureAction = {
  type: GetTodosType.GET_TODOS_FAILURE;
};
export const getTodosFailure = (): GetTodosFailureAction => ({
  type: GetTodosType.GET_TODOS_FAILURE,
});

export type GetTodosActions =
  | GetTodosRequestAction
  | GetTodosSuccessAction
  | GetTodosFailureAction;
