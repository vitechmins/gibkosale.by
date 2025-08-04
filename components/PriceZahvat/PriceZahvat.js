import React from 'react'
import FormPrice from '../Form/FormPrice'

const PriceZahvat = () => {
	return (
		<section className='bg-white relative py-16'>
			<div className='container mx-auto sd:px-48 xz:px-0'>
					<div className='flex flex-col items-center text-center'>
						<h2 className='sd:text-4xl xz:text-2xl font-semibold mb-3'>
							Расчет стоимости перевозки груза
						</h2>

						<p className='sd:text-base xz:text-sm'>
							Заполните необходимые поля и мы свяжемся с Вами <span className='font-semibold'>в течение 10 минут!</span>
						</p>

						<div className='w-full mt-5'>
							<FormPrice />
						</div>
					</div>
			</div>
		</section>
	)
}

export default PriceZahvat