import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
function Footer() {
  return (
    <div className="text-white h-[80px] max-w-[1240px] m-auto px-4 flex justify-between items-center">
      <h1 className='text-xl font-bold text-[color:var(--primary-green)] hover:cursor-pointer'>E<span className='text-white'>commerc</span>E</h1>
      
      <div className="flex space-x-4">
        <BsFacebook size={28} className="hover:cursor-pointer"/>
        <BsTwitter size={28} className="hover:cursor-pointer" />
        <BsInstagram size={28} className="hover:cursor-pointer" />
      </div>
    </div>
  )
}

export default Footer