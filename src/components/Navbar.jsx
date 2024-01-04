import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import '../style/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to='/'>Shop</Link>
                <Link to='/cart'>
                    <FaCartShopping />
                </Link>
            </div>
        </div>
    )
}

export default Navbar