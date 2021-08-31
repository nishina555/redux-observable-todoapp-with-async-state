import React, { useEffect } from "react";
import Todo from "./Todo";
import { GetTodosActions, getTodosRequest } from "../redux/actions";
import { RootState } from "../redux/types";
import { connect } from "react-redux";
import { TodoItem } from "../redux/types";

type TodoListProps = {
  todos: Array<TodoItem>;
  getTodosRequest: () => GetTodosActions;
};

const TodoList: React.FC<TodoListProps> = ({ todos, getTodosRequest }) => {
  useEffect(() => {
    getTodosRequest();
  }, []);
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo: TodoItem) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

const mapStateToProps = (state: RootState) => {
  const todos = state.todos.todoItems;
  return { todos };
};
export default connect(mapStateToProps, { getTodosRequest })(TodoList);
