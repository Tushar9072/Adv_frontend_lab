import React from 'react'

const HoverBlur = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-800">
        <img
          src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Nature"

          className="w-96 h-64 object-cover transition-all duration-500 hover:blur-md"
        />
      </div>
    </div>
  );
}

export default HoverBlur;