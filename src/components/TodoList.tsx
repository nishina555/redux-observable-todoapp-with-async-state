import React, { useEffect } from "react";
import Todo from "./Todo";
import { setTodos, TodoActions } from "../redux/actions";
import { RootState } from "../redux/types";
import { connect } from "react-redux";
import { TodoItem } from "../redux/types";

type TodoListProps = {
  todos: Array<TodoItem>;
  setTodos: (todos: Array<TodoItem>) => TodoActions;
};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  useEffect(() => {
    const data: Array<TodoItem> = [
      { id: 1, content: "do something", completed: false },
      { id: 2, content: "go somewhere", completed: false },
    ];
    setTodos(data);
  }, [setTodos]);
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo: any, index: any) => {
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
export default connect(mapStateToProps, { setTodos })(TodoList);
