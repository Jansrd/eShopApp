import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'

const Product = ({ data }) => {
    const { id, productName, price, productImage } = data
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    return (
        <div className="product">
            <img src={productImage} alt="" />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <button className='product__add__button' onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
        </div>
    )
}

export default Product