import React from 'react'

function Footer() {
    return (
        <footer className="bg-white rounded-md shadow m-4 mt-0 dark:bg-slate-900">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://ChessWe.netlify.app/" className="hover:underline">ChessWe</a> All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://linkedin.com/in/uditdev" className="hover:underline me-4 md:me-6">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/uditdev1" className="hover:underline me-4 md:me-6">Github</a>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer
