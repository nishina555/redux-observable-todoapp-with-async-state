import { TodoActionTypes } from "./actionTypes";
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
