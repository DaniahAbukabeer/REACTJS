//import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {remove, increment, decrement} from '../store/cartSlice';
import { Navigate, useNavigate } from "react-router-dom";
import React, {useEffect} from 'react';
import LoadingIcon from '../assets/loading-80-svgrepo-com.svg'

export default function Cart() {
    const products = useSelector(state => state.cart);
    const navigate = useNavigate();
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

    useEffect(()=> {
        if(products.length === 0)
            {
                const timer = setTimeout(()=>{
                    navigate('/');
                }, 2000);

                return () => clearTimeout(timer);
            }
    }, [products,navigate]);


    const cards = products.map(product => (
        <div key={product.id} className="w-full mt-5 mb-4">
            <div className="max-w rounded overflow-hidden shadow-lg">
             <img className="px-6 py-3 w-1/3 h-auto object-cover " src={product.image}/>
                <div className="px-6 py-4 flex justify-between" >
                    <div className="text-l font-semibold mb-2">{product.title}</div>
                        <p className="text-blue-700 transition-all text-xl font-extrabold font-mono">
                            {Math.floor(product.price * product.quantity)}$
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




  if (products.length>0)
    return (

    <div className="container mx-auto">
            <div className="flex justify-start">

<h1 className="text-3xl font-bold font-mono mt-4 mb-8">Cart</h1> 
</div>    
    {/* {JSON.stringify(products)}  */}
    {/* this is a way to check the json file if it was pulled from the api correctly or not */}
    <div className="grid grid-cols-1 gap-4">
        {cards}
    </div>
</div>
  )
  else 
  return (
<div>
<div className="flex justify-start">

<h1 className="text-3xl font-bold font-mono mt-4 mb-8">Cart</h1> 
</div>

<div className="flex justify-center items-center flex-wrap min-h-screen">
<div className="text-center  bg-slate-50 w-full shadow-md rounded-2xl py-6 px-6">

    <h1 className="font-mono text-blue-700 font-extrabold text-4xl">
        Nothing to see here just yet... 
    </h1>
    <h4 className="font-mono text-blue-400 font-semibold text-m my-3">Go do some shopping T^T</h4>
        <img src={LoadingIcon} className="absolute inset-0 m-auto animate-spin"
        style={{width: '100px', height:'100px'}}/>
</div>
</div>
        </div>
);
}
