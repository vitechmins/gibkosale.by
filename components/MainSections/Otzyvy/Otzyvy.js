import CarouselComp from "@/components/carousel/CarouselComp";
import Image from "next/image";
const Otzyvy = () => {
	return (
		<section className='pt-20 pb-28 bg-white relative rounded-3xl mt-9 mb-10' id="otzyvy">
			<div className='container mx-auto'>
				<div className=''>

					<div className=''>
						<div className='text-center'>
							<h2 className='text-3xl sd:text-4xl uppercase text-primary relative'>
								Клиенты о наших услугах по перевозке груза
							</h2>
							<p className='mt-3 sd:text-2xl xz:text-lg text-gray-700 font-semibold'>
								Почему клиенты выбирают нас?
							</p>
							<ul className='sd:text-2xl xz:text-base text-center mt-4'>
								<li className='mb-3 flex items-center justify-center'>
									<Image src='/svg/point.svg' alt='Красная точка' className='mr-2' width={15} height={15} />
									Мы быстрые!
								</li>
								<li className='mb-3 flex items-center justify-center'>
									<Image src='/svg/point.svg' alt='Красная точка' className='mr-2' width={15} height={15} />
									Мы надежные!
								</li>
								<li className='mb-3 flex items-center justify-center'>
									<Image src='/svg/point.svg' alt='Красная точка' className='mr-2' width={15} height={15} />
									Мы гибкие!
								</li>
								<li className='mb-3 flex items-center justify-center'>
									<Image src='/svg/point.svg' alt='Красная точка' className='mr-2' width={15} height={15} />
									Мы работаем честно!
								</li>
							</ul>

							<div className='mt-16'>
								<CarouselComp id={1} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Otzyvy;