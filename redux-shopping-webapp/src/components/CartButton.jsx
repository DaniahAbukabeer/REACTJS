import React from "react";

import cartIcon from '../assets/cart-3-svgrepo-com.svg';
import { useSelector } from "react-redux";


const CartButton = () =>{

    const products = useSelector(state => state.cart);

    const totalItems = products.reduce((acc, products)=> acc + products.quantity,0);

    return(
        <button className="flex items-center space-x-2 bg-blue-300 rounded-full px-4 py-4 hover:bg-blue-500 focus:outline-none cursor-pointer">
            <img src={cartIcon} className="h-6 w-6"/>
            <span className="text-white">{totalItems}</span>
        </button>
    );
};


export default CartButton;