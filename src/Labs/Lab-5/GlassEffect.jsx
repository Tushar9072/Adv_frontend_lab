import React from 'react'

function GlassEffect() {
    return (

    <div className="flex items-center justify-center min-h-screen w-full bg-slate-900 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>

      <div className="relative z-10 w-96 p-10 text-center text-white border rounded-2xl shadow-xl bg-white/10 backdrop-blur-lg border-white/20">
        
        <h2 className="mb-4 text-3xl font-bold">Glassmorphism</h2>
        
        <p className="mb-6 text-base text-gray-200/20">
          This effect uses Tailwind's opacity modifiers and backdrop utilities. 
          The background is semi-transparent white, and the blur is applied to elements behind it.
        </p>
        
        <button className="px-6 py-2 font-semibold text-slate-900 transition-transform bg-white rounded-lg hover:scale-105 active:scale-95">
          Read More
        </button>
        
      </div>
    </div>
  );
};

export default GlassEffect