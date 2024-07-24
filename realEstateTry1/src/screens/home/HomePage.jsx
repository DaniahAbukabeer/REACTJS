import React from 'react';
import { pictures } from '../../assets/pictures';
import { icons } from '../../assets/icons';
import { colors } from '../../assets/colors';
export default function HomePage() {

    const background = pictures.orangeBilding;
  return (
    <div className='flex justify-center mx-0 px-0'>
      <div
        className='max-w-screen mx-0 px-0 w-screen h-screen bg-cover -z-40 bg-center'
        style={{backgroundImage: `url(${pictures.orangeBilding})`}}
        
      >
        {/* first row */}
        <div className='flex justify-center space-x-44 md:mt-40'>

       
        <h1 className='z-10 text-9xl font-mono font-extrabold text-white'>
            Homes
        </h1>
        <div className='flex items-center'>

        <img src={pictures.building1} className=' rounded-full border-white border-2 w-16 h-16 inline '/>
        <img src={pictures.building2} className='rounded-full border-white border-2 w-16 h-16 inline -ml-5 -z-10'/>
        <img src={pictures.building3} className='rounded-full border-white border-2 w-16 h-16 inline -ml-5 -z-20' />
        <p className='text-white font-light align-text-bottom mx-7'>
            FIND A LENDER WHO CAN <br/>OFFER COMPOTITIVE <br/>MORTAGE
        </p>
        </div>
        </div>
        {/* second row */}
        <div className='flex justify-center -ml-28'>
        <h1 className='z-10 text-9xl font-mono font-extrabold text-white'>That Match.</h1>
        </div>

        {/* third row */}
        <div className='flex justify-between mx-64 mt-16'>
            <div className='flex-col'>
                <img src={icons.star} className='w-14 h-14 mb-6'/>
                <p className='text-white font-light align-text-bottom'>
                    DISCOVER A <br/>PLACE YOU'LL<br/>LOVE TO LIVE
                </p>
                <button style={{backgroundColor: colors.darkdarkGray}} className='hover:cursor-pointer  text-white rounded-full w-f py-2 mt-12'>All catalog <img src={icons.longestArrowRgith} className='ml-1 w-8 h-8 inline'/></button>
            </div>
            <div>

            </div>

        </div>
        
        {/* Other content can go here */}
      </div>
    </div>
  ); 
}
