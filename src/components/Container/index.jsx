import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import './style.css';

export default function Container(){

  useLayoutEffect(() => {
    gsap.from('.left_container', {
      top: '130%',
    });

    gsap.to('.left_container', {
      delay: 1,
      duration: 2,
      top: '0%',
      ease: 'expo.inOut',
      stagger: .2
    });

    gsap.from('.right_container', {
      bottom: '130%',
    });

    gsap.to('.right_container', {
      delay: 1,
      duration: 2,
      bottom: '0%',
      ease: 'expo.inOut',
      stagger: .2
    });
  }, []);

  return (
    <>
      <div className='left_container' />
      <div className='right_container' />
    </>
  )
}