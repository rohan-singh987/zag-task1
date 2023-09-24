"use client";
import React from 'react'
import bag from '../../public/shoppingbag.svg'
import Image from 'next/image';

const ProductFooter = ({ price }) => {
  return (
    <div className="fixed bg-white z-20 left-0 bottom-0 flex justify-between sm:px-20 px-5 items-center w-full border-t-2 h-24">
        <div>
            <h2 className='opacity-60 font-medium font-sans'> Price </h2>
            <div className='font-medium text-2xl'>
            {price}
            </div>
        </div>
        <button className='flex items-center bg-black text-white py-5 px-12 rounded-xl hover:scale-110 transition-transform'>
            <Image src={bag} alt=''/>
            <p className='ms-3'> Add to Cart </p>
        </button>
    </div>
  )
}

export default ProductFooter