import React from 'react';
import { pictures } from '../../assets/pictures';
export default function HomePage() {

    const background = pictures.orangeBilding;
  return (
    <div className='flex justify-center mx-0 px-0'>
      <div
        className='max-w-screen mx-0 px-0 h-screen bg-cover bg-center'
        style={{backgroundImage: `url(${pictures.orangeBilding})`}}
        
      >
        {/* <img src={pictures.orangeBilding} className='-z-10'/> */}

        <h1 className='z-10 text-9xl font-mono font-extrabold text-white'>
            Homes That Matches
        </h1>
        {/* Other content can go here */}
      </div>
    </div>
  ); 
}
