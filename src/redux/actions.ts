import { TodoActionTypes, GetTodosType, PostTodoType } from "./actionTypes";
import { TodoItem } from "./types";

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

export type TodoActions = SetTodosAction | AddTodoAction;

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

export type PostTodoActions =
  | PostTodoRequestAction
  | PostTodoSuccessAction
  | PostTodoFailureAction;
