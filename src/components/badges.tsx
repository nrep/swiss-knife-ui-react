import React from 'react';

export const Badge:React.FC = () => {
    return (
        <span className="w-full px-4 py-2 text-base rounded-full text-red-600 bg-red-200">
            Hello
        </span>
    )
}

export const ClosableBadge:React.FC = () => {
    return (
        <span className="w-full px-4 py-2 flex items-center text-base rounded-full text-indigo-500 border border-indigo-500 undefined">
            <svg width="20" fill="currentColor" height="20" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                </path>
            </svg>
            Facebook
            <button className="bg-transparent hover">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="h-6 w-6 ml-8" viewBox="0 0 1792 1792">
                    <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
                    </path>
                </svg>
            </button>
        </span>
    )
}

export const NotificationBadge:React.FC = () => {
    return (
        <button type="button" className="w-8 h-8 text-base  rounded-full text-white bg-red-500">
            <span className="p-1">
                2
            </span>
        </button>
    )
}

export const IconWithBadge:React.FC = () => {
    return (
        <button type="button" className="text-md text-white text-4xl relative">
            <span className="w-4 h-4 rounded-full absolute right-2 leading text-xs bg-red-500">
                2
            </span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" className="text-black h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                </path>
            </svg>
        </button>
    )
}