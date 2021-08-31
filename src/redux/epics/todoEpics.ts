import { Epic, ofType } from "redux-observable";
import { mergeMap, concatMap, catchError } from "rxjs/operators";
import { GetTodosType } from "../actionTypes";
import {
  setTodos,
  getTodosSuccess,
  GetTodosActions,
  getTodosFailure,
} from "../actions";
import axios from "axios";
import { from } from "rxjs";
import { AnyAction } from "redux";
import { of } from "rxjs";

export const getTodosEpic: Epic<GetTodosActions, AnyAction> = (action$) =>
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
