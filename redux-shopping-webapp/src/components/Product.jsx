import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add} from '../store/cartSlice';
import _ from "lodash"
import cartIcon from '../assets/cart-plus-svgrepo-com.svg';
//import { ReactComponent as CartIcon }from '../assets/cart-plus-svgrepo-com.svg';

//import AnimatedButton from "./AnimatedButton";
//import { setProducts } from "../store/productSlice";

import loadingIcon from '../assets/loading-80-svgrepo-com.svg';

const Product = () => {
    const dispatch = useDispatch();
    //const {data: products} = useSelector(state => state.products)
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [addedToCart, setAddedToCart] = useState({});
    const [isOpenSort, setIsOpenSort] = useState(false);
    const [isOpenFilter,setIsOpenFilter] = useState(false);
    const [sortValue, setSortValue] = useState(0);
    const [filterValue, setFilterValue] = useState([]);
    const [defaultProducts, setDefaultProducts] = useState(
        {
            ratings: [],
            categories: [],
        }
    );
    useEffect(()=>{
        //dispatch an action for fetchProduct
        //dispatch(setProducts());
        
        //calling the api
        setDefaultProducts(
            fetch('https://fakestoreapi.com/products')
            .then(data=> data.json())
            .then(result=> setProducts(result))
        );
     
    },[]);

    // useEffect(()=>{
    //     const sortedProducts = [...products];
    //     if(sortValue == 1)
    //         sortedProducts.sort((a,b)=>a.price - b.price);
    //     else if(sortValue == 2)
    //         sortedProducts.sort((a,b)=>b.price - a.price);
    //     else if(sortValue == 3)
    //         sortedProducts.sort((a,b)=> a.title.localeCompare(b.title));
    //     else if(sortValue == 4)
    //         sortedProducts.sort((a,b)=>b.title.localeCompare(a.title));
        
    //     setProducts(sortedProducts);
    // },[sortValue]);

    const loading = () => {
        return(
            <img 
                                src={loadingIcon}
                                alt="Loading"
                                classNameName="absolute inset-0 m-auto animate-spin"
                                style={{width: '100px', height: '100px'}}
                                />
        );
    }

    const addToCart = (product) =>{
        //dispatch an add action
        setIsLoading(true);
        dispatch(add(product));

        loading();
        setTimeout(()=>{
            // dispatch({type: 'ADD_TO_CART', payload: product});
            // setAddedToCart({[product.id]: true});
            setIsLoading(false);
        }, 500);

    };

    const cards = products.map(product => (
        <div key={product.id} className="h-full ">
            <div className=" h-full rounded-2xl overflow-hidden shadow-lg flex flex-col">
             <img className="w-full py-6 px-12 h-[50vh] object-contain border-2 border-gray-100 " src={product.image}/>
                <div className="px-6 py-4 flex-grow">
                    <div className="font-bold text-lg h-16 leading-tight">{_.truncate( product.title, {length:60, omission:'..'})}</div>
                        <p className="text-gray-700 text-sm font-mono font-bold sm:mt-4 m-2">
                            {product.price}$
                        </p>
                    </div>
                <div className="px-4 pt-4 pb-2">
                    {/* <button onClick={()=> addToCart(product)} className="cursor-pointer font-mono font-bold w-full
                     bg-blue-500 text-white rounded py-1 px-3
                      hover:bg-blue-300 hover:text-blue-900 
                      transition-color duration-200 delay-75"
                      
                      > */}
                      {/* <AnimatedButton /> */}
                        
                      <a onClick={()=> addToCart(product)} className="relative mb-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white  translate-x-full  bg-blue-500  group-active:translate-x-0 ease">
        {/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg> */}
                {/* <img src={cartIcon} className="w-6 h-6"/> */}
                <img className="w-6 h-6 before:translate-x-0 after:translate-x-20 after:delay-1000 select-none" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            {/* <CartIcon fill='white' stroke='currentColor' className='w-6 h-6'/> */}
        </span>
        <span className="absolute flex items-center select-none justify-center w-full h-full text-blue-500 transition-all  transform group-active:translate-x-full ease">Add to Cart</span>
        <span className="relative invisible select-none">Add to cart</span>
    </a>
                        {/* {isLoading && (
                            <img 
                                src={loadingIcon}
                                alt="Loading"
                                className="absolute inset-0 m-auto animate-spin"
                                style={{width: '100px', height: '100px'}}
                                />
                        )}
                        {!isLoading ? 'Add To Cart' : 'Adding...'} */}
                      {/* </button> */}
                </div>
            </div>
        </div>
    ));

    const handelSort = ()=>{
        const sortedProducts = [...products];
        if(sortValue == 0)
            null;//the functionallity to return default unsorted list doesnt work yet
        else if(sortValue == 1){
            //this sorts based on price from high to low
            sortedProducts.sort((a,b)=>b.price - a.price);
        }
        else if(sortValue == 2)
            //this sorts based on price from low to high
            sortedProducts.sort((a,b)=>a.price - b.price);
        else if(sortValue == 3)
            sortedProducts.sort((a,b)=> a.title.localeCompare(b.title));
        else if(sortValue == 4)
            sortedProducts.sort((a,b)=>b.title.localeCompare(a.title));
        setProducts(sortedProducts);
    };


    const handelFilter = ()=> {
        const filteredProducts = [...defaultProducts];
        if(filterValue.ratings.length > 0)
            {
                filteredProducts = filteredProducts.filter(products=> 
                    filterValue.ratings.includes(Math.round(product.ratings.rate))
                );
            }

        if(filterValue.categories.length > 0)
            {
                filteredProducts = filteredProducts.filter(product=>
                    filterValue.categories.includes(product.category)
                );
            }
        setProducts(filteredProducts);
    };

    const clickedSort = (value) => {
        setSortValue(value);
        handelSort();
    }

    const clickedFilter = (value) => {
        setFilterValue([...filterValue, value]);
        handelFilter();
    }


    return (
        <div className="container mx-auto ">
            <div className="flex justify-start">

            <h1 className="text-3xl font-bold font-mono mt-4 mb-8">Product Dashboard</h1> 
            </div>

            <div className="flex justify-start
             space-x-2">
                {/* <button onClick={()=> onclick(condition)}>Sort A-Z</button> */}
{/* SORT BUTTON */}
<div className="mb-3 ml-1">
                    
<button onClick={()=>setIsOpenSort(!isOpenSort)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white select-none bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Sort <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>



{/* <!-- Dropdown menu --> */}
<div id="dropdown" className={`z-10 ${isOpenSort? '' : 'hidden'} max-w-24 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
        <a onClick={()=>clickedSort(0)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white select-none">Default</a>
        </li>
      <li>
        <a onClick={()=>clickedSort(1)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white select-none">Low-High</a>
      </li>
      <li>
        <a onClick={()=>clickedSort(2)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white select-none">High-Low</a>
      </li>
      <li>
        <a onClick={()=>clickedSort(3)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white select-none">A-Z</a>
      </li>
      <li>
        <a onClick={()=>clickedSort(4)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white select-none">Z-A</a>
      </li>
    </ul>
</div>

</div>


{/* FILTER BUTTON */}
<div className="mb-3 mr-1">
        <button onClick={()=>setIsOpenFilter(!isOpenFilter)} id="dropdownDefaultButton2" data-dropdown-toggle="dropdown1" className={`text-white ${isOpenFilter? 'w-44' : 'w-auto'} px-8 select-none bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`} type="button">
         <span className="flex items-center justify-center">

            Filter 
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
         </span>
        </button>

        {/* <!-- Dropdown menu --> */}
    <div id="dropdown1" className={`z-10 ${isOpenFilter? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 px-2 dark:text-gray-200" aria-labelledby="dropdownDefaultButton2">
        <li className="flex justify-start">
            Categories
        </li>
       
        <li>
        <div class="flex justify-start">
          <input id="checkbox-item-1" type="checkbox" value="men's clothing" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">men's clothing</label>
        </div>        
        </li>
        <li>
        <div class="flex justify-start">
          <input id="checkbox-item-1" type="checkbox" value="women's clothing" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">women's clothing</label>
        </div>        
        </li>
        <li>
        <div class="flex justify-start">
          <input id="checkbox-item-1" type="checkbox" value="jewelery" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">jewelery</label>
        </div>        
        </li>
        <li>
        <div class="flex justify-start">
          <input id="checkbox-item-1" type="checkbox" value="electronics" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">electronics</label>
        </div>        
        </li>
        </ul>

    <ul className="py-2 px-2 ">

        <li className="flex jsutify-start text-white ">
            Rating 
        </li>

        
      <li>
      <div class="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">o</label>
        </div>  
      </li>
      <li>
      <div class="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">oo</label>
        </div>  
        </li>
      <li>
      <div class="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ooo</label>
        </div>  
         </li>
      <li>
      <div class="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="4" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">oooo</label>
        </div>  
          </li>
          <li>
      <div class="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="5" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ooooo</label>
        </div>  
          </li>
    </ul>
    
    </div>
</div>
                

            </div>
            
            {/* {JSON.stringify(products)}  */}
            {/* this is a way to check the json file if it was pulled from the api correctly or not */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards}
            </div>
        </div>
    );

    
}

export default Product;
