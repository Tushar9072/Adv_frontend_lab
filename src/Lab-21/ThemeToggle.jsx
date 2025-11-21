    import React, { createContext, useState, useContext } from 'react';

    // --- 1. Create Contexts ---
    const UserContext = createContext();
    const ThemeContext = createContext();

    // --- 2. Create Provider Components ---

    // Theme Provider: Manages 'light' vs 'dark' state
    const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
    };

    // User Provider: Manages user profile data
    const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Mohil Parmar',
        email: 'mohil@gmail.com',
        avatarColor: 'bg-blue-600'
    });

    const updateUser = (key, value) => {
        setUser((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
        {children}
        </UserContext.Provider>
    );
    };

    // --- 3. Child Components ---

    const Header = () => {
    const { user } = useContext(UserContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const isDark = theme === 'dark';

    return (
        <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm border-b px-6 py-4 flex justify-between items-center transition-colors duration-300`}>
        <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Dashboard</h1>
        
        <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-all`}
            title="Toggle Theme"
            >
            {isDark ? (
                // Sun Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ) : (
                // Moon Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}
            </button>

            {/* User Info */}
            <div className="flex items-center space-x-3 border-l pl-4 border-gray-300 dark:border-gray-600">
            <div className="text-right hidden sm:block">
                <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{user.name}</p>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{user.email}</p>
            </div>
            <div className={`h-10 w-10 rounded-full ${user.avatarColor} flex items-center justify-center text-white font-bold shadow-md ring-2 ${isDark ? 'ring-gray-700' : 'ring-white'}`}>
                {user.name.charAt(0).toUpperCase()}
            </div>
            </div>
        </div>
        </header>
    );
    };

    const ProfileCard = () => {
    const { user } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';

    return (
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-xl shadow-md border h-full transition-colors duration-300`}>
        <h2 className={`text-lg font-semibold mb-4 border-b pb-2 ${isDark ? 'text-gray-200 border-gray-700' : 'text-gray-700 border-gray-100'}`}>Profile Overview</h2>
        
        <div className="space-y-4">
            <div className={`flex items-center p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className={`p-3 rounded-full ${user.avatarColor} text-white mr-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
            <div>
                <p className={`text-xs uppercase font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Full Name</p>
                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>{user.name}</p>
            </div>
            </div>

            <div className={`flex items-center p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className={`p-3 rounded-full ${user.avatarColor} text-white mr-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div>
                <p className={`text-xs uppercase font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email Address</p>
                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>{user.email}</p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    const SettingsForm = () => {
    const { user, updateUser } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';

    return (
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-xl shadow-md border h-full transition-colors duration-300`}>
        <h2 className={`text-lg font-semibold mb-4 border-b pb-2 ${isDark ? 'text-gray-200 border-gray-700' : 'text-gray-700 border-gray-100'}`}>Update Details</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
            <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Edit Name</label>
            <input
                type="text"
                value={user.name}
                onChange={(e) => updateUser('name', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'}`}
            />
            </div>
            <div>
            <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Edit Email</label>
            <input
                type="email"
                value={user.email}
                onChange={(e) => updateUser('email', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'}`}
            />
            </div>
            
            <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Avatar Color</label>
                <div className="flex space-x-2 mt-2">
                    {['bg-blue-600', 'bg-red-500', 'bg-green-500', 'bg-purple-600'].map((color) => (
                        <button
                            key={color}
                            onClick={() => updateUser('avatarColor', color)}
                            className={`w-8 h-8 rounded-full ${color} ${user.avatarColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''} transition-transform hover:scale-110`}
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
    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';

    return (
        // The main container's background changes based on the theme context
        <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Header />
        <main className="max-w-5xl mx-auto p-6">
            <div className="mb-6">
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Context Demo</h2>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                This app combines <strong>UserContext</strong> (data) and <strong>ThemeContext</strong> (UI state).
                Toggle the theme in the top right to see global UI updates.
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
    export default function ThemeToggle() {
    return (
        // Wrap the app in BOTH providers
        <ThemeProvider>
        <UserProvider>
            <DashboardLayout />
        </UserProvider>
        </ThemeProvider>
    );
    }