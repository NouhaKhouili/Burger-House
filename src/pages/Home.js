import React from 'react'

import { TopHero } from '../components/TopHero'
import { LastProduct } from '../components/LastProduct'
import { Product } from '../components/Product'
import { Event } from '../components/Event'
import { Booking } from '../components/Booking'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
        <TopHero/>

        <LastProduct/>
        <Product/> 
        <Event/>
        <Booking/>
        <Footer/>
        
    </div>
  )
}
