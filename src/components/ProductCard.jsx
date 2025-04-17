import React from 'react'
import Image from 'next/image'
import img from '@/images/m1.jpg'

const ProductCard = ( {data} ) => {
  return (
    <div className='product-card'>
        <div className='img-part'>
        {
            data.img && (
                <Image src={data.img} alt='img' />
            )
        }
        </div>
        {/* <div className='content-part'>
            <h3 className='title'>
            {data.title}
            </h3>
            <p className='para'>
            {data.description}
            </p>
        </div> */}
    </div>
  )
}

export default ProductCard