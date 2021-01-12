import React from 'react';

export const DescriptionList:React.FC = () => {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                Applicant Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
                </p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                    Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Margot Foster
                    </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                    Application for
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Backend Developer
                    </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                    Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    margotfoster@example.com
                    </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                    Salary expectation
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    $120,000
                    </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                    About
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                    Attachments
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-2 flex-1 w-0 truncate">
                            resume_back_end_developer.pdf
                            </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Download
                            </a>
                        </div>
                        </li>
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-2 flex-1 w-0 truncate">
                            coverletter_back_end_developer.pdf
                            </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Download
                            </a>
                        </div>
                        </li>
                    </ul>
                    </dd>
                </div>
                </dl>
            </div>
        </div>
    )
}

export const SimpleList:React.FC = () => {
    return (
        <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
            <ul className="flex flex-col divide divide-y">
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/6.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                Jean Marc
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Developer
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                    </div>
                </li>
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/10.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                Designer
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Charlie Moi
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                    </div>
                </li>
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/3.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                CEO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Marine Jeanne
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                    </div>
                </li>
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/7.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                CTO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Boby PArk
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export const SimpleListWithAction:React.FC = () => {
    return (
        <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
            <ul className="flex flex-col divide divide-y">
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/6.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                Jean Marc
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Developer
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/10.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                Designer
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Charlie Moi
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/3.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                CEO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Marine Jeanne
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/7.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                CTO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Boby PArk
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export const SimpleListWithHeader:React.FC = () => {
    return (
        <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="px-4 py-5 sm:px-6 border-b w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    User database
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                    Details and informations about user.
                </p>
            </div>
            <ul className="flex flex-col divide divide-y">
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/6.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                Jean Marc
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Developer
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/10.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                Designer
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Charlie Moi
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/3.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                CEO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Marine Jeanne
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/7.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium dark:text-white">
                                CTO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Boby PArk
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export const BlocList:React.FC = () => {
    return (        
        <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <ul className="flex flex-col">
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/6.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                Jean Marc
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Developer
                            </div>
                        </div>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/10.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                Designer
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Charlie Moi
                            </div>
                        </div>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/3.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                CEO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Marine Jeanne
                            </div>
                        </div>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/7.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                CTO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Boby PArk
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export const BlocListWithDescription:React.FC = () => {
    return (        
        <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <ul className="flex flex-col">
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/6.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                Jean Marc
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Developer
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/10.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                Designer
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Charlie Moi
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/3.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                CEO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Marine Jeanne
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/7.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                CTO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Boby PArk
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}


export const BlocListWithDescriptionAndAction:React.FC = () => {
    return (        
        <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <ul className="flex flex-col">
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/6.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                Jean Marc
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Developer
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/10.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                Designer
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Charlie Moi
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/3.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                CEO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Marine Jeanne
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/7.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                CTO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Boby PArk
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export const BlocListWithDescriptionAndActionAndHeader:React.FC = () => {
    return (        
        <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    User database
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                    Details and informations about user.
                </p>
            </div>
            <ul className="flex flex-col">
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/6.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                Jean Marc
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Developer
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/10.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                Designer
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Charlie Moi
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/3.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                CEO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Marine Jeanne
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src="/images/person/7.jpg" className="mx-auto rounded-full h-10 w-10 "/>
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                CTO
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                Boby PArk
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                            6:00 AM
                        </div>
                        <button className="w-24 text-right flex justify-end">
                            <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export const DescriptionBlocList:React.FC = () => {
    return (  
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Mickael Poulaz
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Best techno
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            React JS
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            m.poul@example.com
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Salary
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            $10,000
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            About
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export const DescriptionBlocListWithHeader:React.FC = () => {
    return (  
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    User database
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about user.
                </p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Mickael Poulaz
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Best techno
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            React JS
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            m.poul@example.com
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Salary
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            $10,000
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            About
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}