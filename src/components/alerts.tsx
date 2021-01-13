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

export const InformationCard:React.FC = () => {
    return (        
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
            <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                    <svg className="h-12 w-12 mt-4 m-auto text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                    <p className="text-gray-600 dark:text-gray-100 text-md py-2 px-6">
                        User
                        <span className="text-gray-800 dark:text-white font-bold">
                            23722873
                        </span>
                        has been deleted form database.
                    </p>
                    <div className="flex items-center justify-between gap-4 w-full mt-8">
                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CookieAlert:React.FC = () => {
    return (  
        <div className="w-72 bg-white rounded-lg shadow-md p-6">
            <div className="w-16 mx-auto relative -mt-10 mb-3">
                <img className="-mt-1" src="/icons/cookie.svg" alt="cookie"/>
            </div>
            <span className="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">
                We care about your data, and we&#x27;d love to use cookies to make your experience better.
            </span>
            <div className="flex items-center justify-between">
                <a className="text-xs text-gray-400 mr-1 hover:text-gray-800" href="#">
                    Privacy Policy
                </a>
                <div className="w-1/2">
                    <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                        See more
                    </button>
                </div>
            </div>
        </div>
    )
}

export const ConfirmationCard:React.FC = () => {
    return (        
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
            <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                    <svg width="40" height="40" className="mt-4 w-12 h-12 m-auto text-indigo-500" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z">
                        </path>
                    </svg>
                    <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                        Remove card
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                        Are you sure you want to delete this card ?
                    </p>
                    <div className="flex items-center justify-between gap-4 w-full mt-8">
                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                            cancel
                        </button>
                        <button type="button" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}