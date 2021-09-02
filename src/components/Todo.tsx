import React from "react";
import cx from "classnames";
import { TodoItem } from "../redux/types";
import { connect } from "react-redux";
import { ToggleTodoActions, toggleTodoRequest } from "../redux/actions";

type TodoProps = {
  todo: TodoItem;
  toggleTodoRequest: (id: number) => ToggleTodoActions;
};

const Todo: React.FC<TodoProps> = ({ todo, toggleTodoRequest }) => {
  const handleToggleTodo = (todo: TodoItem) => {
    toggleTodoRequest(todo.id);
  };
  return (
    <li className="todo-item" onClick={() => handleToggleTodo(todo)}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default connect(null, { toggleTodoRequest })(Todo);
