import { Epic, ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";
import { GetTodosType } from "../actionTypes";
import { TodoActions, setTodos, GetTodosActions } from "../actions";
import axios from "axios";
import { from } from "rxjs";

export const getTodosEpic: Epic<GetTodosActions | TodoActions> = (action$) =>
  action$.pipe(
    ofType(GetTodosType.GET_TODOS_REQUEST),
    mergeMap(() =>
      from(axios.get("http://localhost:4000/todos")).pipe(
        map((response) => setTodos(response.data))
      )
    )
  );
