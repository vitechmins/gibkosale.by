import Image from 'next/image'
import React from 'react'

const GPS = () => {
	return (
		<section className='sd:py-16 xz:py-8 relative bg-white'>
			<div className='container mx-auto'>
				<h2 className='sd:text-5xl xz:text-3xl font-semibold text-center'>
					Мы отслеживаем ваш груз
				</h2>
				<p className='mt-7 text-center'>
					Мы используем современное GPS-оборудование и специализированное ПО для отслеживания перемещений на всём маршруте. <b>Грузоперевозки Беларусь Казахстан</b> проходят под полным контролем — вы всегда знаете, где находится ваш груз и когда он прибудет.
				</p>
				<div className='sd:mt-14 xz:mt-9'>
					<Image src='/img/GPS-mobil.webp' alt='Используем спец программу для отслеживания груза' width={1280} height={625} className='sd:hidden xz:block mx-auto' />
					<Image src='/img/GPS.webp' alt='Используем спец программу для отслеживания груза' width={1280} height={625} className='sd:block xz:hidden mx-auto' />
				</div>
			</div>
		</section>
	)
}

export default GPS