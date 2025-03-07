import React, { createContext, useState } from "react";


export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]); // Store multiple todos
  const [editingIndex, setEditingIndex] = useState(null); // Track which todo is being edited

  // ✅ Add or update todo
  const addOrUpdateTodo = (todo) => {
    if (editingIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = todo; // Update existing todo
      setTodos(updatedTodos);
      setEditingIndex(null);
    } else {
      setTodos([...todos, todo]); // Add new todo
    }
  };

  // ✅ Delete a todo
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    if (editingIndex === index) setEditingIndex(null);
  };

  return (
    <TodoContext.Provider value={{ todos, addOrUpdateTodo, deleteTodo, setEditingIndex, editingIndex }}>
      <div className="main-container">
        <div className="form-container">{children}</div> {/* Form Section */}
        <div className="data-container">
          <h2>Todo List</h2>
          <div className="todo-list">
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <div key={index} className="todo-card">
                  <p><strong>Name:</strong> {todo.name}</p>
                  <p><strong>Email:</strong> {todo.email}</p>
                  <p><strong>Mobile:</strong> {todo.mobile}</p>
                  <div className="btn-group">
                    <button className="edit-btn" onClick={() => setEditingIndex(index)}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No data submitted yet.</p>
            )}
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
