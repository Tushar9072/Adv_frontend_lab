
import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };

    case "toggle":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "remove":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

export default function TodoReducer() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "add", payload: input });
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Todo List (Reducer)</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="space-y-3">
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm"
          >
            <span
              onClick={() => dispatch({ type: "toggle", payload: todo.id })}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>

            <button
              onClick={() => dispatch({ type: "remove", payload: todo.id })}
              className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}

        {state.todos.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No todos yet </p>
        )}
      </ul>
    </div>
  );
}
