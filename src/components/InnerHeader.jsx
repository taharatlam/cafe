import React from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import bg from '@/images/bg.png'
import header from '@/images/header.png'
import line from '@/images/line.svg'
import Menu from '@/components/Menu'

const InnerHeader = () => {
  return (
    <>
        <header className='main-header menu-header'>
            <div className='header-inner'>
                <Image src={bg} alt='bg' />
                
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6 col-12 text-center'>
                            <div className='banner-con'>
                                <h1>
                                What’s Cooking?
                                Only the Good Stuff
                                </h1>
                                <Button type='link' text='Order Now' link='/#contact' center />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
        <section className='sec menu-sec'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10 col-12'>
                        <Menu />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default InnerHeader