import React from 'react'
import shoppingCart from '../assets/shopping-cart.png'
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('home');

  return (
    <div className='w-3/4 mx-auto h-10 bg-grey my-5 rounded'>
      <nav className='relative mx-5 flex items-center h-full justify-between mr-0'>
          <ul className='relative flex text-white text-sm gap-8'>
            <li>
              <a href="#" className='relative group pb-1.5'>
                Home
                <span className='absolute left-0 bottom-0 h-1 w-full bg-secondary
                scale-x-0 transition-transform duration-300 group-hover:scale-x-100' />
              </a>
            </li>
            <li>
              <a href="#" className='relative group pb-1.5'>
                Guides
                <span className='absolute left-0 bottom-0 h-1 w-full bg-secondary
                scale-x-0 transition-transform duration-300 group-hover:scale-x-100' />
              </a>
            </li>
            <li>
              <a href="#" className='relative group pb-1.5'>
                Videos
                <span className='absolute left-0 bottom-0 h-1 w-full bg-secondary
                scale-x-0 transition-transform duration-300 group-hover:scale-x-100' />
              </a>
            </li>
            <li>
              <a href="#" className='relative group pb-1.5'>
                News
                <span className='absolute left-0 bottom-0 h-1 w-full bg-secondary
                scale-x-0 transition-transform duration-300 group-hover:scale-x-100' />
              </a>
            </li>
          </ul>
          <div className='relative flex items-center gap-2 mr-0'>
            <input type="text" 
            className='w-full h-8 outline-none rounded px-2 text-sm bg-transparent text-white font-light
            border border-white'/>
            <button className='bg-dark px-5 py-1 rounded'>
              <img src={shoppingCart} alt="shopping cart" className='w-6'/>
            </button>
          </div>
      </nav>
    </div>
  );
}