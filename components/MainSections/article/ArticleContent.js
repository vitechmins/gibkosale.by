import React from 'react'
import Image from 'next/image'

const ArticleContent = () => {
	return (
		<section className='relative bg-white py-16'>
			<article className='container mx-auto'>
				<h2 className='sd:text-5xl xz:text-3xl font-semibold text-center'>
					🚛 Как мы осуществляем международные грузоперевозки
				</h2>

				<div className='mt-9 space-y-10 leading-8 xz:text-base sd:text-lg'>

					<p className='text-center sd:text-xl xz:text-lg font-medium'>
						Ваши грузы в надежных руках! Мы берём на себя все этапы перевозки — от расчета стоимости до доставки «от двери до двери».
					</p>

					<div className='space-y-8 sd:px-10 xz:px-0'>
						<div>
							<h3 className='text-xl font-semibold flex items-center gap-2'>
								<Image src='/svg/point.svg' alt='Красная точка' width={15} height={15} />
								Быстро рассчитываем стоимость:
							</h3>
							<ul className='list-disc pl-8 mt-2 space-y-1'>
								<li>Пришлите нам параметры груза (вес, габариты, тип) и маршрут.</li>
								<li>Мы подберем оптимальное предложение с учетом ваших потребностей.</li>
								<li>В течение 1 часа вы получите точный расчет с учётом всех нюансов.</li>
							</ul>
						</div>

						<div>
							<h3 className='text-xl font-semibold flex items-center gap-2'>
								<Image src='/svg/point.svg' alt='Красная точка' width={15} height={15} />
								Подбираем подходящий транспорт:
							</h3>
							<ul className='list-disc pl-8 mt-2 space-y-1'>
								<li>Автотранспорт (тент, рефрижератор, изотерм, контейнеры).</li>
								<li>ЖД и мультимодальные перевозки для сложных маршрутов.</li>
								<li>Спецтехника для негабаритных и опасных грузов.</li>
							</ul>
						</div>

						<div>
							<h3 className='text-xl font-semibold flex items-center gap-2'>
								<Image src='/svg/point.svg' alt='Красная точка' width={15} height={15} />
								Оформляем весь пакет документов:
							</h3>
							<ul className='list-disc pl-8 mt-2 space-y-1'>
								<li>Подготавливаем CMR, инвойсы, сертификаты.</li>
								<li>Помогаем с таможенным оформлением (ЕАЭС, международные перевозки).</li>
								<li>Обеспечиваем страхование груза.</li>
							</ul>
						</div>

						<div>
							<h3 className='text-xl font-semibold flex items-center gap-2'>
								<Image src='/svg/point.svg' alt='Красная точка' width={15} height={15} />
								Контролируем все этапы перевозки:
							</h3>
							<ul className='list-disc pl-8 mt-2 space-y-1'>
								<li>GPS-мониторинг в реальном времени.</li>
								<li>Персональный менеджер 24/7.</li>
								<li>Уведомляем о статусе груза (погрузка, граница, доставка).</li>
							</ul>
						</div>

						<div>
							<h3 className='text-xl font-semibold flex items-center gap-2'>
								<Image src='/svg/point.svg' alt='Красная точка' width={15} height={15} />
								Итог: доставляем «под ключ»
							</h3>
							<ul className='list-disc pl-8 mt-2 space-y-1'>
								<li>Забираем груз с вашего склада.</li>
								<li>Выгружаем в указанное место.</li>
								<li>Помогаем с логистикой на месте.</li>
							</ul>
						</div>
					</div>

				</div>
			</article>
		</section>
	)
}

export default ArticleContent
