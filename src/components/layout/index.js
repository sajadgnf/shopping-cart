import React from 'react';
import Footer from './Footer';
import Header from './Header';

// styles
import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;