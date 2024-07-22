import React from 'react';
import { pictures } from '../../assets/pictures';
export default function HomePage() {
  return (
    <div className='flex justify-center'>
      <div
        className='max-w-screen h-screen bg-cover bg-center'
       
      >
        <img src={pictures.orangeBilding}/>
        {/* Other content can go here */}
      </div>
    </div>
  );
}
