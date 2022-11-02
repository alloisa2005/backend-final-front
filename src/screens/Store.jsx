import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

function Store() {
  return (
    <div className="w-full max-w-[1240px] h-[calc(100vh-80px)] m-auto px-4 text-white">
      <div className="w-full py-2">
        <div className="w-full  flex justify-center items-center bg-white py-2 px-4 rounded-xl">
          <input className="flex-1 text-black outline-none" type="text" placeholder="Search..."/>
          <BiSearchAlt className="text-gray-500" size={28}/>
        </div>
      </div>

      <div className="py-3">
        ajsas
      </div>
    </div>
  )
}

export default Store