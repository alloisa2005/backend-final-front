import React from 'react'

function CarouselItem({item}) {
  return (
    <div className="text-white w-full h-[250px] relative hover:cursor-pointer rounded-lg overflow-hidden">
      <img className="absolute top-0 left-0 w-[95%] h-full object-contain " src={item.foto} alt={item.nombre} />
      <div className="px-2 py-1 bg-black/80 rounded-md absolute bottom-3 left-2 w-[90%] mx-auto text-[color:var(--primary-green)] flex justify-between items-center">
        <h2 className="text-lg md:text-xl font-bold">{item.nombre}</h2>
        <p className="text-lg md:text-xl font-bold">${item.precio}</p> 
      </div>
    </div>
  )
}

export default CarouselItem