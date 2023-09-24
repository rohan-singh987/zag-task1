"use client"
import ProductHeader from '@/components/ProductHeader';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import rating from '../../../../public/starRating.svg'
import heart from '../../../../public/productHeart.svg'
import { useDispatch, useSelector } from 'react-redux';
import ProductFooter from '@/components/ProductFooter';
import { utils } from '@/utils';

const ProductPage = ({ params }) => {

	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.items);
	const [fetchedData, setFetchedData] = useState({});
	const [size, setSize] = useState("");

	
	useEffect(() => {
		let objData = items.find((obj) => obj.id == params.id);
		if (objData) {
			setFetchedData(objData);
		}
		console.log(objData);
	}, [params]);
	

	return (
		<div className='text-black sm:px-10 px-5 pt-10 pb-48 min-h-screen bg-white'>
			<ProductHeader backUrl={'/'} heading={'Detail'} />

			<div className='flex lg:flex-row flex-col sm:justify-evenly sm:mt-8 mt-5 '>
				<div className='relative'>
					<Image src={fetchedData?.img} className='sm:w-96 w-80  mx-auto relative' alt='' />
					<div className=''>
                    <Image src={heart} className='rounded-lg z-10 top-3 right-4 bg-white w-10 p-2 absolute hover:bg-red-500 cursor-pointer' 
                      onClick={()=>{}}
                    alt='' />
                  </div>
				</div>

				<div className='flex flex-col lg:ms-8 ms-0'>
					<h2 className='sm:text-4xl text-3xl sm:font-bold sm:mt-10 mt-5 sm:mb-3 mb-3'>
						{fetchedData?.title}
					</h2>
					<div className='flex items-center mb-5'>
						<Image src={rating} className='sm:w-8 w-6' alt='' />
						<p >
							4.5/5 <span className=' text-black opacity-60'> (45 reviews) </span>
						</p>
					</div>
					<p className=' text-black opacity-60 mb-5 text-md sm:w-3/4 '>
						{fetchedData?.desc}
					</p>
					<div className='flex flex-col'>
						<h3 className='text-2xl'>Choose Size</h3>
						<div className='mt-3'>
							<button className={size == 's' ? `bg-black text-white border cursor-pointer border-slate-400 text-xl px-5 rounded-lg py-2 me-4` : ` border border-slate-400 text-xl px-5 rounded-lg py-2 me-4 cursor-pointer hover:bg-black hover:text-white transition-colors`}
								onClick={() => setSize('s')}
							>
								S
							</button>
							<button className={size == 'm' ? `bg-black text-white border cursor-pointer border-slate-400 text-xl px-5 rounded-lg py-2 me-4` : ` border border-slate-400 text-xl px-5 rounded-lg py-2 me-4 cursor-pointer hover:bg-black hover:text-white transition-colors`}
								onClick={() => setSize('m')}
							>
								M
							</button>
							<button className={size == 'l' ? `bg-black text-white border cursor-pointer border-slate-400 text-xl px-5 rounded-lg py-2 me-4` : ` border border-slate-400 text-xl px-5 rounded-lg py-2 me-4 cursor-pointer hover:bg-black hover:text-white transition-colors`}
								onClick={() => setSize('l')}
							>
								L
							</button>
						</div>
					</div>
				</div>
			</div>

			<div>
				<ProductFooter price={fetchedData?.price} data={fetchedData} />
			</div>
		</div>
	)
}

export default ProductPage