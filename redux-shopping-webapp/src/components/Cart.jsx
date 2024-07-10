//import React from 'react'
import { useSelector } from "react-redux";



export default function Cart() {
    const products = useSelector(state => state.cart);




    const cards = products.map(product => (
        <div key={product.id} className="w-full mb-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
             <img className="w-1/3 h-auto object-cover " src={product.image}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-l mb-2">{product.title}</div>
                        <p className="text-gray-700 text-base">
                            {product.price}$
                        </p>
                    </div>
                <div className="px-6 pt-4 pb-2">
                    <button onClick={()=> addToCart(product)} className="font-mono font-bold bg-gray-500 text-white rounded py-1 px-3 hover:bg-slate-300 hover:text-black">Add To Cart</button>
                </div>
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
