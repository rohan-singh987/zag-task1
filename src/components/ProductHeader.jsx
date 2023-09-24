"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import bell from '../../public/bell.png'
import right from '../../public/arrowright.svg'
import { useRouter } from 'next/navigation';


const ProductHeader = ({ backUrl, heading }) => {

    const router = useRouter();
    return (
        <div className='sticky bg-white top-0 pb-5 z-20'>
            <div className='flex justify-between items-center'>
                <button onClick={() => router.push(`${backUrl}`)}>
                    <Image src={right} alt='' className='' />
                </button>
                <h1 className=' sm:text-4xl text-3xl font-semibold sm:font-bold '>
                    {heading}
                </h1>
                <button>
                    <Image src={bell} alt='' />
                </button>
            </div>
        </div>
    )
}

export default ProductHeader