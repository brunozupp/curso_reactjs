import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/products/Products.js'
import Home from './pages/home/Home.js'
import ProductDescription from './pages/products/ProductDescription.js'
import Contact from './pages/contact/Contact.js'
import Header from './components/Header/Header.js'
import styles from './Desafio10.module.css';
import './GeneralStyles.css';

const Desafio10 = () => {
    return (
        <div className={styles.container}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:product" element={<ProductDescription />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Desafio10
