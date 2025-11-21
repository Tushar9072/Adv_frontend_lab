import React from "react";


function Lab6_1() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6 flex-shrink-0">
        <div className="text-3xl font-bold mb-8 text-center">Sidebar</div>

        <nav className="space-y-6 flex flex-col items-center justify-center">
          <a
            href="#"
            className="block text-lg hover:text-gray-400 transition duration-150"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block text-lg hover:text-gray-400 transition duration-150"
          >
            Settings
          </a>
          <a
            href="#"
            className="block text-lg hover:text-gray-400 transition duration-150"
          >
            Logout
          </a>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Main Content
        </h1>
        <p className="text-xl text-gray-700">This is your main layout area.</p>
      </main>
    </div>
  );
}

export default Lab6_1;
