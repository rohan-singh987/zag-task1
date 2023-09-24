import Link from 'next/link'
import React from 'react'
import bag from '../../public/footerBag.svg'
import sett from '../../public/footerSetting.svg'
import heart from '../../public/footerheart.svg'
import home from '../../public/home.svg'
import Image from 'next/image'


const DiscoverFooter = () => {
    return (
        <div className="fixed bg-white z-20 left-0 bottom-0 flex sm:justify-evenly justify-between sm:px-0 px-5 items-center w-full border-t-2 h-20">
            <div >
                <Link href={"/"} className='flex flex-col justify-center items-center hover:opacity-20 hover:underline transition-all '>
                <Image src={home} className='' alt='' />
                    Home
                </Link>
            </div>
            <div>
                <Link href={"#"} className='flex flex-col justify-center items-center hover:opacity-20 hover:underline transition-all '>
                <Image src={heart} className='' alt='' />
                    Saved
                </Link>
            </div>
            <div>
                <Link href={"/cart"} className='flex flex-col justify-center items-center hover:opacity-20 hover:underline transition-all '>
                <Image src={bag} className='' alt='' />
                    Cart
                </Link>
            </div>
            <div>
                <Link href={"#"} className='flex flex-col justify-center items-center hover:opacity-20 hover:underline transition-all '>
                <Image src={sett} className='' alt='' />
                    Setting
                </Link>
            </div>
        </div>
    )
}

export default DiscoverFooter