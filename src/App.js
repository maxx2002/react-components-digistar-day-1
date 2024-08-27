import { useState } from "react";
import "./App.css";
import TodoItem from "./Components/Todo/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { ...todo, text: input } : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, { text: input, id: Date.now() }]);
    }
    setInput("");
  };

  const handleEditTodo = (index) => {
    setInput(todos[index].text);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleChange = (e) => setInput(e.target.value);

  return (
    <div className="app">
      <h1>TODO List</h1>
      <div className="search">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add a new todo"
          style={{ width: "100%" }}
        />
        <button
          className={editIndex !== null ? "update" : "add"}
          onClick={handleAddTodo}
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={() => handleEditTodo(index)}
          onDelete={() => handleDeleteTodo(index)}
        />
      ))}
    </div>
  );
};

export default App;
