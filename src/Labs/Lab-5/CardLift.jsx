// Make a card that lifts upward when hovered with shadow increase. (B) 

import React from 'react';

const CardLift = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="w-64 h-40 bg-white rounded-2xl shadow-lg transform transition-transform duration-500 hover:-translate-y-4 hover:shadow-2xl  hover: shadow-blue-500 flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-700">Hover Me!</span>
            </div>
        </div>
    );
}
export default CardLift;