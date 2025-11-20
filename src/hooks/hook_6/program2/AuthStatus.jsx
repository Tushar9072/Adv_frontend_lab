import useUserAuth from "./useUserAuth";

export default function AuthStatus() {
  const { user, login, logout } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          User Auth Debug Example
        </h2>

        <p className="text-lg mb-6">
          Status:{" "}
          {user ? (
            <span className="text-green-600 font-semibold">🟢 Logged In</span>
          ) : (
            <span className="text-red-600 font-semibold">🔴 Logged Out</span>
          )}
        </p>

        {user ? (
          <button
            onClick={logout}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={login}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
