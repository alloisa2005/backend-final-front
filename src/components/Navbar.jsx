import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {HiMenuAlt3 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5';

function Navbar() {

  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav);

  return (
    <div className='h-[80px] max-w-[1240px] m-auto px-4 flex justify-between items-center text-white'>
      <h1 className='z-20 text-3xl font-bold text-[color:var(--primary-green)] hover:cursor-pointer'>E<span className='text-white'>commerc</span>E</h1>
      <ul className='space-x-8 text-lg hidden md:flex uppercase'>
        <Link to={'/' } className='hover:cursor-pointer hover:scale-110'>Home</Link>        
        <Link to={'/store' } className='hover:cursor-pointer hover:scale-110'>Store</Link>
        <li className='hover:cursor-pointer hover:scale-110'>Login</li>
        <Link to='/admin'><IoSettingsOutline size={24} /> </Link>
      </ul>

      <div onClick={handleNav} className='md:hidden'>
        {nav ? <CgClose size={28} /> : <HiMenuAlt3 size={28} />}
      </div>

      <div className={nav ? 'z-10 md:hidden fixed top-0 left-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in duration-300' : 'md:hidden fixed top-0 left-[-100%] w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in duration-300'}>        
        <ul className='pt-24 uppercase font-bold px-4 flex flex-col'>
          <Link to={'/'} onClick={handleNav} className='p-4 hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Home</Link>
          <Link to={'/store'} onClick={handleNav} className='p-4 hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Store</Link>
          <li onClick={handleNav} className='p-4 hover:cursor-pointer hover:scale-105 border-b border-b-gray-400'>Login</li>          
          <div className='mt-8 w-full px-8 flex justify-between'>
            <BsFacebook size={30} className='hover:cursor-pointer' />
            <BsTwitter size={28} className='hover:cursor-pointer' />
            <BsInstagram size={28} className='hover:cursor-pointer' />
          </div>
        </ul>
      </div>

    </div>
  )
}

export default Navbar