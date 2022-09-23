import { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './style.css';

export default function Social(){

  useEffect(() => {
    gsap.from('.social_item', {
      opacity: 0,
      x: -25,
    });

    gsap.to('.social_item', {
      opacity: 1,
      delay: 4,
      duration: 3,
      x: 0,
      ease: 'expo.Out',
      stagger: .2
    });
  }, []);

  return (
    <div className='social'>
      <ul className='social__list'>
        <li className='social_item'><FaFacebookF className='social_icon' /></li>
        <li className='social_item'><FaInstagram className='social_icon' /></li>
        <li className='social_item'><FaTwitter className='social_icon' /></li>
      </ul>
    </div>
  )
}