import React from 'react'

const ThreeDifferentFilter = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 space-x-6 p-8">
        {/* Image 1: Grayscale Filter */}
        <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-800">
            <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Grayscale"
                className="w-64 h-40 object-cover filter grayscale transition-all duration-500 hover:grayscale-0"
            />
        </div>
        {/* Image 2: Sepia Filter */}
        <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-800">
            <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Sepia"
                className="w-64 h-40 object-cover filter sepia transition-all duration-500 hover:sepia-0"
            />
        </div>
        {/* Image 3: Blur Filter */}
        <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-800">
            <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Blur"
                className="w-64 h-40 object-cover filter blur transition-all duration-500 hover:blur-none"
            />
        </div>
    </div>
  )
}

export default ThreeDifferentFilter