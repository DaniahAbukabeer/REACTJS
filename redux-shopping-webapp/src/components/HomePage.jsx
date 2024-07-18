
import React from 'react'
import bigPicture from '../assets/man-chooses-clothes-virtual-fitting-room_442409-483.jpg'


const HomePage = ()=>{


    return(
        <div className='flex justify-between'>
           <img src={bigPicture} className='w-3/4 h-auto'/>
           <div className='flex justify-center flex-col '>
                <hr/>
                <h1 className='text-4xl font-sans text-right font-extrabold' >WEEKEND SALE!</h1>
                <hr className='my-3'/>
                <h3 className='text-lg text-right font-bold mb-5'>Get the best deals</h3>
                <p className='font-sans leading-[1.10rem] text-right my-5'>
                    Today, tomorrow, the next day, and them days after that, period, you probalbe had the right idea. 
                    right? but the wrong bee.
                </p>
                <button className='my-5 text-white font-sans font-semibold py-3 px-6 cursor-pointer rounded-full hover:bg-current-30 hover:text-black' style={{backgroundColor: "#5924EE"}}>SHOP NOW</button>
           </div>
        </div>
    );

};


export default HomePage;