import React from "react";

const Lab6_7 = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center p-4">
      <div className="w-full max-w-5xl space-y-4">
        <header className="bg-blue-400 text-white text-xl font-bold py-6 text-left px-4">
          .header
        </header>

        <div className="px-20 flex flex-col gap-3"><div className="flex justify-center gap-4">
          <div className="bg-green-500 flex-1 text-white py-16 text-center font-bold">
            .main-content
          </div>

          <div className="bg-purple-400 w-1/3 text-white py-16 text-center font-bold">
            .sidebar
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <div className="bg-orange-400 w-1/2 text-white py-12 text-center font-bold">
            .twin
          </div>
          <div className="bg-orange-400 w-1/2 text-white py-12 text-center font-bold">
            .twin
          </div>
        </div></div>

        <footer className="bg-blue-700 text-white text-xl font-bold py-6 px-4">
          .footer
        </footer>
      </div>
    </div>
  );
};

export default Lab6_7;
