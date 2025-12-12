import React from 'react';

const CardRing = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="w-64 h-40 bg-white rounded-2xl shadow-2xl border-4 border-gray-300 transform transition-transform duration-500 hover:scale-105 hover:border-blue-500 flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-700">Hover Me!</span>
            </div>
        </div>
    );
}

export default CardRing;