import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='container'>
        <div className='navbar '>
          <Image src={assets.logo} width={180}  alt='' id='img'  />
          <button id='btn'>Get Started</button>

        </div>
      
    </div>
  )
}

export default Header
