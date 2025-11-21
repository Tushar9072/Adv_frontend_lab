import React, { useState } from 'react';

// Inline SVG components to replace lucide-react icons
const LogInIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 3h6v18h-6M10 17l5-5-5-5M13 12H3"/>
  </svg>
);

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LockIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
  </svg>
);


// The main component, must be named 'App' and exported as default
export default function Login_Form() {
  // 1. State for input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. State for handling form submission and storing submitted data
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // General input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    // Reset submission state on input change
    setIsSubmitted(false);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form reload

    // IMPORTANT: Do NOT use alert(). Using an alternative message box or console log.
    if (!email.trim() || !password.trim()) {
      console.error("Please enter both email and password.");
      // In a real app, you would set an error state here and display it in the UI.
      return;
    }

    // Store the data
    const data = { email, password };
    setSubmittedData(data);
    setIsSubmitted(true);

    // Optional: Clear the form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 space-y-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center flex items-center justify-center space-x-2">
          <LogInIcon className="w-8 h-8 text-indigo-600" />
          <span>React Login</span>
        </h2>

        {/* --- Login Form --- */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input Group */}
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={handleChange}
                className="appearance-none block w-full px-10 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
              />
            </div>
          </div>

          {/* Password Input Group */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={handleChange}
                className="appearance-none block w-full px-10 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.01]"
          >
            Sign In
          </button>
        </form>

        {/* --- Display Submitted Data --- */}
        {isSubmitted && submittedData && (
          <div className="mt-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg space-y-2">
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold">Data Submitted Successfully!</h3>
            </div>
            <p className="text-sm">
              <span className="font-medium">Email:</span> {submittedData.email}
            </p>
            <p className="text-sm">
              <span className="font-medium">Password:</span> ********** (Length: {submittedData.password.length})
            </p>
          </div>
        )}
      </div>
    </div>
  );
}