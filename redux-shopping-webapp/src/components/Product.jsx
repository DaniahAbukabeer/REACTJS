import { useState, useEffect } from "react";

const Product = () => {

    const [products, getProducts] = useState([]);

    useEffect(()=>{
        //calling the api
        fetch('https://fakestoreapi.com/products')
        .then(data=> data.json())
        .then(result=> getProducts(result));
    },[]);

    const cards = products.map(product => (
        <div key={product.id} className="">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
             <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="font-mono font-bold bg-gray-500 rounded py-1 px-3 hover:bg-slate-300 hover:text-black">Click me</button>
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
