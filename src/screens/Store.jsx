import React from 'react'
import { BiSearchAlt, BiDrink } from 'react-icons/bi'

function Store() {
  return (
    <div className="w-full max-w-[1240px] h-[calc(100vh-80px)] m-auto px-4 text-white">
      <div className="w-full py-2">
        <div className="w-full  flex justify-center items-center bg-white py-2 px-4 rounded-xl">
          <input className="flex-1 text-black outline-none" type="text" placeholder="Search..."/>
          <BiSearchAlt className="text-gray-500" size={28}/>
        </div>
      </div>

      <div className="group absolute left-0 top-[80px] mt-2 w-[60px] overflow-hidden h-[100vh] hover:w-[140px] ease-in duration-300">
        <div className="w-full h-full p-2 flex flex-col justify-center items-center">
          <div className="w-full flex items-center justify-start gap-2 py-2 hover:text-[color:var(--primary-green)] hover:cursor-pointer">
            <BiDrink size={28} />
            <p className="hidden group-hover:block">Bebidas</p>
          </div>
          <div className="w-full flex items-center justify-start gap-2 py-2 hover:text-[color:var(--primary-green)] hover:cursor-pointer">
            <BiDrink size={28} className=""/>
            <p className="hidden group-hover:block">Tecnología</p>
          </div>
          <div className="w-full flex items-center justify-start gap-2 py-2 hover:text-[color:var(--primary-green)] hover:cursor-pointer">
            <BiDrink size={28} className=""/>
            <p className="hidden group-hover:block">Snacks</p>
          </div>
        </div>
      </div>

      <div className="py-3">
        ajsas
      </div>
    </div>
  )
}

export default Store