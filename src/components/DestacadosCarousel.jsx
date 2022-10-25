import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import DestacadosItem from "./DestacadosItem";
import Spinner from "./Spinner";

function DestacadosCarousel() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    let response = await fetch("http://localhost:8080/api/productos/");
    let obj = await response.json();
    console.log(obj.result);
    setData(obj.result);
    setLoading(false);
  };

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

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl uppercase py-4">destacados</h2>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
      {loading ? (
        <Spinner />
      ) : (
        <Slider {...settings} className="w-[95%] mx-auto px-2 md:px-0">
          {data.map((item) => {
            return <DestacadosItem item={item} />;
          })}
        </Slider>
      )}
      {/* </div> */}
    </div>
  );
}

export default DestacadosCarousel;
