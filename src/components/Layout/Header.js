import React, { useContext } from "react";

import { Link } from "react-router-dom";
import UsersContext from "../../context/Users/UsersContext";

export default function Header() {
  const ctxUser = useContext(UsersContext);

  const { user, authStatus, logoutUser } = ctxUser;

  return (
    <header class="bg-yellow-400">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div class="flex items-center">
            <a href="/">
              <span class="sr-only">Workflow</span>
              <img
                class="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div class="hidden ml-10 space-x-8 lg:block">
              <Link
                to="/productos"
                class="text-base font-medium text-white hover:text-indigo-50"
                key="Solutions"
              >
                Lista de productos
              </Link>

              <Link
                to="/productos/crear"
                class="text-base font-medium text-white hover:text-indigo-50"
                key="Pricing"
              >
                Crear producto
              </Link>

              <a
                href="/nosotros"
                class="text-base font-medium text-white hover:text-indigo-50"
                key="Docs"
              >
                Sobre nosotros
              </a>

              <a
                href="/contacto"
                class="text-base font-medium text-white hover:text-indigo-50"
                key="Company"
              >
                Contacto
              </a>
            </div>
          </div>

          {authStatus ? (
            <div class="ml-10 space-x-4">
              <Link
                to="/perfil"
                class="inline-block bg-gray-700 py-2 px-4
                  border border-transparent rounded-md text-base
                   font-medium text-white hover:bg-opacity-75"
              >
                Mi perfil
              </Link>
              <a
                href="#"
                class="inline-block bg-white py-2 px-4 
                 border border-transparent rounded-md text-base
                  font-medium text-gray-700 hover:bg-indigo-50"
                onClick={() => {
                  logoutUser();
                }}
              >
                Cerrar sesión
              </a>
            </div>
          ) : (
            <div class="ml-10 space-x-4">
              <Link
                to="/iniciar-sesion"
                class="inline-block bg-gray-700 py-2 px-4
                  border border-transparent rounded-md text-base
                   font-medium text-white hover:bg-opacity-75"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/crear-cuenta"
                class="inline-block bg-white py-2 px-4 
                 border border-transparent rounded-md text-base
                  font-medium text-gray-700 hover:bg-indigo-50"
              >
                Registrarme
              </Link>
            </div>
          )}
        </div>
        <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <a
            href="/productos"
            class="text-base font-medium text-white hover:text-indigo-50"
            key="Solutions"
          >
            Lista de productos
          </a>

          <a
            href="/productos/crear"
            class="text-base font-medium text-white hover:text-indigo-50"
            key="Pricing"
          >
            Crear productos
          </a>

          <a
            href="/nosotros"
            class="text-base font-medium text-white hover:text-indigo-50"
            key="Docs"
          >
            Sobre nosotros
          </a>

          <a
            href="/contacto"
            class="text-base font-medium text-white hover:text-indigo-50"
            key="Company"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
