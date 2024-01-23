import React from 'react'
import { Container } from './Container'
import AliceCarousel from 'react-alice-carousel';
import '../css/carosel.css'
import image1 from '../assets/images/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import image2 from '../assets/images/Product-1.jpg'
import image3 from '../assets/images/Product-2.jpg'



import { Slide } from './Slide';



const items = [
   <Slide category="category 1" title='title 1' image={image1}>
    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </p>
    </Slide>,
    <Slide category="category 1" title='title 2' image={image2}>
    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </p>
    </Slide>,
    <Slide category="category 1" title='title 3' image={image3}>
    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </p>
    </Slide>
  ];

export const Event = () => {
  return (
    <Container>
        <div className=' mb-20   shadow-2xl'>
        <AliceCarousel autoPlay autoPlayInterval='4000' disableButtonsControls infinite mouseTracking animationType="fadeout"  items={items} />
        </div>
     
     </Container>
  )
}
