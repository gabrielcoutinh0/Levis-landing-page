import { useEffect } from 'react';
import { gsap } from 'gsap';
import { GrPrevious, GrNext } from 'react-icons/gr';
import productItems from './productItems';

import './style.css';
import { useState } from 'react';

export default function Product(){

  useEffect(() => {
    gsap.from('.direction_btn', {
      opacity: 0,
      x: -20,
    });

    gsap.to('.direction_btn', {
      opacity: 1,
      delay: 3.2,
      x: 0,
      ease: 'power3.Out',
      stagger: .2
    });

    gsap.from('.dot', {
      opacity: 0,
      x: -20,
    });

    gsap.to('.dot', {
      opacity: 1,
      delay: 3.2,
      x: 0,
      ease: 'power3.Out',
      stagger: .2
    });

    gsap.from('.product_img', {
      opacity: 0,
    });

    gsap.to('.product_img', {
      opacity: 1,
      delay: 3.6,
      duration: 1.5,
      ease: 'expo.Out',
      stagger: .2
    });

    gsap.from('.product_title', {
      opacity: 0,
      y: 100,
    });

    gsap.to('.product_title', {
      opacity: 1,
      delay: 4.2,
      duration: 1.8,
      y: 0,
      ease: 'expo.inOut',
    });

    gsap.from('.product_type', {
      opacity: 0,
      y: 100,
    });

    gsap.to('.product_type', {
      opacity: 1,
      delay: 4.6,
      duration: 1.8,
      y: 0,
      ease: 'expo.inOut',
    });
    
  }, []);

  const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
      if(slideIndex !== productItems.length){
        setSlideIndex(slideIndex + 1);
      }else if(slideIndex === productItems.length){
        setSlideIndex(1)
      }
    }

    const prevSlide = () => {
      if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1);
      }else if(slideIndex === 1){
        setSlideIndex(productItems.length)
      }
    }

    const moveDot = index => {
      setSlideIndex(index);
    }

  return (
    <>
      {productItems.map((item, index) => {
        return(
          <div 
            key={item.id}
            className={slideIndex === index + 1 ? 'slide active-slide' : 'slide'}
          >
            <img src={item.src} className='product_img' alt={item.title} />
            <div className='product_text'>
              <h1 className='product_title'>Levi's <sup>&reg;</sup></h1>
              <p className='product_type'>{item.title}</p>
            </div>
          </div>
        );
      })}

      <div className='bottom_nav'>
        <div className='slide_nav_wrapper'>
          <button 
            className='prev direction_btn' 
            onClick={prevSlide}
          >
            <GrPrevious className='direction_icon' />
          </button>
          <button 
            className='next direction_btn' 
            onClick={nextSlide}
          >
            <GrNext className='direction_icon' />
          </button>
        </div>
        <div className='dots_wrapper'>
          <ul className='dots'>
            {Array.from({length: 5}).map((item, index) => (
              <li
                key={index}
                onClick={() => moveDot(index + 1)} 
                className={slideIndex === index + 1 ? 'dot active' : 'dot'} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}