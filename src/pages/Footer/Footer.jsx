import React from "react";
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
      <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 <a class="hover:underline">FundMyCrypto</a>. All Rights
          Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/about">
              <a class="mr-4 hover:underline md:mr-6 ">About</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a class="mr-4 hover:underline md:mr-6">Contact us</a>
            </Link>
          </li>
          <li>
            <Link to="/know-us">
              <a class="mr-4 hover:underline md:mr-6">Know us</a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
