import React, { useContext } from 'react'
import { PRODUCTS } from '../products'
import CartItem from '../components/CartItem'
import { ShopContext } from '../context/ShopContextProvider'
import '../style/Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate()

    const checkOutHandle = () => {
        alert('Thanks for shopping with us!')
    }

    return (
        <div className="cart">

            <div className="cart">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>
            {totalAmount > 0 ?
                <>
                    <div>
                        <h1>Your Cart Items</h1>
                    </div>
                    <div className="checkout">
                        <p>Subtotal: ${totalAmount}</p>
                        <button onClick={() => navigate('/')}>Continue Shopping</button>
                        <button onClick={checkOutHandle}>Checkout</button>
                    </div>
                </>
                :
                <div className="checkout__empty">
                    <h1>Your Cart is empty</h1>
                    <button onClick={() => navigate('/')}>Continue Shopping</button>
                </div>
            }
        </div>
    )
}

export default Cart