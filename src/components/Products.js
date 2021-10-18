import React, { useEffect, useContext } from 'react'
import ProductsContext from './../context/Products/ProductsContext'

import ClipLoader from "react-spinners/ClipLoader";

export default function Products() {

    const ctx = useContext(ProductsContext)

    const {
        products,
         getAllProducts
    } = ctx
 
    // SIDE EFFECT - USEEFFECT
 
    useEffect(() => {
 
     getAllProducts()
 
    }, [])

    return (
        <div>
             <hr />
            {
                products.length === 0 ?
                <ClipLoader />
                :
                products.map(e => e.name)
            }
            
    
            <hr />
        </div>
    )
}
