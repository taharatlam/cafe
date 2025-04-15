"use client"
import React from 'react'
import Button from '../Button'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard';
import img1 from '@/images/m1.jpg'
import img2 from '@/images/m2.jpg'
import img3 from '@/images/m3.jpg'
import img4 from '@/images/m4.jpg'
import 'swiper/css';
import 'swiper/css/navigation';


const SliderSec = () => {
    const data = [
        {
            id: 1,
            title: 'Cà Phê Sữa Đá',
            description: 'Vietnamese Iced Coffee with Condensed Milk',
            img: img1
        },
        {
            id: 2,
            title: 'Cà Phê Sữa Đá',
            description: 'Vietnamese Iced Coffee with Condensed Milk',
            img: img2
        },
        {
            id: 3,
            title: 'Cà Phê Sữa Đá',
            description: 'Vietnamese Iced Coffee with Condensed Milk',
            img: img3
        },
        {
            id: 4,
            title: 'Cà Phê Sữa Đá',
            description: 'Vietnamese Iced Coffee with Condensed Milk',
            img: img4
        },

    ]
  return (
    <section className='sec sec3' id="menu">
        <div className='container'>
            <div className='row '>
                <div className='col-12'>
                    <div className='sec-head-con'>
                        <div className='l-part'>
                            <h2 className='sub-head'>
                                <span>Our Menu</span>
                            </h2>
                            <h3 className='sec-head'>
                                Banh Mi, Pho & More The Real Deal
                            </h3>
                        </div>
                        <span className='line'></span>
                        <div className='r-part'>
                            <Button type='link' text='View Menu' link='/menu' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-left'>
            <div className='pr-slider mt-5'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    className="product-slider"
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },
                        320: {
                            slidesPerView: 1.2,
                        },
                        576: {
                            slidesPerView: 2.3,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3.4,
                        },
                    }}
                >
                {
                    data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <ProductCard data={item} />
                        </SwiperSlide>
                    ))
                }
                    
                   
                </Swiper>
            </div>
        </div>
         
    </section>
  )
}

export default SliderSec