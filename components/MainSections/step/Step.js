import BtnComp from "@/components/btn/BtnComp"
import Image from "next/image"


const Step = () => {
	return (
		<section className='py-10 text-white bg-black'>
			<div className='container mx-auto'>
				<div className='spin-image-wrapper mb-9'>
					<Image src='/fon/emblema.webp'
						alt='Эмблема' width={150} height={150}
						className="mx-auto spin-image sd:w-[150px] xz:w-28"
					/>
				</div>
				<h6 className='sd:text-4xl xz:text-2xl text-center'>
					3 простых шага для заказа Вашего автомобиля:
				</h6>

				<div className='grid sd:grid-cols-3 xz:grid-cols-1 gap-4 xz:mt-8 sd:mt-14'>

					<div className='flex items-center'>
						<p className='text-8xl font-extrabold text-gradient'>
							1
						</p>
						<div className='ml-3'>
							<p className='text-xl'>
								Выбор автомобиля
							</p>
							<p className='xz:font-light sd:font-normal xl:font-semibold text-xs mt-2 text-gray-500'>
								Выбрать транспортное средство, которое будет соответствовать Вашим нуждам и бюджету. Цены, указанные на сайте, являются актуальными.
							</p>
						</div>
					</div>
					<div className='flex items-center'>
						<p className='text-8xl font-extrabold text-gradient2'>
							2
						</p>
						<div className='ml-3'>
							<p className='text-xl'>
								Заполните форму или позвоните
							</p>
							<p className='xz:font-light sd:font-normal xl:font-semibold text-xs mt-2 text-gray-500'>
								Вы оставляете заявку (кнопка ниже) на сайте или связываетесь с нами по номеру <a href="tel:80291038800" className="underline">+375 (29) 103-88-00</a>
							</p>
						</div>
					</div>
					<div className='flex items-center'>
						<p className='text-8xl font-extrabold text-gradient3'>
							3
						</p>
						<div className='ml-3'>
							<p className='text-xl'>
								Встречайте своего водителя
							</p>
							<p className='xz:font-light sd:font-normal xl:font-semibold text-xs mt-2 text-gray-500'>
							Ваш водитель прибудет вовремя в согласованное место, чтобы обеспечить комфортную поездку, а Вы можете расслабиться и наслаждаться дорогой.
							</p>
						</div>
					</div>
				</div>

				<div className='mt-9'>
					<BtnComp title='Оставить заявку' index={703} red />
				</div>
			</div>

		</section>
	)
}

export default Step