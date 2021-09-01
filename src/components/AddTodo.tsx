import React, { useState } from "react";
import { PostTodoActions, postTodoRequest } from "../redux/actions";
import { connect } from "react-redux";

type AddTodoProps = {
  postTodoRequest: (input: string) => PostTodoActions;
};

const AddTodo: React.FC<AddTodoProps> = ({ postTodoRequest }) => {
  const [input, setInput] = useState("");

  const updateInput = (input: string) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    postTodoRequest(input);
    setInput("");
  };

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default connect(null, { postTodoRequest })(AddTodo);
