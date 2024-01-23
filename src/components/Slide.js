import React from 'react'

import { Heading } from './Heading'

export const Slide = ({children,category,title,image}) => {
  return (
    <div className=' grid grid-cols-2 p-6 '>
    <div className=' p-10 mb-10'>
        <Heading variant='h4'  >
            {category}
        </Heading>
        <Heading theme='gras' className='mb-4'>
            {title}
        </Heading>
        <p className=' tracking-wide text-lg leading-relaxed font-light text-gray'>
        {children}
        </p>
    </div>
    <div className='relative w-full h-full '>
    <img src={image} alt={title} className='bg-yellow absolute top-0 left-0 w-full h-full object-cover object-center z-0'></img>
    </div>
</div>


  )
}
