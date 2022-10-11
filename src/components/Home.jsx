import React from 'react'
import data from '../data'

function Home() {
  return (
    <div className="max-w-[1240px] m-auto px-4 text-white">
      <h2 className="text-2xl uppercase py-4">Destacados</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map( item => {
          return (
            <div key={item.id} className="text-white w-full h-[250px] relative hover:cursor-pointer hover:scale-110">
              <img className="absolute top-0 left-0 w-full h-full object-cover rounded-xl" src={item.imgUrl} alt={item.title} />
              <div className="absolute bottom-3 left-3 right-3 text-black flex justify-between items-center">
                <h2 className="text-xl">{item.title}</h2>
                <p className="text-xl">${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Home