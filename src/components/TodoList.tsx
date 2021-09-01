import React, { useEffect } from "react";
import Todo from "./Todo";
import { GetTodosActions, getTodosRequest } from "../redux/actions";
import { RootState, VisibilityFilterTypes } from "../redux/types";
import { connect } from "react-redux";
import { TodoItem, TodoState } from "../redux/types";
import { getTodosByVisibilityFilter } from "../redux/selectors";

type TodoListProps = {
  todos: TodoState;
  visibilityFilter: VisibilityFilterTypes;
  getTodosRequest: () => GetTodosActions;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  getTodosRequest,
  visibilityFilter,
}) => {
  useEffect(() => {
    getTodosRequest();
  }, []);
  const visibleTodos: TodoItem[] = getTodosByVisibilityFilter(
    todos,
    visibilityFilter
  );
  return (
    <ul className="todo-list">
      {visibleTodos && visibleTodos.length
        ? visibleTodos.map((todo: TodoItem) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

const mapStateToProps = (state: RootState) => {
  const todos = state.todos;
  const visibilityFilter = state.visibilityFilter;
  return { todos, visibilityFilter };
};
export default connect(mapStateToProps, { getTodosRequest })(TodoList);
