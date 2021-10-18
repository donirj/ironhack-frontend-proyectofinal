import React, { useReducer} from 'react'
import ProductsContext from './ProductsContext'
import ProductsReducer from './ProductsReducer'



import axiosClient from '../../config/axios'

 
const ProductsState = (props) => {

    // 1. ESTADO INICIAL
    const initialState = {
        products: []
    }
      
    // 2. CONFIGURACIÓN PRIMORDIAL DE REDUCERS
    // REDUCER - UNA FUNCIÓN, LA ÚNICA AUTORIZADA, PARA CAMBIAR EL ESTADO GLOBAL

    //useReducer
    //a. Archivo con los diferentes escenarios para cambiar estado global
    //b. estado inicial
    //
   const [ globalState, dispatch ] = useReducer(ProductsReducer, initialState)

    // 3. FUNCIONES API / CONEXIÓN A REDUCERS (DISPATCH)
    // ESTAS FUNCIONES DISPARAN A LOS REDUCERS LA ORDEN DE CAMBIAR EL ESTADO GLOBAL

    const getAllProducts = async () => {

        try {
            const res = await axiosClient.get("/api/products/get-all")
            
            const productsFromDB = res.data.data

            dispatch({
                type: "OBTENER_PRODUCTOS",
                payload: productsFromDB
            })

        } catch (error) {
            console.log(error)
        }

    }
 
    const addProduct = async (dataForm) => {

        console.log(dataForm)
        
        try {
            await axiosClient.post("/api/products/create", dataForm)
           return getAllProducts()

        } catch (error) {

            console.log(error)
        }

    }

 
    // 4. RETORNO - PROVEEDORES DE LOS DATOS A LOS COMPONENTES
    return (
        <ProductsContext.Provider
            value={{
               products: globalState.products,
               getAllProducts,
               addProduct
            }}
        >

            { props.children }

        </ProductsContext.Provider>
    )


}

export default ProductsState