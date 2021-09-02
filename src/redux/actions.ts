import {
  TodoActionTypes,
  GetTodosType,
  PostTodoType,
  ToggleTodoType,
} from "./actionTypes";
import { TodoItem, VisibilityFilterTypes } from "./types";

type SetTodosAction = {
  type: TodoActionTypes.SET_TODOS;
  payload: { todos: TodoItem[] };
};

export const setTodos = (todos: TodoItem[]): SetTodosAction => ({
  type: TodoActionTypes.SET_TODOS,
  payload: { todos },
});

type AddTodoAction = {
  type: TodoActionTypes.ADD_TODO;
  payload: {
    id: number;
    content: string;
  };
};

export const addTodo = (content: string, id: number): AddTodoAction => ({
  type: TodoActionTypes.ADD_TODO,
  payload: {
    id,
    content,
  },
});

type SetFilterAction = {
  type: TodoActionTypes.SET_FILTER;
  payload: {
    filter: VisibilityFilterTypes;
  };
};

export const setFilter = (filter: VisibilityFilterTypes): SetFilterAction => ({
  type: TodoActionTypes.SET_FILTER,
  payload: { filter },
});

type ToggleTodoAction = {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: {
    id: number;
  };
};

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload: { id },
});

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

type PostTodoRequestAction = {
  type: PostTodoType.POST_TODO_REQUEST;
  payload: {
    input: string;
  };
};
export const postTodoRequest = (input: string): PostTodoRequestAction => ({
  type: PostTodoType.POST_TODO_REQUEST,
  payload: {
    input,
  },
});

type PostTodoSuccessAction = {
  type: PostTodoType.POST_TODO_SUCCESS;
};
export const postTodoSuccess = (): PostTodoSuccessAction => ({
  type: PostTodoType.POST_TODO_SUCCESS,
});

type PostTodoFailureAction = {
  type: PostTodoType.POST_TODO_FAILURE;
};
export const postTodoFailure = (): PostTodoFailureAction => ({
  type: PostTodoType.POST_TODO_FAILURE,
});

type ToggleTodoRequestAction = {
  type: ToggleTodoType.TOGGLE_TODO_REQUEST;
  payload: {
    id: number;
  };
};
export const toggleTodoRequest = (id: number): ToggleTodoRequestAction => ({
  type: ToggleTodoType.TOGGLE_TODO_REQUEST,
  payload: {
    id,
  },
});

type ToggleTodoSuccessAction = {
  type: ToggleTodoType.TOGGLE_TODO_SUCCESS;
};
export const toggleTodoSuccess = (): ToggleTodoSuccessAction => ({
  type: ToggleTodoType.TOGGLE_TODO_SUCCESS,
});

type ToggleTodoFailureAction = {
  type: ToggleTodoType.TOGGLE_TODO_FAILURE;
};
export const toggleTodoFailure = (): ToggleTodoFailureAction => ({
  type: ToggleTodoType.TOGGLE_TODO_FAILURE,
});

export type TodoActions =
  | SetTodosAction
  | AddTodoAction
  | SetFilterAction
  | ToggleTodoAction;

export type GetTodosActions =
  | GetTodosRequestAction
  | GetTodosSuccessAction
  | GetTodosFailureAction;

export type PostTodoActions =
  | PostTodoRequestAction
  | PostTodoSuccessAction
  | PostTodoFailureAction;

export type ToggleTodoActions =
  | ToggleTodoRequestAction
  | ToggleTodoSuccessAction
  | ToggleTodoFailureAction;
