import React from 'react'

function DestacadosItem({item}) {
  return (
    <div className="text-white w-full h-[250px] relative hover:cursor-pointer hover:scale-105">
      <img className="absolute top-0 left-0 w-[95%] h-full object-cover rounded-xl" src={item.imageUrl} alt={item.title} />
      <div className="px-2 py-1 bg-black rounded-md absolute bottom-3 left-2 w-[90%] mx-auto text-[color:var(--primary-green)] flex justify-between items-center">
        <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
        <p className="text-lg md:text-xl font-bold">${item.price}</p> 
      </div>
    </div>
  )
}

export default DestacadosItem