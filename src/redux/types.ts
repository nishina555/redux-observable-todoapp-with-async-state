import { REQUEST_STATUS, VISIBILITY_FILTERS } from "../constants";

export type TodoItem = {
  id: number;
  content: string;
  completed: boolean;
};

export type TodoState = {
  todoItems: Array<TodoItem>;
};

export type RequestStatus = typeof REQUEST_STATUS[keyof typeof REQUEST_STATUS];

export type RequestState = { status: RequestStatus };

export type RootState = {
  todos: TodoState;
  requestStatus: {
    [actionType: string]: RequestState;
  };
  visibilityFilter: VisibilityFilterTypes;
};

export type VisibilityFilterTypes =
  typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS];
