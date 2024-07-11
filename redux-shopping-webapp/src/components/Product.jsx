import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add} from '../store/cartSlice';
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
            <div className="max-w-sm h-full rounded overflow-hidden shadow-lg flex flex-col">
             <img className="w-full h-auto object-cover " src={product.image}/>
                <div className="px-6 py-4 flex-grow">
                    <div className="font-bold text-l mb-2">{product.title}</div>
                        <p className="text-gray-700 text-sm">
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
