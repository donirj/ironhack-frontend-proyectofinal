import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import ProductsContext from "./../context/Products/ProductsContext";

export default function SingleProduct() {
  const ctx = useContext(ProductsContext);

  const { product, getSingleProduct } = ctx;
  const { id } = useParams();

  // SIDE EFFECT - USEEFFECT

  useEffect(() => {
    getSingleProduct({ id });
  }, [id]);

  return (
    <>
      {product ? (
        <>
          <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-2xl mx-auto lg:max-w-none">
              <img src={product.pictureUrl} width="400" height="400" />
              <br />
              {/* Product */}

              {/* Product info */}
              <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Modelo: {product.name}
                </h1>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl text-gray-900">
                    Precio: {product.price}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full bg-gray-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Add to bag
                </button>
                <br />
                <a href="#" className="group inline-flex text-base font-medium">
                  <span className="text-gray-500 hover:text-gray-700">
                    Lifetime Guarantee
                  </span>
                </a>
                <br />
                <br />
              </div>
            </div>
          </main>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
