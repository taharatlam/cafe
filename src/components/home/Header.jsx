import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import bg from '@/images/bg.png'
import header from '@/images/header.png'
import line from '@/images/line.svg'

const Header = () => {
  return (
    <header className='main-header'>
        <div className='header-inner'>
            <Image src={bg} alt='bg' />
            <Image src={line} alt='bg' className='line' />
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6 col-12 text-center'>
                        <div className='banner-con'>
                            <h1>
                            Bite Into Vietnam 
                            One Banh Mi at a Time
                            </h1>
                            <Button type='link' text='Order Now' link='/#menu' center />
                        </div>
                    </div>
                </div>
                <div className='bn-img'>
                    <Image src={header} alt='header' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header