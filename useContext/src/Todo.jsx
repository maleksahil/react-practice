import React, { useContext, useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";

const Todo = () => {
  const { todos, addOrUpdateTodo, editingIndex } = useContext(TodoContext);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  // ✅ Load existing data when editing
  useEffect(() => {
    if (editingIndex !== null) {
      setFormData(todos[editingIndex]);
    } else {
      setFormData({ name: "", email: "", mobile: "" });
    }
  }, [editingIndex, todos]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit data
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill all fields!");
      return;
    }
    addOrUpdateTodo(formData);
    setFormData({ name: "", email: "", mobile: "" }); // Reset form
  };

  return (
    <div>
      <h2>{editingIndex !== null ? "Edit Todo" : "Add Todo"}</h2>
      <input type="text" name="name" value={formData.name} placeholder="Enter Name" onChange={handleChange} />
      <input type="email" name="email" value={formData.email} placeholder="Enter Email" onChange={handleChange} />
      <input type="text" name="mobile" value={formData.mobile} placeholder="Enter Mobile Number" onChange={handleChange} />
      <button onClick={handleSubmit}>{editingIndex !== null ? "Update Todo" : "Submit"}</button>
    </div>
  );
};

export default Todo;
