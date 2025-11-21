import React, { useState } from 'react';

// Inline SVG Icons for a clean, dependency-free UI
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const ClipboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-4">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
);

export default function ToDoList() {
  // State for the current value of the input field
  const [inputValue, setInputValue] = useState('');

  // State for the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to handle adding a new task
  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent form submission reload
    
    if (!inputValue.trim()) return; // Don't add empty tasks

    const newTask = {
      id: Date.now(), // Simple unique ID
      text: inputValue.trim()
    };

    setTasks([...tasks, newTask]); // Add new task to array
    setInputValue(''); // Reset input field
  };

  // Function to delete a task by ID
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gray-50 px-6 py-8 border-b border-gray-200 flex flex-col items-center">
          <ClipboardIcon />
          <h1 className="text-2xl font-bold text-gray-900">My Tasks</h1>
          <p className="text-gray-500 text-sm mt-1">Stay organized and get things done</p>
        </div>

        {/* Input Section */}
        <div className="p-6 bg-white">
          <form onSubmit={handleAddTask} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 appearance-none border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <PlusIcon />
              <span className="hidden sm:inline">Add</span>
            </button>
          </form>
        </div>

        {/* Task List Section */}
        <div className="bg-gray-50 px-6 pb-6 min-h-[300px]">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 mt-4">
            {tasks.length > 0 ? `Tasks - ${tasks.length}` : 'No Tasks'}
          </h2>
          
          <div className="space-y-3">
            {tasks.length === 0 ? (
              <div className="text-center py-10 opacity-50">
                <p className="text-gray-500 italic">Your list is empty.</p>
              </div>
            ) : (
              tasks.map((task) => (
                <div 
                  key={task.id} 
                  className="group flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className="text-gray-800 break-all">{task.text}</span>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-gray-400 hover:text-red-500 focus:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                    title="Delete Task"
                  >
                    <TrashIcon />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}