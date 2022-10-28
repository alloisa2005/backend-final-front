import { useQuery } from "react-query";
import { getDestacados } from '../api/api'

import CarouselItem from "./CarouselItem";

import Slider from "react-slick";
import Spinner from "./Spinner";

function CarouselList({titulo}) {  

  const {data: destacados, isLoading, isError, error } = useQuery('destacados', getDestacados)  

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };  

  if(isLoading){
    return <Spinner />
  }

  if(isError) {
    return <div className="w-full h-[80px] flex justify-center items-center">
      <h1 className="text-xl font-bold">Sorry, {error.message}, try again in a moment</h1> 
    </div>   
  }

  return (
    <div>
      <h2 className="text-2xl uppercase py-4">{ titulo }</h2>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
      <Slider {...settings} className="w-[95%] mx-auto px-2 md:px-0">
        {destacados.map((item) => {
          return <CarouselItem key={item.id} item={item} />;
        })}
      </Slider>
    </div>
  );
}

export default CarouselList;
