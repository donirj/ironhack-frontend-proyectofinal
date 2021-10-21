import React, { useEffect, useContext } from "react";
import ProductsContext from "./../context/Products/ProductsContext";

import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

export default function Products() {
  const ctx = useContext(ProductsContext);

  const { products, getAllProducts } = ctx;

  // SIDE EFFECT - USEEFFECT

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      {/* PRODUCTOS */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                    src={product.pictureUrl}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                  />
                </div>
                <div className="flex-1 p-4 space-y-2 flex flex-col">
                  <h3 className="text-sm font-medium text-gray-900">
                    <Link to={`/productos/${product._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex-1 flex flex-col justify-end">
                    <p className="text-sm italic text-gray-500">
                      {product.available}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>

                  <Link to={`/productos/${product._id}`}>
                    <button
                      type="button"
                      className="inline-flex items-center 
                      px-2.5 py-1.5 border border-transparent
                       text-xs font-medium rounded shadow-sm text-white
                        bg-gray-700 hover:bg-gray-700 focus:outline-none 
                        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Ver detalles
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr />
      {products.length === 0 ? <ClipLoader /> : products.map((e) => e.name)}

      <hr />
    </div>
  );
}
