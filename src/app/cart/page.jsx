import ProductHeader from '@/components/ProductHeader'
import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div className='text-black sm:px-10 px-5 pt-10 pb-48 min-h-screen bg-white'>
      <ProductHeader backUrl={'/'} heading={'Detail'} />

      <div className='flex lg:flex-row flex-col sm:justify-evenly sm:mt-8 mt-5 '>
        <div className='relative'>
          <Image src={fetchedData.img} className='sm:w-96 w-80  mx-auto relative' alt='' />
          <div className=''>
            <Image src={heart} className='rounded-lg z-10 top-3 right-4 bg-white w-10 p-2 absolute hover:bg-red-500 cursor-pointer'
              onClick={() => { }}
              alt='' />
          </div>
        </div>
      </div>
      </div>
      )
}

      export default Cart