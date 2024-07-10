//import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import {remove} from '../store/cartSlice';

export default function Cart() {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const removeToCart = (id) =>{
        dispatch(remove(id));
    }


    const cards = products.map(product => (
        <div key={product.id} className="w-full mb-4">
            <div className="w-full  rounded overflow-hidden shadow-lg">
             <img className="w-1/3 h-auto object-cover " src={product.image}/>
                <div className="px-6 py-4 flex justify-between" >
                    <div className="font-bold text-l mb-2 ">{product.title}</div>
                        <p className="text-gray-700 text-base mx-4 ">
                               {product.price}$
                        </p>
                    </div>
                    <p className="flex justify-start px-6">
                        Category: {product.category}
                    </p>
                   
                <div className="px-6 pt-4 pb-2 scroll-mb-4 flex justify-start">
                    <button onClick={()=> removeToCart(product.id)} className="font-mono font-bold bg-red-500 text-white rounded py-1 px-3 hover:bg-slate-300 hover:text-black">Remove Item</button>
                </div>
            </div>
        </div>
    ));




  return (
    <div className="container w-full my-5">
    
    {/* {JSON.stringify(products)}  */}
    {/* this is a way to check the json file if it was pulled from the api correctly or not */}
    <div className="grid grid-cols-1 gap-4">
        {cards}
    </div>
</div>
  )
}
