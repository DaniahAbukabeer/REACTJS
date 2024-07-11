//import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {remove, increment, decrement} from '../store/cartSlice';



export default function Cart() {
    const products = useSelector(state => state.cart);

    const dispatch = useDispatch();
    const removeFromCart = (id) =>{
        dispatch(remove(id));
    };

    const handleIncrement = (product) =>{
        dispatch(increment({id: product.id}));
    }; 

    const handleDecrement = (product) =>{
        dispatch(decrement({id: product.id}));
    };

    


    const cards = products.map(product => (
        <div key={product.id} className="w-full mt-5 mb-4">
            <div className="max-w rounded overflow-hidden shadow-lg">
             <img className="px-6 py-3 w-1/3 h-auto object-cover " src={product.image}/>
                <div className="px-6 py-4 flex justify-between" >
                    <div className="text-l font-semibold mb-2">{product.title}</div>
                        <p className="text-blue-700  text-xl font-extrabold">
                            {product.price}$
                        </p>
                    </div>
                    <div className="mb-6">
                        <span className="bg-blue-100 rounded-full py-3">

                        <button className="mr-2 px-5 py-2 transition-all  bg-blue-300 rounded-full hover:bg-blue-500 hover:cursor-pointer" onClick={()=> handleIncrement(product)}>+</button>
                        <span className="mx-2 text-2xl font-semibold">{product.quantity}</span>
                        <button className="ml-2 px-5 py-2 transition-all bg-blue-300 rounded-full hover:bg-blue-500 hover:cursor-pointer" onClick={()=>handleDecrement(product)}>-</button>
                        </span>

                    </div>
                {/* <div className="px-6 pt-4 pb-2 flex justify-start mb-4">
                    <button onClick={()=>removeFromCart(product.id)}  className="font-mono font-bold bg-red-500 text-white rounded py-1 px-3 hover:bg-slate-300 hover:text-black">Remove Item</button>
                </div> */}
            </div>
        </div>
    ));




  return (
    <div className="container mx-auto">
    
    {/* {JSON.stringify(products)}  */}
    {/* this is a way to check the json file if it was pulled from the api correctly or not */}
    <div className="grid grid-cols-1 gap-4">
        {cards}
    </div>
</div>
  )
}
