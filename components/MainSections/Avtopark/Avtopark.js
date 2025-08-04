import Image from 'next/image'
import React from 'react'

const Avtopark = () => {
	return (
		<section className='py-16 relative bg-white' id='avtopark'>
			<div className='container mx-auto'>
				<h2 className='sd:text-5xl xz:text-3xl font-semibold text-center'>
					Наш автопарк для международных грузоперевозок
				</h2>

				<div className="grid sd:grid-cols-3 xz:grid-cols-1 gap-4 mt-16">
					{/* Карточка 1 */}
					<div className="card bg-[#F1F1F1] shadow-sm h-full flex flex-col">
						<figure className="h-[345px] w-full">
							<Image
								src="/img/gruzoperevozki.webp"
								alt="Тентованные машины"
								width={400}
								height={545}
								className="w-full h-full object-cover"
							/>
						</figure>
						<div className="card-body text-center flex-grow">
							<h3 className="text-2xl font-semibold text-center uppercase">
								Тентованные машины
							</h3>
							<p>
								<span className='font-semibold'>Тентованные грузовики</span> — универсальное решение для перевозки паллетированных и крупногабаритных грузов. Удобная боковая и верхняя загрузка, защита от осадков и пыли.
							</p>

						</div>
					</div>

					{/* Карточка 2 */}
					<div className="card bg-[#F1F1F1] shadow-sm h-full flex flex-col">
						<figure className="h-[345px] w-full">
							<Image
								src="/img/gruzoperevozki-2.webp"
								alt="Рефрижераторы мультирежимные"
								width={400}
								height={545}
								className="w-full h-full object-cover"
							/>
						</figure>
						<div className="card-body text-center flex-grow">
							<h3 className="text-2xl font-semibold text-center uppercase">
								Рефрижераторы <br /> мультирежимные
							</h3>
							<p>
								<span className='font-semibold'>Рефрижераторы</span> обеспечивают полный контроль температуры во время транспортировки. Идеальны для перевозки продуктов питания, медикаментов и других грузов, требующих холодовой цепи. Двухъярусная загрузка — до 66 европаллет.
							</p>
						</div>
					</div>

					{/* Карточка 3 */}
					<div className="card bg-[#F1F1F1] shadow-sm h-full flex flex-col">
						<figure className="h-[345px] w-full">
							<Image
								src="/img/gruzoperevozki-3.webp"
								alt="Полуприцепы"
								width={400}
								height={545}
								className="w-full h-full object-cover"
							/>
						</figure>
						<div className="card-body text-center flex-grow">
							<h3 className="text-2xl font-semibold text-center uppercase">
								Полуприцепы
							</h3>
							<p>
								<span className='font-semibold'>Полуприцепы</span> позволяют перевозить большие объемы грузов, что делает их эффективным выбором для крупногабаритных и тяжелых грузов.
							</p>
						</div>
					</div>
				</div>



				{/* 
				<div className='mt-10 text-center'>
					<div className=''>
						<h3 className='sd:text-3xl xz:text-xl font-bold text-primary'>
							Тенты
						</h3>
						<p className='mt-2'>
							Тентованные грузовики — универсальное решение для перевозки паллетированных и крупногабаритных грузов. Удобная боковая и верхняя загрузка, защита от осадков и пыли.
						</p>
					</div>
					<div className='mt-4'>
						<h3 className='sd:text-3xl xz:text-xl font-bold text-primary'>
							Рефрижераторы
						</h3>
						<p className='mt-2'>
							Рефрижераторы обеспечивают полный контроль температуры во время транспортировки. Идеальны для перевозки продуктов питания, медикаментов и других грузов, требующих холодовой цепи. Двухъярусная загрузка — до 66 европаллет.
						</p>
					</div>
					<div className='mt-4'>
						<h3 className='sd:text-3xl xz:text-xl font-bold text-primary'>
							Полуприцепы
						</h3>
						<p className='mt-2'>
							Полуприцепы позволяют перевозить большие объемы грузов, что делает их эффективным выбором для крупногабаритных и тяжелых грузов
						</p>
					</div>

				</div> */}

				<div className='mt-9 text-center'>
					<h4 className='sd:text-xl xz:text-base font-semibold uppercase'>
						Можем обустроить
					</h4>
					<ul className='mt-5'>
						<li className='mb-2.5'>
							<div className='flex justify-center'>
									<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
								<p className='ml-3 uppercase'>
									Обрешётку
								</p>
							</div>
						</li>
						<li className='mb-2.5'>
							<div className='flex justify-center'>
								<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
								<p className='ml-3 uppercase'>
									Полную растентовку фуры
								</p>
							</div>
						</li>
						<li className='mb-2.5'>
							<div className='flex justify-center'>
									<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
								<p className='ml-3 uppercase'>
									Жесткий борт
								</p>
							</div>
						</li>
					</ul>
				</div>

				<div className='mt-9 text-center'>
					<h4 className='sd:text-xl xz:text-base font-semibold uppercase'>
						Разные варианты загрузки / выгрузки
					</h4>
					<ul className='mt-5'>
						<li className='mb-2.5'>
							<div className='flex justify-center'>
								<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
								<p className='ml-3 uppercase'>
									Верхняя загрузка
								</p>
							</div>
						</li>
						<li className='mb-2.5'>
							<div className='flex justify-center'>
								<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
								<p className='ml-3 uppercase'>
									Боковая загрузка
								</p>
							</div>
						</li>
						<li className='mb-2.5'>
							<div className='flex justify-center'>
								<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
								<p className='ml-3 uppercase'>
									Задняя загрузка
								</p>
							</div>
						</li>
					</ul>
				</div>

			</div>
		</section>
	)
}

export default Avtopark