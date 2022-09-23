import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import './style.css';

export default function Overlay(){
  const first = useRef();
  const second = useRef();
  const third = useRef();

  useEffect(() => {
    gsap.to(first.current, {
      delay: .5,
      duration: 1,
      top: '-100%',
      ease: 'expo.inOut'
    });

    gsap.to(second.current, {
      delay: .7,
      duration: 1,
      top: '-100%',
      ease: 'expo.inOut'
    });

    gsap.to(third.current, {
      delay: .9,
      duration: 1,
      top: '-100%',
      ease: 'expo.inOut'
    });
  }, []);

  return (
    <>
      <div className='overlay first' ref={first} />
      <div className='overlay second' ref={second} />
      <div className='overlay third' ref={third} />
    </>
  )
}