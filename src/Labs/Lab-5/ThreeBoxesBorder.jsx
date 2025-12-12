import React from 'react'

const ThreeBoxesBorder = () => {
  return (
    <div className="flex flex-col items-center space-y-6 min-h-screen justify-center bg-gray-100 p-6">
        {/* Box 1: Solid Border */}
        <div className="w-64 h-32 border-4 border-blue-500 bg-white flex items-center justify-center shadow-md">
            <span className="text-lg font-semibold text-blue-500">Solid Border</span>
        </div>
        {/* Box 2: Dashed Border */}
        <div className="w-64 h-32 border-4 border-dashed border-green-500 bg-white flex items-center justify-center shadow-md">
            <span className="text-lg font-semibold text-green-500">Dashed Border</span>
        </div>
        {/* Box 3: Dotted Border */}
        <div className="w-64 h-32 border-4 border-dotted border-red-500 bg-white flex items-center justify-center shadow-md">
            <span className="text-lg font-semibold text-red-500">Dotted Border</span>
        </div>
    </div>
  );
}

export default ThreeBoxesBorder;