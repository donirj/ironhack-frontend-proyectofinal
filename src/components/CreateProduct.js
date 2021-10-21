import React, { useState, useContext } from "react";
import ProductsContext from "./../context/Products/ProductsContext";

export default function CreateProduct() {
  //ESTADO LOCAL
  const ctx = useContext(ProductsContext);

  const { products, addProduct } = ctx;

  //ESTADO LOCAL
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    pictureUrl: "",
    description: "",
    available: false,
  });

  // FUNCIONES DEL ESTADO LOCAL (LAS QUE ESTAN EN LOS INPUTS DE ABAJO)
  const handleForm = (event) => {
    event.preventDefault();

    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addProduct(newProduct);
  };

  return (
    <div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          action="#"
          method="POST"
        >
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre del producto
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    id="first-name"
                    autoComplete="given-name"
                    onChange={(e) => {
                      handleForm(e);
                    }}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Precio
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={newProduct.price}
                    onChange={(e) => {
                      handleForm(e);
                    }}
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Descripcion
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={newProduct.description}
                    onChange={(e) => {
                      handleForm(e);
                    }}
                    id="email-address"
                    autoComplete="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    url de imagen
                  </label>
                  <input
                    type="text"
                    name="pictureUrl"
                    value={newProduct.pictureUrl}
                    onChange={(e) => {
                      handleForm(e);
                    }}
                    id="street-address"
                    autoComplete="street-address"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Disponibilidad
                  </label>
                  <input
                    type="checkbox"
                    name="available"
                    value={newProduct.available}
                    onChange={(e) => {
                      handleForm(e);
                    }}
                    id="city"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Crear producto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
