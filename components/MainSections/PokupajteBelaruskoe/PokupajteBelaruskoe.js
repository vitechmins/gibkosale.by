'use client'
import React from 'react'
import { dataProducts } from '@/constans/DataProducts'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ExtraCharge } from '@/constans/ExtraCharge'

const PokupajteBelaruskoe = () => {
	const belarusProducts = dataProducts.flatMap(category => {
		const belarusianItems = category.children.filter(product => product.country === 'Беларусь')
		const limitedItems = belarusianItems.slice(0, 3)
		return limitedItems.map(product => ({
			...product,
			categoryLink: category.categoryLink
		}))
	})
	return (
		<section className='py-20 relative bg-white'>
			<div className='container mx-auto'>
				<h2 className="sd:text-5xl xz:text-3xl font-semibold text-center 
	text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-green-600 py-2.5">
					Покупайте белорусское! 
				</h2>


				<div className='mt-12'>
					<Swiper
						modules={[Navigation, Autoplay]}
						spaceBetween={20}
						slidesPerView={1}
						loop={true}
						navigation
						autoplay={{ delay: 4000 }}
						breakpoints={{
							375: {
								slidesPerView: 2,
							},
							640: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 5,
							},
						}}
					>
						{belarusProducts.map(product => (
							<SwiperSlide key={`${product.id}-${product.categoryLink}`}>
								<Link href={`/${product.categoryLink}/${product.id}`}>
									<article className="card bg-white rounded-3xl shadow-xl flex flex-col my-9 h-[350px] relative cursor-pointer">
										{/* Флаг Беларуси */}
										<div className="absolute top-2 right-2 z-10">
											<Image
												src="/svg/belarus.svg"
												alt="Беларусь"
												width={40}
												height={25}
											/>
										</div>

										<figure className="relative w-full h-[250px] overflow-hidden rounded-t-3xl flex-shrink-0">
											<Image
												src={product.img[0]}
												alt={product.title}
												className="w-full h-full object-contain p-2"
												width={250}
												height={250}
											/>
										</figure>

										<div className="card-body p-4 flex flex-col justify-between flex-grow">
											<div>
												<p className="text-green-500 font-semibold text-sm">
													Цена: {product.price * ExtraCharge} руб.
												</p>
												<h3 className="card-title sd:text-sm xz:text-xs font-bold">{product.title}</h3>
											</div>
										</div>
									</article>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default PokupajteBelaruskoe
