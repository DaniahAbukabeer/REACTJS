import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add} from '../store/cartSlice';
import _ from "lodash"
//import { getProducts } from "../store/productSlice";

const Product = () => {
    const dispatch = useDispatch();
    //const {data: products} = useSelector(state => state.products)
    const [products, getProducts] = useState([]);

    useEffect(()=>{
        //dispatch an action for fetchProduct
       //dispatch(getProducts());



        //calling the api
        fetch('https://fakestoreapi.com/products')
        .then(data=> data.json())
        .then(result=> getProducts(result));
    },[]);

    const addToCart = (product) =>{
        //dispatch an add action
        dispatch(add(product));
    }

    const cards = products.map(product => (
        <div key={product.id} className="h-full">
            <div className=" h-full rounded overflow-hidden shadow-lg flex flex-col">
             <img className="w-full py-6 px-12 h-[50vh] object-contain border-2 border-gray-100 " src={product.image}/>
                <div className="px-6 py-4 flex-grow">
                    <div className="font-bold text-lg h-16 leading-tight">{_.truncate( product.title, {length:60, omission:'..'})}</div>
                        <p className="text-gray-700 text-sm">
                            {product.price}$
                        </p>
                    </div>
                <div className="px-4 pt-4 pb-2">
                    <button onClick={()=> addToCart(product)} className="cursor-pointer font-mono font-bold w-full py-3 bg-blue-500 text-white rounded py-1 px-3 hover:bg-slate-300 hover:text-black">Add To Cart</button>
                </div>
            </div>
        </div>
    ));


    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-8">Product Dashboard</h1> 
            
            {/* {JSON.stringify(products)}  */}
            {/* this is a way to check the json file if it was pulled from the api correctly or not */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards}
            </div>
        </div>
    );
}

export default Product;
