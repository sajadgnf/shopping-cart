import React, { useContext } from 'react';

//styles
import styles from './Store.module.scss'

//context
import { productsContext } from '../context/ProductsContextProvider';

//component
import Product from './shared/Product'

const Store = () => {

    const { products, loading } = useContext(productsContext)

    return (
        <>
            {
                loading ?
                    <p className='loading'></p> :
                    <div className={styles.productsContainer}>
                        {products.map(product => <Product key={product.id} product={product} />)}
                    </div>
            }
        </>
    )
}

export default Store;