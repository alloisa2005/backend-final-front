import React, { useState, useEffect } from 'react'
import Slider from "react-slick";

function Home() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect( () => {
    const loadData = async () => {
      setLoading(true);
      let response = await fetch('http://localhost:8080/api/productos/');
      let obj = await response.json(); 
      setData(obj.result)
      setLoading(false);
    }

    loadData();
  },[])

  return (
    <div className="max-w-[1240px] m-auto px-4 text-white">
      <h2 className="text-2xl uppercase py-4">destacados</h2>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
        {loading ? <h2 className="text-white text-xl">Cargando</h2> : 
        <Slider {...settings} className="w-[95%] mx-auto px-2 md:px-0">
          {data.map( item => {
            return (              
              <div className="text-white w-full h-[250px] relative hover:cursor-pointer hover:scale-105">
                <img className="absolute top-0 left-0 w-[95%] h-full object-cover rounded-xl" src={item.imageUrl} alt={item.title} />
                <div className="px-2 py-1 bg-black rounded-md absolute bottom-3 left-2 w-[90%] mx-auto text-[color:var(--primary-green)] flex justify-between items-center">
                  <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
                  <p className="text-lg md:text-xl font-bold">${item.price}</p> 
                </div>
              </div>
            );
          })}
        </Slider>
        }
      {/* </div> */}
    </div>
  )
}

export default Home