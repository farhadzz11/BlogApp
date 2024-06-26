import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='container'>
        <div className='navbar '>
          <Image src={assets.logo} width={180}  alt='' id='img'  />
          <button id='btn'>Get Started <Image src={assets.arrow} /></button>

        </div>

        <div className='container-text'>
          <h1 >Latest Blog</h1>
          <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, magnam!</p>

        </div>
      
    </div>
  )
}

export default Header
