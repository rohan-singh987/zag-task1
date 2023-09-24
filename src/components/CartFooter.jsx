"use client";

import React from 'react'
import arrow from '../../public/cartArrow.svg'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addItem } from '@/Redux/CartSlice';
import { useRouter } from 'next/navigation';


const CartFooter = () => {
    const router = useRouter()
  return (
    <div className="fixed bg-white z-20 left-0 bottom-0 flex justify-center  sm:px-20 px-5 items-center w-full border-t-2 h-24">
            <button className='flex items-center bg-black text-white w-full text-center lg:mx-40 py-5 rounded-xl hover:scale-110 transition-transform'
                onClick={() => router.push('/')}
            >
                <div className='mx-auto flex'> Checkout <Image src={arrow} className='ms-4' alt='' /> </div>
                
            </button>
        </div>
  )
}

export default CartFooter