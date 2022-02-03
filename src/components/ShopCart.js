import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

//context
import { cartContext } from '../context/CartContextProvider'

//components
import Cart from './shared/Cart';

// fuctions
import { useTitle } from '../helper/functions';

// styles
import styles from "./ShopCart.module.scss"

const ShopCart = () => {

    const { state, dispatch } = useContext(cartContext)

    useTitle('Cart')

    return (
        <>
            {
                state.checkout &&
                <div className={styles.checkout}>
                    <h3>Checked Out Successfully</h3>
                    <button><Link to="/products">Buy More</Link></button>
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
                        <h3>Want To Buy?</h3>
                        <button><Link to="/products">Go To Shop</Link></button>
                    </div>
                </div>
            }
        </>
    );
};

export default ShopCart;