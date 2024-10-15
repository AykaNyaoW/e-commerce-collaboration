import React from 'react';
import shoppingCart from '../assets/shopping-cart.svg';
import searchIcon from '../assets/search.svg';
import { useState } from 'react';

// Menu Items
const menuItems = ['Home', 'Guides', 'Videos', 'News'];

export default function Navbar() {

  return (
    <div className='flex flex-col w-full h-auto mx-auto py-3 md:w-3/4 bg-grey md:w-3/4 md:p-0 md:h-10 md:my-5 
    md:rounded'>
      <nav className='relarive w-full h-full flex flex-col-reverse items-center gap-2 px-4
      md:flex-row md:w-auto md:mx-5 md:justify-between mr-1'>

        <ul className='relative flex text-white text-sm gap-8 w-full justify-between md:justify-start'>
          {menuItems.map((item) => (
            <li key={item}>
              <a href="#" className='relative group pb-1.5 '>
                {item}
                <span className='absolute left-0 bottom-0 h-1 w-full bg-secondary
                  scale-x-0 transition-transform duration-300 group-hover:scale-x-100' />
              </a>
            </li>
          ))}
        </ul>

        <div className='relative w-full md:w-3/5 flex items-center gap-2 '>
          <div className='relative w-full'>
            <input
              type="text"
              className='w-full h-8 outline-none rounded px-2 pr-10 text-sm bg-transparent text-white font-light border border-white'
              placeholder="Search. . ."
              spellCheck="false"
            />
            <button className='absolute flex items-center right-1 top-1/2 top-1/2 transform -translate-y-1/2 items-center bg-dark px-2 py-1 rounded'>
              <img src={searchIcon} alt="search icon" className='w-5 h-auto invert'/>
            </button>
          </div>
          <button className='bg-dark px-3 rounded hover:bg-secondary transition-colors duration-300'>
            <img src={shoppingCart} alt="shopping cart" 
            className='w-8 invert'/>
          </button>
        </div>
      </nav>
    </div>
  );
}
