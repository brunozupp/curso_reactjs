import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css';

const Header = () => {
    return (
        <nav className={styles.container}>
            <NavLink to="products" className={styles.buttonNav} activeStyle={{backgroundColor: "#d7d7d7"}}>Produtos</NavLink>
            <NavLink to="contact" className={styles.buttonNav} activeStyle={{backgroundColor: "#d7d7d7"}}>Contato</NavLink>

        </nav>
    )
}

export default Header
