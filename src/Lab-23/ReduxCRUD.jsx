import React, { createContext, useContext, useReducer, useState } from 'react';

// --- MOCK REDUX IMPLEMENTATION (Internal) ---
// Recreating Redux Toolkit functionality for the preview environment.

const createSlice = ({ name, initialState, reducers }) => {
  const actions = {};
  Object.keys(reducers).forEach((key) => {
    actions[key] = (payload) => ({ type: `${name}/${key}`, payload });
  });

  const reducer = (state = initialState, action) => {
    const [sliceName, actionType] = action.type.split('/');
    if (sliceName === name && reducers[actionType]) {
      return reducers[actionType](state, action);
    }
    return state;
  };
  return { actions, reducer };
};

const configureStore = ({ reducer }) => {
  const rootReducer = (state, action) => {
    const newState = {};
    Object.keys(reducer).forEach((key) => {
      newState[key] = reducer[key](state ? state[key] : undefined, action);
    });
    return newState;
  };
  return { reducer: rootReducer, initialState: rootReducer(undefined, { type: '@@INIT' }) };
};

const ReduxContext = createContext();

const Provider = ({ store, children }) => {
  const [state, dispatch] = useReducer(store.reducer, store.initialState);
  return (
    <ReduxContext.Provider value={{ state, dispatch }}>
      {children}
    </ReduxContext.Provider>
  );
};

const useSelector = (selector) => selector(useContext(ReduxContext).state);
const useDispatch = () => useContext(ReduxContext).dispatch;

// --- 1. AUTH SLICE (Authentication Logic) ---
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => ({
      ...state,
      isAuthenticated: true,
      user: action.payload, // Payload is username
    }),
    logout: (state) => ({
      ...state,
      isAuthenticated: false,
      user: null,
    }),
  },
});

// --- 2. DATA SLICE (CRUD Logic) ---
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [
      { id: 1, title: 'Review Project Requirements', status: 'Completed' },
      { id: 2, title: 'Design Database Schema', status: 'In Progress' },
    ],
  },
  reducers: {
    // CREATE
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(),
        title: action.payload.title,
        status: 'Pending',
      };
      return { ...state, items: [...state.items, newItem] };
    },
    // DELETE
    deleteItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },
    // UPDATE
    updateItem: (state, action) => {
      const { id, newTitle } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, title: newTitle } : item
        ),
      };
    },
    // UPDATE STATUS (Another variation of Update)
    toggleStatus: (state, action) => {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { 
                ...item, 
                status: item.status === 'Completed' ? 'Pending' : 'Completed' 
              }
            : item
        ),
      };
    },
  },
});

// Extract Actions
const { login, logout } = authSlice.actions;
const { addItem, deleteItem, updateItem, toggleStatus } = dataSlice.actions;

// --- 3. STORE CONFIGURATION ---
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    data: dataSlice.reducer,
  },
});

// --- 4. COMPONENTS ---

// Login Component
const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(login(username));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Login to manage your tasks</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

// CRUD Manager Component
const CrudManager = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.data);

  const [newItemTitle, setNewItemTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  // Create Handler
  const handleAdd = (e) => {
    e.preventDefault();
    if (newItemTitle.trim()) {
      dispatch(addItem({ title: newItemTitle }));
      setNewItemTitle('');
    }
  };

  // Update Handler
  const startEdit = (item) => {
    setEditingId(item.id);
    setEditTitle(item.title);
  };

  const saveEdit = (id) => {
    if (editTitle.trim()) {
      dispatch(updateItem({ id, newTitle: editTitle }));
      setEditingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <span className="font-bold text-gray-800">TaskManager Pro</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Hello, <strong>{user}</strong></span>
          <button
            onClick={() => dispatch(logout())}
            className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-6">
        {/* Add Item Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Task</h2>
          <form onSubmit={handleAdd} className="flex gap-3">
            <input
              type="text"
              value={newItemTitle}
              onChange={(e) => setNewItemTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add
            </button>
          </form>
        </div>

        {/* Items List */}
        <div className="space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-400 bg-white rounded-xl border border-dashed border-gray-200">
              No tasks found. Start by adding one!
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow">
                
                {/* Content Area: Display vs Edit Mode */}
                <div className="flex items-center gap-4 flex-grow">
                  <button 
                    onClick={() => dispatch(toggleStatus(item.id))}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${item.status === 'Completed' ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-blue-500'}`}
                  >
                    {item.status === 'Completed' && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                  </button>

                  {editingId === item.id ? (
                    <div className="flex gap-2 flex-grow mr-4">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="flex-grow px-2 py-1 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        autoFocus
                      />
                      <button onClick={() => saveEdit(item.id)} className="text-green-600 hover:bg-green-50 px-3 py-1 rounded text-sm font-medium">Save</button>
                      <button onClick={() => setEditingId(null)} className="text-gray-500 hover:bg-gray-100 px-3 py-1 rounded text-sm font-medium">Cancel</button>
                    </div>
                  ) : (
                    <div className="flex-grow">
                      <p className={`font-medium text-gray-800 ${item.status === 'Completed' ? 'line-through text-gray-400' : ''}`}>{item.title}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {item.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions Area */}
                {editingId !== item.id && (
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => startEdit(item)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button
                      onClick={() => dispatch(deleteItem(item.id))}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

// --- 5. MAIN APP ENTRY ---
const AppContent = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <CrudManager /> : <LoginPage />;
};

export default function ReduxCRUD() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}