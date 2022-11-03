import React, { useRef, useState, useEffect } from "react";
import { useQuery } from "react-query";

import { BiSearchAlt, BiTrash } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";

import { getDestacados } from "../api/api";
import Spinner from "../components/Spinner";
import AdminItem from "../components/AdminItem";

function Admin() {
  const [isLoading, setIsLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [tempProductos, setTempProductos] = useState([]);

  const nombreProd = useRef();
  const handleOnChange = () => {
    let pp = productos.filter((prod) =>
      prod.nombre.toLowerCase().includes(nombreProd.current.value.toLowerCase())
    );
    setTempProductos(pp);
  };

  useEffect(() => {
    const fetchData = async () => {
      let prods = await getDestacados();
      setProductos(prods);
      setTempProductos(prods);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-[1240px] m-auto px-4 py-8 text-white">
      <div className="w-full">
        <p className="pb-3 text-center text-2xl uppercase">
          Administrar Productos
        </p>
        <div className="w-full">
          <div className="w-[90%] max-w-[1000px] mx-auto flex items-center gap-2 bg-white border px-4 py-2 rounded-lg">
            <input
              onChange={handleOnChange}
              ref={nombreProd}
              className="flex-1 text-lg outline-none text-black"
              type="text"
              placeholder="Buscar..."
            />
            <BiSearchAlt
              size={28}
              className="text-gray-400 hover:cursor-pointer hover:text-black transition-all duration-300 ease-in"
            />
          </div>
        </div>

        <div className="pt-4 w-full">
          <div className="w-[90%] max-w-[750px] mx-auto flex justify-center py-2">
            <button className="rounded-lg shadow-sm shadow-white hover:text-primaryGreen hover:shadow-primaryGreen font-bold uppercase border px-3 py-2">
              Añadir Producto
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="w-full">
            <Spinner />
          </div>
        ) : (
          <div className="pt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {tempProductos.map((item) => {
              return <AdminItem key={item.id} item={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
