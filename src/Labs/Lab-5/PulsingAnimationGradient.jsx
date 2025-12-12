import React from 'react'

const PulsingAnimationGradient = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="w-72 h-72 rounded-2xl bg-gradient-to-t from-purple-400 via-pink-500 to-red-500 animate-pulse shadow-2xl"></div>
        </div>
    )
}

export default PulsingAnimationGradient