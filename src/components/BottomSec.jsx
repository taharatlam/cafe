import React from 'react'
import text from '@/images/text.svg'
import Image from 'next/image'
import m1 from '@/images/m1.jpg'
const BottomSec = () => {
  return (
    <section className='bottom-sec'>
        <Image src={text} alt='bottom' />
        <div className='img-slider-container'>
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
        </div>
    </section>
  )
}

export default BottomSec