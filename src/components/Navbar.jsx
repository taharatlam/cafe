"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/images/logo.png"
import search from "@/images/search.svg"
import ourMenu from "@/images/our-menu.svg"
import menu from "@/images/menu.svg"
import close from "@/images/close.svg"

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const links = [
        {
            name: "About",
            href: "/#about"
        },
        {
            name: "Menu", 
            href: "/#menu"
        },
        {
            name: "Contact",
            href: "/#contact"
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }

            // Check which section is in view
            links.forEach(link => {
                const sectionId = link.href.split('#')[1]
                const section = document.getElementById(sectionId)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(sectionId)
                    }
                }

            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <nav className={`main-nav ${isSticky ? 'sticky' : ''}`}>
                <div className='container'>
                    <div className='nav-inner'>
                        <button className='menu-btn' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <Image src={menu} alt="menu" />
                        </button>
                        <div className='l-part'>
                            <Link href="/" className='logo'>
                                <Image src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className='m-part'>
                            <ul className='nav-list'>
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={link.href}
                                            className={activeSection === link.href.split('#')[1] ? 'active' : ''}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='r-part'>
                            <Link href="/menu" className='search-btn'>
                                <Image src={ourMenu} alt="search" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className='container'>
                    <div className='menu-inner'>
                        <div className='menu-close' onClick={() => setIsMenuOpen(false)}>
                            <Image src={close} alt="close" />
                        </div>
                        <ul className='menu-list'>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar