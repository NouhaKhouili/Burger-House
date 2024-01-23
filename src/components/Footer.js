import React from 'react'
import { Container } from './Container'
import bg from '../assets/images/bg-footer.jpg'
import { MapPinIcon ,EnvelopeIcon } from '@heroicons/react/24/solid'
import logo from '../assets/svg/Logo-burger-house-white.svg'
import { FlowbiteFooter } from './FlowbiteFooter'

export const Footer = () => {
  return (
    <Container>
          <div className="relative lg:mb-20 p-5 text-white">
        <img src={bg} alt="Un plan de travail de cuisine ou l'on conçoit un hamburger" className="bg-black absolute top-0 left-0 w-full h-full object-cover z-0" />
          <div className='relative  h-96 z-10 grid grid-cols-2 '>
            <div className=' w-full h-full'>
              <img src={logo} alt='logo' className='w-2/3 mt-10 p-5'></img>
              <p className='mt-10'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>  

            <div className='w-full h-full flex flex-col items-center justify-center '>
            <div className='flex items-center '>
                <MapPinIcon className='w-10 h-10 mr-5'></MapPinIcon>
                <span className='uppercase font-extrabold text-lg tracking-tighter'>3 kaire eddine bacha Moknine, 5050 Tunis</span>
            </div> 

            <div className='flex items-center mt-6 '>
                < EnvelopeIcon className='w-10 h-10 mr-5'></EnvelopeIcon>
                <span className='uppercase font-extrabold text-lg tracking-tighter'>khouili.nouha@gmail.com</span>
            </div>  
            
              </div>  
          </div>
          <div className='relative h-10 z-10'>
           
             <FlowbiteFooter/>
            
          </div>       
        {/* <div className="relative grid md:grid-cols-2 z-10">
          <div className="w-full p-5 md:mt-20 mt-10 md:mb-28">
            <img  alt="Logo burger house" className="w-2/3"/>
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. 
            </p>
          </div>
          </div> */}
          </div>
    </Container>
  )
}
