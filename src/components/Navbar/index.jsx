import { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai';
import { gsap } from 'gsap';
import './style.css';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenuMobile(){
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    gsap.from('.logo', {
      opacity: 0,
      y: -20,
    });

    gsap.to('.logo', {
      opacity: 1,
      delay: 2,
      duration: 2.5,
      y: 0,
      ease:'expo.inOut'
    });

    gsap.from('.nav__item', {
      opacity: 0,
      y: 25,
    });
    
    gsap.to('.nav__item', {
      opacity: 1,
      y: 0,
      delay: 2.3,
      duration: 3,
      stagger: .2,
      ease:'expo.inOut',
    });

    gsap.from('.cart_btn', {
      opacity: 0,
      x: 20,
    });
    
    gsap.to('.cart_btn', {
      opacity: 1,
      y: 0,
      delay: 3,
      duration: 3,
      x: 0,
      ease:'expo.inOut',
    });

    gsap.from('.search_btn', {
      opacity: 0,
      x: 20,
    });
    
    gsap.to('.search_btn', {
      opacity: 1,
      y: 0,
      delay: 2.5,
      duration: 3,
      x: 0,
      ease:'expo.inOut',
    });
  }, []);

  return (
    <header>
      <nav className='nav body_layout'>
        <div className='nav_insider'>
          <div className='logo'>
            <h3 className='nav__icon'>Levi's <sup>&reg;</sup></h3>
          </div>

          <div className={`nav__menu ${isOpen ? 'show' : ''}`} id='nav__menu'>
            <ul className='nav__list'>
              <li className='nav__item'><a href='#' className='nav__link'>Man</a></li>
              <li className='nav__item'><a href='#' className='nav__link'>Women</a></li>
              <li className='nav__item'><a href='#' className='nav__link'>Kids</a></li>
              <li className='nav__item search_btn'>
                <button className='search_btn'>
                  <AiOutlineSearch className='icon_search' />
                </button>
              </li>
              <li className='nav__item cart_btn'>
                <button className='cart_btn'>
                  <AiOutlineShopping className='icon_cart' />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className='cart_btn_wrapper'>
          <button className='search_btn'><AiOutlineSearch className='icon_search' /></button>
          <button className='cart_btn'><AiOutlineShopping className='icon_cart' /></button>
        </div>

        <button className='menu_toggle_btn' id='menu_toggle_btn' onClick={toggleMenuMobile}>
          <AiOutlineMenu className='nav__icon' />
        </button>
      </nav>
    </header>
  )
}