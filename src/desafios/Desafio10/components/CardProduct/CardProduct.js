import React from 'react'
import { useNavigate } from 'react-router';
import styles from './CardProduct.module.css';

const CardProduct = ({product}) => {

    const navigate = useNavigate();

    function verifyItem() {
        navigate(`/products/${product.id}`);
    }

    return (
        <div className={styles.card} onClick={verifyItem}>
            <img className={styles.productImage} src={product.fotos[0].src} />
            <p className={styles.productName}>{product.nome}</p>
        </div>
    )
}

export default CardProduct
