import { Epic, ofType } from "redux-observable";
import {
  mergeMap,
  concatMap,
  catchError,
  withLatestFrom,
} from "rxjs/operators";
import { GetTodosType, PostTodoType, ToggleTodoType } from "../actionTypes";
import {
  setTodos,
  getTodosSuccess,
  GetTodosActions,
  getTodosFailure,
  TodoActions,
  postTodoSuccess,
  postTodoFailure,
  addTodo,
  toggleTodoSuccess,
  toggleTodoFailure,
  toggleTodo,
} from "../actions";
import axios from "axios";
import { from } from "rxjs";
import { AnyAction } from "redux";
import { of } from "rxjs";
import { combineEpics } from "redux-observable";
import { RootState } from "../types";

type PostTodoItem = {
  content: string;
  completed: boolean;
};

export const getTodosEpic: Epic<GetTodosActions | TodoActions> = (action$) =>
  action$.pipe(
    ofType(GetTodosType.GET_TODOS_REQUEST),
    mergeMap(() =>
      from(axios.get("http://localhost:4000/todos")).pipe(
        concatMap((response) => [setTodos(response.data), getTodosSuccess()]),
        catchError((error: Error) => {
          console.log(error);
          return of(getTodosFailure());
        })
      )
    )
  );

export const postTodoEpic: Epic<AnyAction, AnyAction, RootState> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType(PostTodoType.POST_TODO_REQUEST),
    withLatestFrom(state$),
    // mergeMap([action, state])
    mergeMap(([{ payload }, { todos }]) => {
      const todo: PostTodoItem = {
        content: payload.input,
        completed: false,
      };
      return from(axios.post("http://localhost:4000/todos", todo)).pipe(
        concatMap(() => [
          addTodo(payload.input, todos.todoItems.length + 1),
          postTodoSuccess(),
        ]),
        catchError((error: Error) => {
          console.log(error);
          return of(postTodoFailure());
        })
      );
    })
  );

export const toggleTodoEpic: Epic<AnyAction, AnyAction, RootState> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType(ToggleTodoType.TOGGLE_TODO_REQUEST),
    withLatestFrom(state$),
    // mergeMap([action, state])
    mergeMap(([{ payload }, { todos }]) => {
      const index = payload.id - 1;
      const todo: PostTodoItem = {
        content: todos.todoItems[index].content,
        completed: !todos.todoItems[index].completed,
      };
      return from(
        axios.patch(`http://localhost:4000/todos/${payload.id}`, todo)
      ).pipe(
        concatMap(() => [toggleTodo(payload.id), toggleTodoSuccess()]),
        catchError((error: Error) => {
          console.log(error);
          return of(toggleTodoFailure());
        })
      );
    })
  );

export default combineEpics(getTodosEpic, postTodoEpic, toggleTodoEpic);
