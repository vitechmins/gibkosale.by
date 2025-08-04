import BtnComp from '@/components/btn/BtnComp'
import Image from 'next/image'
import React from 'react'

const SbornyeTemperaturnyeGruzy = () => {
	return (
		<section className='py-20 relative bg-white'>
			<div className='container mx-auto'>
				<h2 className='sd:text-5xl xz:text-3xl font-semibold text-center'>
					Перевозка (доставка) сборных грузов с температурным режимом
				</h2>

				<p className='mt-4 text-center'>
					Поддержание стабильного температурного режима на всём маршруте — ключевое требование при рефрижераторных перевозках. Температура внутри кузова сохраняется независимо от погодных условий. Возможна двухъярусная загрузка — до 66 европаллет за один рейс.
				</p>

				<div className='w-full mt-10'>
					<Image src='/img/perevozka-gruza-4.webp' alt='Реф перевозки' width={1280} height={853} className='rounded-xl' />
				</div>

				<h3 className='sd:text-3xl xz:text-xl font-semibold mt-10 text-center'>
					Рефрижераторные перевозки следующих продуктов
				</h3>
				<div className='grid sd:grid-cols-3 xz:grid-cols-1 gap-8 mt-12'>
					<div className='flex items-center space-x-3'>
						<div className='h-20 w-20 p-3 rounded-full bg-primary flex justify-center items-center shadow-xl'>
							<Image src='/svg/only/food.svg' alt='Пищевая продукция' width={70} height={70} />
						</div>
						<p className='sd:text-2xl xz:text-base font-semibold'>
							Пищевая продукция
						</p>
					</div>
					<div className='flex items-center space-x-3'>
						<div className='h-20 w-20 p-3 rounded-full bg-primary flex justify-center items-center shadow-xl'>
							<Image src='/svg/only/medicines.svg' alt='Медикаменты' width={70} height={70} />
						</div>
						<p className='sd:text-2xl xz:text-base font-semibold'>
							Медикаменты
						</p>
					</div>
					<div className='flex items-center space-x-3'>
						<div className='max-h-20 max-w-20 p-5 rounded-full bg-primary flex justify-center items-center shadow-xl'>
							<Image src='/svg/only/alcohol.svg' alt='Алкогольные и безалкогольные напитки' width={70} height={70} />
						</div>
						<p className='sd:text-2xl xz:text-base font-semibold'>
							Алкогольные и безалкогольные напитки
						</p>
					</div>
					<div className='flex items-center space-x-3'>
						<div className='h-20 w-20 p-3 rounded-full bg-primary flex justify-center items-center shadow-xl'>
							<Image src='/svg/only/plants.svg' alt='Растения и рассада' width={70} height={70} />
						</div>
						<p className='sd:text-2xl xz:text-base font-semibold'>
							Растения и рассада
						</p>
					</div>
					<div className='flex items-center space-x-3'>
						<div className='h-20 w-20 p-3 rounded-full bg-primary flex justify-center items-center shadow-xl'>
							<Image src='/svg/only/chemical.svg' alt='Химическая продукция' width={70} height={70} />
						</div>
						<p className='sd:text-2xl xz:text-base font-semibold'>
							Химическая продукция
						</p>
					</div>
					<div className='flex items-center space-x-3'>
						<div className='h-20 w-20 p-3 rounded-full bg-primary flex justify-center items-center shadow-xl'>
							<Image src='/svg/only/ice-cream.svg' alt='Молочная продукция' width={70} height={70} />
						</div>
						<p className='sd:text-2xl xz:text-base font-semibold'>
							Молочная продукция
						</p>
					</div>
				</div>

				<div className='mt-12 w-full flex justify-center'>
					<BtnComp title='Оставить заявку' index={994} bg />
				</div>
			</div>
		</section>
	)
}

export default SbornyeTemperaturnyeGruzy