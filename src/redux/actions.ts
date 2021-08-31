import { ActionTypes } from "./actionTypes";
import { TodoItem } from "./types";

type SetTodosAction = {
  type: ActionTypes.SET_TODOS;
  payload: { todos: TodoItem[] };
};

export const setTodos = (todos: TodoItem[]): SetTodosAction => ({
  type: ActionTypes.SET_TODOS,
  payload: { todos },
});

export type TodoActions = SetTodosAction;
