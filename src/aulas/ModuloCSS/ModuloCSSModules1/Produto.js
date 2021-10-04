import React from 'react'
import styles from './Produto.module.css';

const Produto = () => {

    console.log(styles); // vai ser um objeto

    return (
        <div>
            <h1 className={styles.titulo}>Notebook</h1>
            <p className={styles.preco}>R$ 20000</p>
            <p className={styles["descricao-produto"]}>Um produto muito legal</p>
            <button className={styles.comprar}>Comprar</button>
        </div>
    )
}

export default Produto
