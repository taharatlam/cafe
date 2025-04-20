import React from 'react'
import logo from '@/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='main-footer'>
        <div className='footer-inner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-12'>
                        <Link href='/' className='footer-logo'>
                            <Image src={logo} alt='logo' />
                        </Link>
                        <p className='ft-para para'>
                            At Banh Mi & More, we’re on a mission to bring the heart of Vietnam to your plate — one flavorful bite at a time.
                        </p>
                    </div>
                    <div className='col-lg-3 offset-lg-1 col-12'>
                        <h3 className='ft-title'>
                            Quick Links
                        </h3>
                        <ul className='ft-links'>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/#about'>About</Link>
                            </li>
                            <li>
                                <Link href='/menu'>Menu</Link>
                            </li>
                            <li>
                                <Link href='/#contact'>Contact</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className='col-lg-4 col-12 d'>
                        <h3 className='ft-title'>
                            Contact Us
                        </h3>
                        <ul className='ft-con'>
                            <li>
                                <span>Email</span>
                                <Link href='mailto:info@banhmiandmore.com'>info@banhmiandmore.com</Link>
                            </li>
                            {/* <li>
                                <span>Phone</span>
                                <Link href='tel:+1234567890'>+1234567890</Link>
                            </li>
                            <li>
                                <span>Address</span>
                                <span>36/2 East Shewpur, Mirpur, Dhaka</span>
                            </li> */}
                            
                        </ul>
                    </div>
                </div>
                <div className='ft-btm'>
                    <p>@ {new Date().getFullYear()}, Banh Mi, All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer