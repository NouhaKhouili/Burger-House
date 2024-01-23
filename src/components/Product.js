import React from 'react'
import Button from './Button'
import { Container } from './Container'
import { HeadingTitle } from './HeadingTitle'
import { Heading } from './Heading'
import burger1 from '../assets/images/Product-1.jpg'
import burger2 from '../assets/images/Product-2.jpg'
import burger3 from '../assets/images/Product-3.jpg'

export const Product = () => {
  return (
    <Container>
        <HeadingTitle >
        toujours des délicieux burger
        </HeadingTitle>
        <Heading  theme='gras' alignement='center' className='mt-5 ' >Choisissez et savourrez</Heading>

        <p className='text-center mt-5 '>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>

        <div className=' grid grid-cols-3 gap-x-1 mb-20 mt-10   '>
            <div className=' w-full h-full'>
                <div className='relative w-full h-72'>
                <img src={burger1} alt='' className='bg-yellow absolute top-0 left-0 w-full h-full object-cover z-0'></img>
                </div>
                <div className='flex flex-col items-center justify-center  px-5 pb-5'>
                    <Heading variant='h3'>Lorem Ipsum</Heading>
                    <p className='text-center'> Lorem Ipsum is simply dummy text of the printing</p>
                    <Button color='red' className=" font-secondery">Acheter maintenant</Button>
                </div>
            </div>

            <div className=' w-full h-full'>
                <div className='relative w-full h-72'>
                <img src={burger2} alt='' className='bg-yellow absolute top-0 left-0 w-full h-full object-cover z-0'></img>
                </div>
                <div className='flex flex-col items-center justify-center  px-5 pb-5'>
                    <Heading variant='h3'>Lorem Ipsum</Heading>
                    <p className='text-center'> Lorem Ipsum is simply dummy text of the printing</p>
                    <Button color='red' className=" font-secondery">Acheter maintenant</Button>
                </div>
            </div>

            <div className=' w-full h-full'>
                <div className='relative w-full h-72'>
                <img src={burger3} alt='' className='bg-yellow absolute top-0 left-0 w-full h-full object-cover z-0'></img>
                </div>
                <div className='flex flex-col items-center justify-center  px-5 pb-5'>
                    <Heading variant='h3'>Lorem Ipsum</Heading>
                    <p className='text-center'> Lorem Ipsum is simply dummy text of the printing</p>
                    <Button color='red' className=" font-secondery">Acheter maintenant</Button>
                </div>
            </div>
            

            
            
           
        </div>
        
    </Container>
  )
}
