import React from 'react'

import { BiTrash } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'

function AdminItem({item}) {
  return (
    <div className="rounded-md border border-gray-500 shadow-sm shadow-white flex justify-between items-center p-2 gap-x-2">
      <img className="w-[100px] object-cover hover:cursor-pointer" src={item.foto} alt={item.nombre} />
      <div className="flex-1 pl-3">
        <p className="text-xl font-bold">{item.nombre}</p>
        <p className="text-lg">${item.precio}</p>
        <p className="text-lg">Stock: <span className={item.stock < 5 ? "text-primaryGreen" : "text-white"}>{item.stock}</span></p>
      </div>
      <div className="flex gap-x-3 items-center px-4">
        <AiOutlineEdit size={26} className="hover:text-primaryGreen hover:cursor-pointer hover:scale-110 transition-all duration-300"/>
        <BiTrash size={26} className="hover:text-primaryGreen hover:cursor-pointer hover:scale-110 transition-all duration-300"/>
      </div>
    </div>
  )
}

export default AdminItem