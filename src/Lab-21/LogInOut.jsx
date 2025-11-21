import React, { createContext, useState, useContext } from 'react';

// --- 1. Create Authentication Context ---
const AuthContext = createContext(null);

// --- 2. Create AuthProvider Component ---
// This wraps the app and provides the auth state and functions to children
const AuthProvider = ({ children }) => {
  // User state: null means logged out, object means logged in
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock Login Function
  const login = (username, password) => {
    setIsLoading(true);
    // Simulate an API call delay
    setTimeout(() => {
      // In a real app, you would validate credentials here
      if (username.trim() !== "") {
        setUser({ 
          username: username, 
          role: 'User', 
          loginTime: new Date().toLocaleTimeString() 
        });
      }
      setIsLoading(false);
    }, 800);
  };

  // Logout Function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// --- 3. Components ---

// Navigation Bar: Changes based on auth state
const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="font-bold text-lg">SecureApp</span>
      </div>
      
      {user && (
        <div className="flex items-center space-x-4">
          <span className="text-sm opacity-90">Welcome, {user.username}</span>
          <button 
            onClick={logout}
            className="bg-indigo-800 hover:bg-indigo-900 px-3 py-1 rounded text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

// Login Form Component
const LoginForm = () => {
  const { login, isLoading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
          <p className="text-gray-500 text-sm mt-1">Access your secure dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input 
              type="text" 
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-2.5 rounded-lg text-white font-medium shadow-sm transition-all ${
              isLoading 
                ? 'bg-indigo-400 cursor-wait' 
                : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-md transform hover:-translate-y-0.5'
            }`}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <p className="mt-6 text-center text-xs text-gray-400">
          For demo purposes, any username works.
        </p>
      </div>
    </div>
  );
};

// Dashboard Component (Protected Route)
const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Hello, {user.username}!</h1>
          <p className="opacity-90">Welcome back to your dashboard.</p>
        </div>
        
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-blue-600 text-xs font-bold uppercase">Role</p>
              <p className="text-gray-800 font-semibold text-lg">{user.role}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <p className="text-green-600 text-xs font-bold uppercase">Status</p>
              <p className="text-gray-800 font-semibold text-lg">Active</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <p className="text-purple-600 text-xs font-bold uppercase">Login Time</p>
              <p className="text-gray-800 font-semibold text-lg">{user.loginTime}</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Project Update #{item}</p>
                  <p className="text-xs text-gray-500">Modified 2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Content Wrapper
const MainContent = () => {
  const { user } = useContext(AuthContext);
  // Conditionally render Login or Dashboard based on auth state
  return user ? <Dashboard /> : <LoginForm />;
};

// --- 4. App Entry Point ---
export default function LogInOut() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
        <NavBar />
        <MainContent />
      </div>
    </AuthProvider>
  );
}