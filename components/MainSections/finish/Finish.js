import Image from "next/image"
import phoneNumbers from "@/config/config";

const Finish = () => {
	return (
		<section className="bg-cover bg-center min-h-[80vh] relative">

			<div className='container mx-auto relative'>
				<div className='absolute top-0 left-0 bg-black/75 py-6 px-6 sd:w-[30vw] xz:w-[70vw] h-[67vh]'>
					<Image src='/logo/logo2.webp'
						className="mx-auto sd:w-1/2 xz:w-40"
						alt='Телефоны'
						width={210} height={210}
					/>
					<aside className='mt-8 text-center text-white'>
						<p className='sd:text-2xl xz:text-xl font-light'>
							Телефон
						</p>
						<a
							href={`tel:${phoneNumbers.phoneA1Link}`}
							className="mb-3 mt-2 block font-semibold sd:text-3xl xz:text-lg xy:text-xl">
							{phoneNumbers.phoneMTS}
						</a>

						<a href="https://yandex.by/maps/-/CDh5y0~7" className='font-light text-sm text-white/80'>
						г. Минск, 4 км МКАД, 11
						</a>
						<p className='sd:text-2xl xz:text-lg xy:text-xl font-light mt-6'>
							Режим работы
						</p>
						<p className=''>
							Пн-Сб 10:00-20:00
						</p>
						<p className=''>
							Вс - <span className='text-red-500'>выходной</span>
						</p>

						<p className='mt-3 text-xs text-gray-500'>
						ЧУП "Команда Услуг"
						</p>
						<p className='text-xs text-gray-500'>
						УНП 193791781
						</p>
					</aside>
				</div>
			</div>
		</section>

	)
}

export default Finish