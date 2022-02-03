import React, { createContext, useState, useEffect } from 'react';

//api
import getProducts from '../services/api';

export const productsContext = createContext()

const ProductsContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
            setLoading(false)
        }

        fetchAPI()
    }, [])

    return (
        <productsContext.Provider value={{products, loading}}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;