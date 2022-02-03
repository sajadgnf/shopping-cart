import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

//styles
import styles from './ProductDetails.module.scss'

const ProductDetails = () => {
    const params = useParams()
    const id = params.id
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProducts(response.data)
                setLoading(false)
            })
    }, [])

    const { image, title, description, category, price } = products

    return (
        <>
            {
                loading ?
                    <p className='loading'></p> :
                    <div className={styles.detailsContent}>
                        <img className={styles.productImage} src={image} alt="product" />
                        <div className={styles.info}>
                            <h3 className={styles.info_title}>{title}</h3>
                            <p className={styles.info_text}>{description}</p>
                            <p className={styles.category}><span>Category:</span> {category}</p>
                            <div className={styles.info_footer}>
                                <p className={styles.price}>{price}$</p>
                                <button onClick={() =>navigate(-1)}>Back</button>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default ProductDetails;