import React, { useContext } from 'react';
import {Link} from "react-router-dom"

// functions
import { shorten } from '../../helper/functions';

// styles
import styles from "./Cart.module.scss"

// image
import trash from "../../assets/images/trash.svg"

// context
import { cartContext } from "../../context/CartContextProvider"

const Cart = (props) => {

    const { dispatch } = useContext(cartContext)

    const { image, title, quantity, price, id } = props.data
    return (
        <div className={styles.cartContent}>
            <Link to={`/products/${id}`}>
            <img className={styles.productImage} src={image} alt="item image" />
            </Link>
            <div className={styles.info}>
                <h3 className={styles.title}>{shorten(title)}</h3>
                <p className={styles.price}>{price}$</p>
            </div>
            <p className={styles.quantity}>{quantity}</p>

            <div className={styles.cartBtns}>
                {
                    quantity > 1 ?
                        < button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button> :
                        < button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}><img src={trash} alt="trash" /></button>
                }

                <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
            </div>
        </div >
    );
};

export default Cart;