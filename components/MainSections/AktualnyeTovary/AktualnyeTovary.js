import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { dataProducts } from '@/constans/DataProducts'
import { ExtraCharge } from '@/constans/ExtraCharge'

const AktualnyeTovary = () => {
	const belarusProducts = dataProducts.flatMap(category => {
		const belarusianItems = category.children.filter(product => product.country === 'Беларусь')
		const limitedItems = belarusianItems.slice(0, 3)
		return limitedItems.map(product => ({
			...product,
			categoryLink: category.categoryLink
		}))
	})


	return (
		<section className='py-24 relative bg-white'>
			<div className='container mx-auto'>
				<h2 className='sd:text-3xl xz:text-xl font-semibold mb-10 text-center'>
					Актуальные товары
				</h2>
				<div className='grid sd:grid-cols-6 xz:grid-cols-1 xx:grid-cols-2 sd:gap-4 xz:gap-4 xx:gap-2'>
					{belarusProducts.map((product) => (
						<Link
							href={`/${product.categoryLink}/${product.id}`}
							key={`${product.title}-${product.id}`}
						>
							<article className="card bg-white rounded-3xl shadow-xl flex flex-col sd:h-[550px] xz:h-[460px] relative cursor-pointer">
								{/* Флаг Беларуси */}
								<div className="absolute top-2 right-2 z-10">
									<Image
										src="/svg/belarus.svg"
										alt="Беларусь"
										width={50}
										height={30}
									/>
								</div>

								<figure className="relative w-full h-[250px] overflow-hidden rounded-t-3xl flex-shrink-0">
									<div className="carousel flex w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory">
										{product.img.map((image, index) => (
											<div
												key={index}
												className="carousel-item flex-none w-full h-full snap-center"
											>
												<Image
													src={image}
													alt={product.title}
													className="w-full h-full object-contain p-2"
													width={250}
													height={250}
												/>
											</div>
										))}
									</div>
									{product.img.length > 1 && (
										<div className="absolute bottom-1 right-1">
											<Image
												src="/svg/left-right.svg"
												alt="Листать фото"
												width={25}
												height={25}
											/>
										</div>
									)}
								</figure>
								<div className="card-body sd:p-4 xz:p-2 flex flex-col justify-between flex-grow">
									<div>
										<p className={`sd:text-base xz:text-xs text-green-500 font-semibold ${product.price ? 'block' : 'hidden'}`}>
											Цена: {product.price * ExtraCharge} руб.
										</p>
										<h3 className="card-title sd:text-base font-bold xz:text-xs">{product.title}</h3>
										<p className="text-gray-600 text-sm sd:block xz:hidden mt-0.5">{product.brand}</p>
										<ul className="text-[#333333] sd:text-xs xz:text-[10px] mt-1">
											{product.info.slice(0, 3).map((infoItem, index) => (
												<li key={index} className="flex space-x-1 mb-1">
													<span className='font-semibold'>{infoItem.i}</span>
													<span>{infoItem.i2}</span>
												</li>
											))}
										</ul>
									</div>
									<div className="card-actions justify-end sd:mt-2 xz:mt-0">
										<button className="btn sd:btn-lg xz:btn-sm btn-primary text-black rounded-full sd:px-7 xz:px-2 sd:text-base xz:text-xs">
											Подробнее
										</button>
									</div>
								</div>
							</article>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default AktualnyeTovary
