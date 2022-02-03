import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from './Product.module.scss'

//functions
import { shorten, isInCart, quantityCount } from '../../helper/functions'

//image
import trash from '../../assets/images/trash.svg'

//context
import { cartContext } from '../../context/CartContextProvider';

const Product = ({ product }) => {

    const { state, dispatch } = useContext(cartContext)

    return (
        <div className={styles.productContainer}>
            <img className={styles.productImg} src={product.image} alt="product" />
            <h3 className={styles.title}>{shorten(product.title)}</h3>
            <p className={styles.price}>{product.price}$</p>
            <div className={styles.btnsContainer}>
                <button><Link className={styles.detailsBtn} to={`/products/${product.id}`}>Details</Link></button>
                <div className={styles.buyBtns}>
                    <div className={styles.quantityBtns}>

                        {quantityCount(state, product.id) > 1 && <button className={styles.quantityBtn} onClick={() => dispatch({ type: "DECREASE", payload: product })}>-</button>}
                        {quantityCount(state, product.id) === 1 && <button className={styles.quantityBtn} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product })}><img src={trash} alt="trash" /></button>}

                        <p>{quantityCount(state, product.id)}</p>

                        {
                            isInCart(state, product.id) ?
                                <button className={styles.quantityBtn} onClick={() => dispatch({ type: "INCREASE", payload: product })}>+</button> :
                                <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>Add to Cart</button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

