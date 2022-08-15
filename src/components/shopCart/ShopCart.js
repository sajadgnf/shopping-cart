import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

//context
import { cartContext } from '../../context/CartContextProvider'

//components
import Cart from '../shared/Cart';

// functions
import { useTitle } from '../../helper/functions';

// styles
import styles from "./ShopCart.module.scss"

// image 
import emptyCart from '../../assets/images/emptyCart.png'

const ShopCart = () => {

    const { state, dispatch } = useContext(cartContext)

    useTitle('Cart')

    return (
        <>
            {
                state.checkout &&
                <div className={styles.checkout}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter !== 0 &&
                < div className={styles.shopCartContainer} >
                    <div className={styles.cartContainer}>
                        {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
                    </div>
                    <div className={styles.paymentFild}>
                        <h3>Total Items: <p>{state.itemsCounter}</p></h3>
                        <h3>Total Payments: <p>{state.totalPrice}</p></h3>
                        <div className={styles.paymentBtns}>
                            <button
                                className={styles.clearBtn}
                                onClick={() => dispatch({ type: "CLEAR" })}>
                                Clear
                            </button>
                            <button
                                className={styles.checkoutBtn}
                                onClick={() => dispatch({ type: "CHECKOUT" })}>
                                Check Out
                            </button>
                        </div>
                    </div>
                </div >
            }
            {
                !state.checkout && state.itemsCounter === 0 &&
                <div>
                    <div className={styles.checkout}>
                        <img className={styles.emptyCartImg} src={emptyCart} alt="empty-cart" />
                        <h3>Cart Is Empty Want To Buy?</h3>
                        <Link to="/products">Go To Shop</Link>
                    </div>
                </div>
            }
        </>
    );
};

export default ShopCart;