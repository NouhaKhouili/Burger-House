import React from 'react'
import { Container } from './Container'
import assiette from '../assets/images/Assiette-burger-frites.png'
import burger from '../assets/images/Burger.png'
import sauce from '../assets/images/Sauce-pimente.png'
import { Heading } from './Heading'

export const Booking = () => {
  return (
    <Container>
        <div className=' relative mb-20'>
            <img className='absolute -top-20 -left-36 z-10' src={burger} alt=''></img>
            <img className='absolute bottom-0 left-0' src={sauce} alt=''></img>
            <img className='absolute  -bottom-52 -right-96' src={assiette} alt=''></img>
            <div className=' max-w-3xl mx-auto py-20 px-10'>
                <Heading variant='h4' alignement='center'>Réservation</Heading>
                <Heading alignement='center' theme='gras' className='mt-5'>Réserver votre table</Heading>
                <form className='grid grid-cols-2 gap-x-7 gap-y-6 mt-20 '>
                    <div className=''>
                    <label htmlFor="name">Nom </label>
                    <input type='text' name='name' id='name' autoComplete='off' 
                    className=' focus:ring-yellow focus:border block w-full border-gray rounded-md  py-5'
                     placeholder='Nouha KHOUILI'></input>
                    </div>

                    <div className=''>
                    <label htmlFor="email">Email </label>
                    <input type='text' name='email' id='email' autoComplete='off' 
                    className=' focus:ring-yellow focus:border block w-full border-gray rounded-md  py-5'
                     placeholder='khouili.nouha@gmail.com'></input>
                    </div>

                    <div className=' '>
                    <label htmlFor="date">Date </label>
                    <input type='date' name='date' id='date' autoComplete='off' 
                    className=' focus:ring-yellow focus:border block w-full border-gray rounded-md  py-5'
                     placeholder=''></input>
                    </div>

                    <div className=''>
                    <label htmlFor="name">Heure </label>
                    <input type='time' name='name' id='name' autoComplete='off' 
                    className=' focus:ring-yellow focus:border block w-full border-gray rounded-md  py-5'
                     placeholder='Nouha KHOUILI'></input>
                    </div>

                    <div className='h-20'>
                    <label htmlFor="customer" >Nombre des personnes </label>
                    <input type='number' name='customer' id='customer' autoComplete='off' 
                    className=' focus:ring-yellow focus:border block w-full border-gray rounded-md  py-5'
                     placeholder='5'></input>
                    </div>

                    <div className=' h-20'>
                    <label htmlFor="sendBooking" className=' text-sm font-medium invisible'>Trouver votre table</label>
                    <input type='button' name='sendBooking' id='sendBooking' autoComplete='off' 
                    className=' bg-red hover:bg-red-hover font-bold text-white uppercase py-5  w-full rounded-md cursor-pointer  animate' 
                    value='Trouver votre table'
                    ></input>
                    </div>

                    
                 
                    
                </form>
            </div>
        </div>
    </Container>
  )
}
