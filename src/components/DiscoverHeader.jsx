"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import bell from '../../public/bell.png'
import search from '../../public/search.svg'
import filter from '../../public/filter.svg'


const DiscoverHeader = () => {

    const [active, setActive] = useState("all")

    return (
        <div className='sticky bg-white top-0 pb-5 z-20'>
            <div className='flex justify-between items-center'>
                <h1 className=' text-3xl font-semibold '>
                    Discover
                </h1>
                <button>
                    <Image src={bell} alt='' />
                </button>
            </div>

            <div className='flex sm:justify-center justify-between items-center mt-5'>
                <div className='inline-flex justify-center items-center py-3 sm:px-5 px-3 rounded-lg bg-[#F2F2F2]'>
                    <Image src={search} className='' alt='' />
                    <input className='bg-[#F2F2F2] sm:pe-10 pe-0' placeholder='Search anything' />
                </div>
                <div className='bg-black sm:ms-5 ms-3 sm:px-5 px-3 py-3 rounded-lg '>
                    <Image src={filter} className='' alt='' />
                </div>
            </div>

            <div className='flex justify-center mt-5 overflow-auto'>
                <div className={active != "all" ?`bg-[#F2F2F2] cursor-pointer hover:bg-black hover:text-white transition-colors py-2 px-5 sm:mx-5 mx-3 ms-20 sm:ms-0 rounded-lg` : `bg-black text-white py-2 px-5 sm:mx-5 mx-3 ms-20 sm:ms-0 rounded-lg`}
                    onClick={() => setActive("all")}
                >
                    All
                </div>
                <div className={active != "men" ?`bg-[#F2F2F2] cursor-pointer hover:bg-black hover:text-white transition-colors py-2 px-5 sm:mx-5 mx-3  rounded-lg` : `bg-black text-white py-2 px-5 sm:mx-5 mx-3 rounded-lg`}
                    onClick={() => setActive("men")}
                >
                    Men
                </div>
                <div className={active != "women" ?`bg-[#F2F2F2] cursor-pointer hover:bg-black hover:text-white transition-colors py-2 px-5 sm:mx-5 mx-3  rounded-lg` : `bg-black text-white py-2 px-5 sm:mx-5 mx-3 rounded-lg`}
                    onClick={() => setActive("women")}
                    >
                    Women
                </div>
                <div className={active != "kids" ?`bg-[#F2F2F2] cursor-pointer hover:bg-black hover:text-white transition-colors py-2 px-5 sm:mx-5 mx-3  rounded-lg` : `bg-black text-white py-2 px-5 sm:mx-5 mx-3 rounded-lg`}
                    onClick={() => setActive("kids")}
                    >
                    Kids
                </div>
            </div>
        </div>
    )
}

export default DiscoverHeader