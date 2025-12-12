// Create a layout showing horizontal and vertical separator lines. (B) 
import React from 'react';

const SeparatorLines = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-2xl">
                {/* Horizontal Separator */}
                <div className="border-t-4 border-red-900 mb-8"></div>

                <div className="flex items-center justify-center h-48">
                    <span className="text-gray-600 text-lg">Content Area</span>
                </div>
                {/* Vertical Separator */}
                <div className="border-l-4 border-blue-900 h-48 mx-auto"></div>
            </div>
        </div>
    );
}

export default SeparatorLines;