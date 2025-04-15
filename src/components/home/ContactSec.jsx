import React from 'react'
import Image from 'next/image'
import heart from '@/images/heart.svg'
import ContactForm from '../ContactForm'
import img2 from '@/images/img2.png'
const ContactSec = () => {
  return (
    <section className='sec con-sec' id="contact">
        <div className='container'>
            <div className='row align-items-center'>   
                <div className='col-lg-5 col-12'>
                    <div className='con-left'>
                        <h2 className='sub-head'>
                            <Image src={heart} alt='line' />
                            <span>love to hear from you</span>
                        </h2>
                        <h3 className='sec-head'>
                            We are open to listen
                        </h3>
                        <ContactForm />
                    </div>
                </div>
                <div className='col-lg-6 offset-lg-1 col-12'>
                    <Image src={img2} className='w-100 h-auto' alt='contact' />
                </div>
            </div>
        </div>

    </section>
  )
}

export default ContactSec