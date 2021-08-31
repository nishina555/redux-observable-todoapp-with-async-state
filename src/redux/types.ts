export interface TodoItem {
  id: number;
  content: string;
  completed: boolean;
}

export interface TodoState {
  todoItems: Array<TodoItem>;
}

export interface RootState {
  todos: TodoState;
}
