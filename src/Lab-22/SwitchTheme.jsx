import React, { createContext, useContext, useReducer } from 'react';

// --- MOCK REDUX IMPLEMENTATION (Internal) ---
// Since external libraries aren't available here, we recreate the core Redux/RTK functionality.

// 1. createSlice: Generates actions and a reducer
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

// 2. configureStore: Combines reducers
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

// 3. Provider, useSelector, useDispatch
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


// --- 1. SLICE (State & Reducers) ---
// A "slice" is a collection of Redux reducer logic and actions for a single feature.
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light', // 'light' or 'dark'
  },
  reducers: {
    toggleTheme: (state) => {
      // Note: In real Redux Toolkit with Immer, we could just write: state.mode = ...
      // Here we return a new object for the mock implementation.
      return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' };
    },
    setLightTheme: (state) => {
      return { ...state, mode: 'light' };
    },
    setDarkTheme: (state) => {
      return { ...state, mode: 'dark' };
    },
  },
});

// Export actions to be used by components
const { toggleTheme, setLightTheme, setDarkTheme } = themeSlice.actions;

// --- 2. STORE (Central State Container) ---
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

// --- 3. COMPONENTS ---

// Inline Icons for visual flair
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const ThemeControls = () => {
  // useSelector: Read data from the store
  const currentMode = useSelector((state) => state.theme.mode);
  
  // useDispatch: Send actions to the store
  const dispatch = useDispatch();

  return (
    <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
      <div className="text-sm font-semibold uppercase tracking-wider opacity-75">
        Current: {currentMode}
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => dispatch(setLightTheme())}
          className={`p-2 rounded-lg transition-all ${currentMode === 'light' ? 'bg-yellow-400 text-yellow-900 shadow-lg' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}
          title="Light Mode"
        >
          <SunIcon />
        </button>
        <button
          onClick={() => dispatch(setDarkTheme())}
          className={`p-2 rounded-lg transition-all ${currentMode === 'dark' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}
          title="Dark Mode"
        >
          <MoonIcon />
        </button>
      </div>
      
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors shadow-md"
      >
        Toggle
      </button>
    </div>
  );
};

const MainContent = () => {
  // Access global state to determine styling
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === 'dark';

  // Dynamic class names based on Redux state
  const containerClasses = isDark 
    ? 'bg-slate-900 text-white' 
    : 'bg-blue-50 text-slate-800';
  
  const cardClasses = isDark
    ? 'bg-slate-800 border-slate-700 shadow-indigo-500/20'
    : 'bg-white border-blue-100 shadow-blue-200/50';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-500 ease-in-out ${containerClasses}`}>
      <div className={`w-full max-w-2xl p-8 rounded-3xl shadow-2xl border ${cardClasses} transition-all duration-500`}>
        <div className="flex flex-col items-center text-center space-y-8">
          
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight">
              Redux Theme Manager
            </h1>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Centralized State Management
            </p>
          </div>

          {/* Control Panel */}
          <ThemeControls />

          <div className={`w-full p-6 rounded-xl text-left ${isDark ? 'bg-slate-900/50' : 'bg-blue-50'}`}>
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Why Redux?
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              The theme state is stored in a central <strong>Redux Store</strong>. 
              Any component, no matter how deep in the tree, can access the 
              <code>theme.mode</code> or dispatch the <code>toggleTheme</code> action 
              without passing props down manually.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- 4. APP ROOT (Provider Wrapper) ---
export default function SwitchTheme() {
  return (
    // The Provider makes the Redux store available to any nested components
    <Provider store={store}>
      <MainContent />
    </Provider>
  );
}