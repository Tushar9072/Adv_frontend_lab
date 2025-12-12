import React from 'react'

const BlendModes = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
        <div 
            className="relative h-96 w-full max-w-4xl flex items-center justify-center bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')" }}
        >
            <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply opacity-80"></div>

            <div className="relative z-10 text-center">
                <h1 className="text-white text-5xl font-bold tracking-wide mb-2">Blended Text</h1>
                <p className="text-indigo-100 text-lg font-medium">Readable content using mix-blend-multiply</p>
            </div>
        </div>
    </div>
  )
}

export default BlendModes