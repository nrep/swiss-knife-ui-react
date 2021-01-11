import React from 'react';

export const Alert:React.FC = () => {
    return (
        <div className="inline-flex items-center bg-white leading-none ${props.textColor} rounded-full p-2 shadow text-teal text-sm">
            <span className="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">
                Pink
            </span>
            <span className="inline-flex px-2 text-pink-600">
                Im a sexy badge and you can use me everyday at every hour.
            </span>
        </div>
    )
}