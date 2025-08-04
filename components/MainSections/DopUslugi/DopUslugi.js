import Image from 'next/image'
import React from 'react'

const DopUslugi = () => {
	return (
		<section className='py-10 relative bg-black/25' id='logisticheskie-uslugi'>
			<div className='container mx-auto'>
				<h2 className='sd:text-5xl xz:text-3xl font-semibold text-center text-white'>
					Логистические услуги
				</h2>

				<div className='mt-10 text-white flex justify-center'>
					<div className=''>
						<div className='flex items-center space-x-2.5 mb-5'>
							<Image src='/svg/only/warehouse.svg' alt='Хранение продуктов' width={80} height={80} />
							<p className='sd:text-3xl xz:text-xl'>
								Хранение продуктов
							</p>
						</div>
						<div className='flex items-center space-x-2.5 mb-5'>
							<Image src='/svg/only/diploma.svg' alt='Страхование груза' width={80} height={80} />
							<p className='sd:text-3xl xz:text-xl'>
								Страхование груза
							</p>
						</div>
						<div className='flex items-center space-x-2.5 mb-5'>
							<Image src='/svg/only/oformlenie.svg' alt='Оформление таможенных и сопроводительных документов' width={80} height={80} />
							<p className='sd:text-3xl xz:text-xl'>
								Оформление таможенных и сопроводительных документов
							</p>
						</div>
						<div className='flex items-center space-x-2.5'>
							<Image src='/svg/only/manager.svg' alt='Услуги экспедитора' width={80} height={80} />
							<p className='sd:text-3xl xz:text-xl'>
								Услуги экспедитора
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DopUslugi