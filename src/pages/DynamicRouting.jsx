import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DynamicRouting() {
  let [singleProduct, setSingleProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const product = async () => {
      let { data } = await axios.get(
        `https://dummyjson.com/product/${id}`
      );
      setSingleProduct(data);
    };
    product();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-5xl">

          <div className="flex flex-col md:flex-row gap-10 items-center">

            <div className="w-full md:w-1/2">
              <img
                src={singleProduct.thumbnail}
                alt={singleProduct.title}
                className="h-96 w-full object-cover rounded-lg"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                {singleProduct.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {singleProduct.description}
              </p>

              <p className="text-2xl font-semibold text-indigo-600 mb-2">
                $ {singleProduct.price}
              </p>

              <p className="text-yellow-500 text-lg">
                Rating: {singleProduct.rating}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}