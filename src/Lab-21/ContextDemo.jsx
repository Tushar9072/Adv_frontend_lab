import React, { createContext, useState, useContext } from 'react';

// --- 1. Create the Context ---
// This creates the "pipeline" for our data.
const UserContext = createContext();

// --- 2. Create the Provider Component ---
// This component wraps the part of the app that needs access to the data.
// It manages the actual state and "provides" it to children.
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Mohil Parmar',
    email: 'mohil@gmail.com',
    avatarColor: 'bg-blue-600'
  });

  // Function to update user data
  const updateUser = (key, value) => {
    setUser(prev => ({ ...prev, [key]: value }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// --- 3. Child Components (Consumers) ---

// Component A: Header (Displays data)
const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
        <div className={`h-10 w-10 rounded-full ${user.avatarColor} flex items-center justify-center text-white font-bold shadow-md`}>
          {user.name.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
};

// Component B: Profile Card (Displays data)
const ProfileCard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Profile Overview</h2>
      <div className="space-y-4">
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className={`p-3 rounded-full ${user.avatarColor} text-white mr-4`}>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">Full Name</p>
            <p className="text-gray-800 font-medium">{user.name}</p>
          </div>
        </div>

        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className={`p-3 rounded-full ${user.avatarColor} text-white mr-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">Email Address</p>
            <p className="text-gray-800 font-medium">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component C: Settings Form (Updates data)
const SettingsForm = () => {
  const { user, updateUser } = useContext(UserContext);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Update Details</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Edit Name</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => updateUser('name', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Edit Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => updateUser('email', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>
        
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Avatar Color</label>
            <div className="flex space-x-2 mt-2">
                {['bg-blue-600', 'bg-red-500', 'bg-green-500', 'bg-purple-600'].map((color) => (
                    <button
                        key={color}
                        onClick={() => updateUser('avatarColor', color)}
                        className={`w-8 h-8 rounded-full ${color} ${user.avatarColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                    />
                ))}
            </div>
        </div>
      </form>
    </div>
  );
};

// --- 4. Main Layout Component ---
const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">User Context Demo</h2>
          <p className="text-gray-600">
            This app shares state between the Header, Profile Card, and Settings Form using a single Context Provider.
            Try editing the form on the right to see changes reflect everywhere instantly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ProfileCard />
          <SettingsForm />
        </div>
      </main>
    </div>
  );
};

// --- 5. App Entry Point ---
export default function ContextDemo() {
  return (
    // Wrap the entire app (or just the part that needs data) in the Provider
    <UserProvider>
      <DashboardLayout />
    </UserProvider>
  );
}