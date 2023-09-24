"use client";
import ProductHeader from '@/components/ProductHeader'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import trash from '../../../public/trash.svg'
import minus from '../../../public/minus.svg'
import plus from '../../../public/plus.svg'
import CartFooter from '@/components/CartFooter';
import {
    getCartTotal,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
  } from "../../Redux/CartSlice";

const Cart = () => {


    // Getting data from redux store
    const dispatch = useDispatch();
    const { cart, totalPrice } = useSelector((state) => state.cart);

    // Handling change in Total Price of cart on additon of new item
    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);


    console.log(cart);

    return (
        <div className='text-black sm:px-10 px-5 pt-10 pb-48 min-h-screen bg-white'>
            <ProductHeader backUrl={'/'} heading={'My Cart'} />

            <div className='flex lg:flex-row flex-col lg:justify-around mt-5'>
            <div className=''>
                {
                    cart?.map((item, id) => {
                        return (
                            <div key={id} className='mb-4'>
                                    <div className='bg-[#F2F2F2] inline-flex sm:px-5 px-0 py-5 w-full rounded-xl'>
                                        <div>
                                            <Image src={item.img} className=' sm:w-48' alt='' />
                                        </div>
                                        <div className='flex flex-col justify-between mx-8 sm:ms-14 w-full'>
                                            <div>
                                                <div className='flex justify-between'>
                                                    <h2 className='sm:text-2xl text-base'>
                                                        {item.title}
                                                    </h2>
                                                    <button
                                                        onClick={() => dispatch(removeItem(item.id))}
                                                    >
                                                        <Image src={trash} className='w-6' alt='' />
                                                    </button>
                                                </div>
                                                <p className='text-xs sm:text-base opacity-60 mt-2'>
                                                    Size L
                                                </p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p className='text-base sm:text-2xl'> INR {item.price} </p>
                                                <div className='flex items-center'>
                                                    <button className='border sm:px-3 px-2 py-2 border-black'
                                                        onClick={() =>
                                                            dispatch(decreaseItemQuantity(item.id))
                                                          }
                                                    >
                                                        <Image src={minus} className='' alt='' />
                                                    </button>
                                                    <p className='sm:mx-5 mx-3'> {item.quantity} </p>
                                                    <button className='border  sm:px-3 px-2 py-2 border-black'
                                                        onClick={() =>
                                                            dispatch(increaseItemQuantity(item.id))
                                                          }
                                                    >
                                                        <Image src={plus} className='' alt='' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
                <div className='flex flex-col lg:mt-0 mt-10'>
                    <div className=''>
                        <input type="text" className='bg-[#F2F2F2] w-full px-5 py-3 rounded-xl ' placeholder='Add a voucher' />
                    </div>
                    <div className='flex justify-between mt-8'>
                        <h2 className='opacity-60'>
                            Sub-total
                        </h2>
                        <span>
                        {totalPrice}
                        </span>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <h2 className='opacity-60'>
                            VAT (%)
                        </h2>
                        <span>
                            INR 0.00
                        </span>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <h2 className='opacity-60'>
                            Shipping fee
                        </h2>
                        <span>
                            INR 80
                        </span>
                    </div>

                    <div className='h-0.5 bg-black opacity-20 my-6'></div>

                    <div className='flex justify-between '>
                        <h2 className='opacity-60'>
                            Total
                        </h2>
                        <span>
                            INR {totalPrice + 80}
                        </span>
                    </div>

                </div>
            </div>

            <CartFooter />

        </div>
    )
}

export default Cart