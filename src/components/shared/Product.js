import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from './Product.module.scss'

//functions
import { shorten, isInCart, quantityCount } from '../../helper/functions'

//image
import trash from '../../assets/images/trash.svg'
import heart from "../../assets/images/heart.svg"
import fillHeart from "../../assets/images/fill-heart.svg"

//context
import { cartContext } from '../../context/CartContextProvider';

const Product = ({ product }) => {

    const { state, dispatch } = useContext(cartContext)
    const [like, setLike] = useState(false)

    return (
        <div className={styles.productContainer}>

            <button onClick={() => setLike(prev => !prev)} className={styles.likeBtn} >
                {
                    like ?
                        <img src={fillHeart} alt='liked' /> :
                        <img src={heart} alt='like' />
                }
            </button>

            <Link className={styles.detailsLink} to={`/products/${product.id}`}>

                <img className={styles.productImg} src={product.image} alt="product" />

                <div className={styles.detailsContainer}>
                    <h3 className={styles.title}>{shorten(product.title)}</h3>
                    <p className={styles.details}>{shorten(product.description)}</p>
                </div>
            </Link >

            <div className={styles.buyBtns}>
                <p className={styles.price}>{product.price}$</p>

                <div className={styles.quantityBtns}>

                    {quantityCount(state, product.id) > 1 && <button className={styles.quantityBtn} onClick={() => dispatch({ type: "DECREASE", payload: product })}>-</button>}
                    {quantityCount(state, product.id) === 1 && <button className={styles.quantityBtn} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product })}><img src={trash} alt="trash" /></button>}

                    {
                        quantityCount(state, product.id) &&
                        <p>{quantityCount(state, product.id)}</p>
                    }

                    {
                        isInCart(state, product.id) ?
                            <button className={styles.quantityBtn} onClick={() => dispatch({ type: "INCREASE", payload: product })}>+</button> :
                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>Add to Cart</button>
                    }
                </div>
            </div>
        </div >
    );
};

export default Product;

