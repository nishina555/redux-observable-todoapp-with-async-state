import { TodoActionTypes } from "../actionTypes";
import { TodoState } from "../types";
import { TodoActions } from "../actions";

const initialState: TodoState = {
  todoItems: [],
};

const todos = (state = initialState, action: TodoActions): TodoState => {
  switch (action.type) {
    case TodoActionTypes.SET_TODOS: {
      const { todos } = action.payload;
      return {
        todoItems: todos,
      };
    }
    case TodoActionTypes.ADD_TODO: {
      const { id, content } = action.payload;
      return {
        todoItems: [
          ...state.todoItems,
          {
            id,
            content,
            completed: false,
          },
        ],
      };
    }
    case TodoActionTypes.TOGGLE_TODO: {
      const { id } = action.payload;
      const todoItems = state.todoItems.map((todo, index) => {
        if (index === id - 1) {
          return Object.assign({}, todo, { completed: !todo.completed });
        } else {
          return todo;
        }
      });
      return {
        todoItems: todoItems,
      };
    }
    default:
      return state;
  }
};

export default todos;
