import React from 'react'
const ThreeCardShadow = () => {
  return (
    <div className="flex flex-col items-center space-y-6 min-h-screen justify-center bg-gray-100 p-6">
        {/* Card 1: Small Shadow */}
        <div className="w-64 h-40 bg-white rounded-lg shadow-sm shadow-amber-400 flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-700">Small Shadow</span>
        </div>
        {/* Card 2: Medium Shadow */}
        <div className="w-64 h-40 bg-white rounded-lg shadow-md shadow-blue-400 flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-700">Medium Shadow</span>
        </div>
        {/* Card 3: Large Shadow */}
        <div className="w-64 h-40 bg-white rounded-lg shadow-lg shadow-green-400 flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-700">Large Shadow</span>
        </div>
    </div>
  );
}
export default ThreeCardShadow;