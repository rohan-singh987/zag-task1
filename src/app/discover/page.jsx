"use client";
import DiscoverFooter from '@/components/DiscoverFooter'
import DiscoverHeader from '@/components/DiscoverHeader'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import heart from '../../../public/productHeart.svg'
import { useRouter } from 'next/navigation';

const Discover = () => {

  // Fetching data from redux store
  const productItem = useSelector((state) => state.product)

  const naviagte = useRouter()

  return (
    <div className='text-black sm:px-10 px-5 pt-7 min-h-screen'>
      <DiscoverHeader />

      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-10 sm:gap-x-0 gap-x-5  mx-auto mt-5 pb-32'>
        {
          productItem.map((product) => {
            return (
              <div key={product.id} className='mx-auto hover:scale-110 transition-transform '
                onClick={() => naviagte.push(`/product/${product.id}`)}
              >
                <div className='mx-auto relative'>
                  <Image src={product.img} className='rounded-lg relative w-' alt='' />
                  <div className=''>
                    <Image src={heart} className='rounded-lg z-10 top-3 right-4 bg-white w-10 p-2 absolute hover:bg-red-500 cursor-pointer' 
                      onClick={()=>{}}
                    alt='' />
                  </div>
                </div>
                <h2 className='text-sm font-semibold sm:text-xl sm:font-bold my-1'>
                  {product.title}
                </h2>
                <p className='text-sm opacity-60 sm:text-base'>
                  INR
                  <span className='ms-1'>
                  {product.price}
                  </span>

                  <span className='mx-2'>
                  {product.discount && product.discount}
                  </span>
                </p>
              </div>
            )
          })
        }
      </div>

      <DiscoverFooter />
    </div>
  )
}

export default Discover