import { GetTodosType } from "../actionTypes";
import { combineReducers } from "redux";
import { REQUEST_STATUS } from "../../constants";
import { GetTodosActions } from "../actions";
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

export default combineReducers({
  getTodos,
});
