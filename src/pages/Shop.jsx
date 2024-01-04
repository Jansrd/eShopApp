import React from 'react'
import { PRODUCTS } from '../products'
import Product from './Product'
import '../style/Shop.css'

const Shop = () => {
    return (
        <div className="shop">
            <div className="shop__title">
                <h1>PedroTech Shop</h1>
                <p>jel promjena ovo</p>
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