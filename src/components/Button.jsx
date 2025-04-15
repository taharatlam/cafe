import React from 'react'
import Link from 'next/link'
import arrow from '@/images/arrow.svg'
import Image from 'next/image'

const Button = ({type, text, link, light = false, onClick, center = false}) => {
    if(type === 'btn'){
        return (
            <button onClick={onClick} className={`main-btn ${light ? 'light' : ''} ${center ? 'center' : ''}`}>
               <span>{text}</span>
               <Image src={arrow} alt="arrow" />
            </button>
        )
    }else{
        return (
          <Link href={link} className={`main-btn ${light ? 'light' : ''} ${center ? 'center' : ''}`}>
              <span>{text}</span>
              <Image src={arrow} alt="arrow" />
          </Link>
        )
    }
}

export default Button