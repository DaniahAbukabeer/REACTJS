import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBarPanel() {
  return (
    <div>


<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-5 p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Redux Toolkit</span>
    </a>

    <div className="  md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse mt-0 border-0 dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href='#' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Products</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      
    </div>
  )
}
