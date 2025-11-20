// src/components/TodoApp.js
import React, { useState } from "react";
import { addTodoAPI } from "../../api/mockApi";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = async () => {
    if (!text.trim()) return;

    const tempId = "temp-" + Date.now();

    // 1️⃣ Optimistic update: show instantly
    const optimisticTodo = { id: tempId, text, saving: true };
    setTodos((prev) => [...prev, optimisticTodo]);
    setText("");

    try {
      // 2️⃣ Actual mock API call
      const saved = await addTodoAPI({ text });

      // 3️⃣ Replace temp todo with server todo
      setTodos((prev) =>
        prev.map((t) => (t.id === tempId ? saved : t))
      );
    } catch (error) {
      // 4️⃣ Rollback on failure
      setTodos((prev) => prev.filter((t) => t.id !== tempId));
      alert(error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Optimistic Add Todo (Mock API)</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} {todo.saving && "(saving…)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
