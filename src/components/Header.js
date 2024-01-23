import React from 'react'

import logo from '../assets/svg/Logo-burger-house.svg';
import icon from '../assets/svg/ico-bag-clickAndCollect.svg';
import Button from './Button';

export const Header = () => {
  return (
    <div className='relative z-10 flex items-center justify-between py-10'>
        <div className='w-full'>
            <img src={logo} alt='Burger House App' className='w-64'/>
         </div>
         <div className="  w-full text-maron ">
            <div className='flex item-center justify-end'>
            
            <img src={icon} alt='Burger House App' className='w-5 h-5 mr-1'/>
            <span>Commandez votre repas en ligne</span>
            </div>

            <div className='flex items-center justify-end mt-5'>
                <Button className=' tracking-widest mr-2' color='maron'>Inscription</Button>
                <Button className=' tracking-widest' >Connexion</Button>
            </div>
            
         </div>
         
     </div>
    
  )
}
