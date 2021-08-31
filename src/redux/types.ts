import { REQUEST_STATUS } from "../constants";

export interface TodoItem {
  id: number;
  content: string;
  completed: boolean;
}

export interface TodoState {
  todoItems: Array<TodoItem>;
}

export type RequestStatus = typeof REQUEST_STATUS[keyof typeof REQUEST_STATUS];

export type RequestState = { status: RequestStatus };

export interface RootState {
  todos: TodoState;
}
