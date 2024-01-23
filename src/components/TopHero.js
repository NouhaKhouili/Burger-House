import React from 'react'
import bg from '../assets/images/bg-food.jpg';
import { Container } from './Container';
import burger from '../assets/images/burger-hero-top.png';
import { Header } from './Header';
import Button from './Button';

export const TopHero = () => {
  return (
    <div className="bg-primary w-full">
    <div className="bg-repeat w-full h-full pb-20 md:pb-40" style={{ backgroundImage: `url(${bg})` }}>
      <Container>
        <Header />
        <div className="relative mt-10 md:mt-28 w-full">
          <img src={burger} className="hidden lg:block absolute z-0 lg:-top-64 right-0" style={{width: '568px'}} alt="Un menu hamburger avec frites et coca cola." />
          <div className="hidden lg:block absolute right-80 top-40 rounded-full bg-red w-40 h-40 p-3">
            <div className="w-full h-full rounded-full border-2 border-dashed border-white text-white flex items-center justify-center">
              <div className="text-center">
                <span className="block font-extrabold">
                  <span className="text-5xl">7</span>.500 Dt
                </span>
                <span className="tracking-widest uppercase text-sm">seulement</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-maron uppercase text-left md:text-center lg:text-left">
            <h1 className="mb-4 font-semibold">C'est le moment de goûter au bon goût des hamburgers.</h1>
            <h2 className="font-secondery shadowTitleSecondary">
              <span className="text-7xl md:text-8xl block">Burger</span> 
              <span className="text-5xl md:text-6xl block sm:inline-block">House</span> 
              <span className="text-4xl ml-0 sm:ml-3">Click<span className="text-red-primary">&</span>collect</span>
            </h2>
            <Button className="mt-5  " color="maron" theme="big">
          Créer mon compte
        </Button>
          </div>
          
        </div>
        
      </Container>
    </div>
  </div>
  )
}
