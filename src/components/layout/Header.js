import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// styles
import styles from './Header.module.scss'

// image
import cardImg from '../../assets/images/cart.svg'

// context
import { cartContext } from '../../context/CartContextProvider'


const Header = () => {
    const { state } = useContext(cartContext)


    return (
        <div className={styles.navbarContainer}>
            <button className={styles.productsBtn}><Link to='/products'>products</Link></button>

            <Link to='/shopCart'>
                <div className={styles.cartButton}>
                    <p>{state.itemsCounter}</p>
                    <img className={styles.cartImg} src={cardImg} alt="cart" />
                </div>
            </Link>
        </div >
    );
};

export default Header;