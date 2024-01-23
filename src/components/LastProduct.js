import React from 'react'
import { Container } from './Container'
import image1 from '../assets/images/LastProducts-1.jpg';
import image2 from '../assets/images/LastProducts-2.jpg';
import image3 from '../assets/images/LastProducts-3.jpg';

export const LastProduct = () => {
  return (
    <Container>
        <div className=' w-full h-96 px-11 my-20 grid gap-9 grid-cols-2 grid-rows-2 uppercase text-white'>

        <div className='relative  bg-yellow h-full row-span-2 p-7'>
        <img src={image1} className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md'  alt='burger'></img>
            <div className='relative z-10'>
           <span className='block font-bold text-lg '>essayez-le aujourd'hui</span> 
           <span className=''>burger le plus populaire</span> 
           </div>
            
          
        </div>
        <div className='relative bg-maron h-full p-7'>
        <img src={image2} className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt='burger'></img>
        <div className='relative z-10'>
           <span className='block font-bold text-lg '>plus de plaisir</span> 
           <span className=''>plus de gôut</span> 
           </div>
        </div>
        <div className='relative bg-blue h-full p-7'>
        <img src={image3} className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt='burger'></img>
        <div className='relative z-10'>
         <span className='block font-bold text-lg '>  frais & pimenté</span> 
         </div>
        </div>
        </div>
    </Container>
  )
}
