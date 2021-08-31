import React, { useState } from "react";

const AddTodo: React.FC = () => {
  const [input, setInput] = useState("");

  const updateInput = (input: string) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    // dispatches actions to add todo
    // sets state back to empty string
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

export default AddTodo;
