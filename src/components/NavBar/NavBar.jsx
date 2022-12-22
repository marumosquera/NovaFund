import { Link } from 'react-router-dom'
import React from 'react'
import { ContactButton } from '../ContactButton/ContactButton'
import './NavBar.css'

export const NavBar = () => {
  return (
    
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <Link to="/">
  <span class="flex items-center">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white logo-title">FundMyCrypto</span>
  </span>
  </Link>
  <div class="flex md:order-2 sohne-text">
      <div class="sohne-text"> <ContactButton cta={"Get in touch"} /> </div>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 sohne-text" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

      <li>
        <Link to="/">
        <span class=" sohne-text block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">HOME</span>
        </Link>
      </li>
      <li>
      <Link to="/about">
        <a href="#" class=" sohne-text block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ABOUT</a>
        </Link>
      </li>
      <li>
      <Link to="/know-us">
        <a href="#" class=" sohne-text block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">KNOW US</a>
        </Link> </li>
      <li>
      <Link to="/contact">
        <a href="#" class="sohne-text block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CONTACT</a>
        </Link> </li>
    </ul>
  </div>
  </div>
</nav>

  )
}
