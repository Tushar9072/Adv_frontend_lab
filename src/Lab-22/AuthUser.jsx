import React, { createContext, useContext, useReducer, useState } from 'react';

// --- MOCK REDUX IMPLEMENTATION (Internal) ---
// Recreating core Redux/RTK functionality for the preview environment.

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

// --- 1. AUTH SLICE (State Logic) ---
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      loading: false,
      isAuthenticated: true,
      user: action.payload,
      error: null,
    }),
    loginFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    logout: (state) => ({
      ...state,
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    }),
  },
});

const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

// --- 2. STORE CONFIGURATION ---
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

// --- 3. COMPONENTS ---

// Login Component
const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Dispatch "Start" action to show spinner
    dispatch(loginStart());

    // Simulate API call with setTimeout
    setTimeout(() => {
      if (username.toLowerCase() === 'admin' && password === 'password') {
        // Success! Dispatch user data to store
        dispatch(loginSuccess({ 
          id: 1, 
          username: 'AdminUser', 
          role: 'Administrator',
          avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff' 
        }));
      } else if (username.trim() !== '' && password.trim() !== '') {
         // Success for standard user
         dispatch(loginSuccess({ 
          id: 2, 
          username: username, 
          role: 'Member',
          avatar: `https://ui-avatars.com/api/?name=${username}&background=0ea5e9&color=fff`
        }));
      } else {
        // Fail! Dispatch error message
        dispatch(loginFailure('Invalid credentials. Try any non-empty values.'));
      }
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-[500px] bg-gray-50 p-4 rounded-xl">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Sign in to access your Redux store state</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="e.g. Admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="Any password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-bold shadow-md transition-all ${
              loading 
                ? 'bg-indigo-400 cursor-wait' 
                : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg'
            }`}
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-gray-400 bg-gray-50 p-2 rounded">
          Tip: Use <strong>admin</strong> / <strong>password</strong> for Admin role.
        </div>
      </div>
    </div>
  );
};

// Dashboard Component (Protected)
const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-[500px] bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
          <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
             <span className="bg-green-100 p-1.5 rounded text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
             </span>
             Secure Dashboard
          </h1>
          <button 
            onClick={handleLogout}
            className="text-sm text-red-600 hover:text-red-800 font-medium bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        {/* User Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
           <div className="bg-gradient-to-r from-indigo-600 to-blue-500 h-32"></div>
           <div className="px-8 pb-8">
              <div className="relative flex justify-between items-end -mt-12 mb-6">
                 <img 
                    src={user.avatar} 
                    alt="Profile" 
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-white"
                 />
                 <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold border border-indigo-100">
                    {user.role}
                 </span>
              </div>
              
              <div className="space-y-1">
                 <h2 className="text-3xl font-bold text-gray-900">{user.username}</h2>
                 <p className="text-gray-500">User ID: #{user.id}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                 <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase font-bold">Auth Status</p>
                    <p className="text-green-600 font-bold flex items-center gap-1">
                       <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                       Authenticated
                    </p>
                 </div>
                 <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase font-bold">Session Type</p>
                    <p className="text-gray-800 font-bold">Redux Managed</p>
                 </div>
                 <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase font-bold">Permissions</p>
                    <p className="text-gray-800 font-bold">{user.role === 'Administrator' ? 'Full Access' : 'Read Only'}</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- 4. APP ENTRY POINT ---
const MainContent = () => {
  // Select 'isAuthenticated' from the Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  // Conditional Rendering based on Redux state
  return isAuthenticated ? <Dashboard /> : <LoginForm />;
};

export default function AuthUser() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 font-sans">
         {/* Helper header to show Redux status */}
         <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs text-center border-b border-slate-700">
            Redux Store Provider Active
         </div>
        <MainContent />
      </div>
    </Provider>
  );
}