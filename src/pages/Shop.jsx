import React from 'react'
import { PRODUCTS } from '../products'
import Product from '../components/Product'
import '../style/Shop.css'

const Shop = () => {
    return (
        <div className="shop">
            <div className="shop__title">
                <h1>eShop</h1>
                <p>our products</p>
            </div>
            <div className="products">
                {
                    PRODUCTS.map((product) => (
                        <Product data={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Shop