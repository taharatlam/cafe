import React from 'react'
import text from '@/images/c-text.svg'
import Image from 'next/image'
import m1 from '@/images/m1.jpg'
import blur from '@/images/blur.svg'
import Button from './Button'
const BottomSec = () => {
  return (
    <section className='bottom-sec'>
        <Image src={text} alt='bottom' className='text-img' />
        <Image src={blur} alt='bottom' className='blur-img' />
        <Button type='link' text='Get Started' center link='/#contact' />
        {/* <div className='img-slider-container'>
            <div className='img-slider'>
                {
                    Array.from({length: 5}).map((_, index) => (
                        <div className='img-slide' key={index}>
                            <Image src={m1} alt='bottom' />
                        </div>
                    ))
                }
                {
                    Array.from({length: 5}).map((_, index) => (
                        <div className='img-slide' key={index}>
                            <Image src={m1} alt='bottom' />
                        </div>
                    ))
                }
            </div>
        </div> */}
    </section>
  )
}

export default BottomSec