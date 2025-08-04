import Image from "next/image";


const Preimushestva = () => {
const preimushestva = [
	{
		title: 'Собственный автопарк',
		description: 'Собственный транспорт позволяет нам оптимизировать маршрут, сроки и стоимость перевозки.',
		imageSrc: '/svg/truck.svg',
		alt: 'Иконка грузовика',
	},
	{
		title: 'От двери до двери',
		description: 'Осуществляем перевозку любых грузов напрямую от пункта отправки до пункта назначения.',
		imageSrc: '/svg/destination.svg',
		alt: 'Иконка пункта назначения',
	},
	{
		title: 'Снижение рисков и издержек',
		description: 'Продуманная логистика и опытная команда позволяют избежать простоев, штрафов и дополнительных расходов.',
		imageSrc: '/svg/risk.svg',
		alt: 'Иконка снижения рисков',
	},
	{
		title: 'Гибкая ценовая политика и выгодные тарифы',
		description: 'Подбираем наилучшее решение по стоимости и предлагаем прозрачные условия оплаты.',
		imageSrc: '/svg/piggyBank.svg',
		alt: 'Иконка экономии',
	},
	{
		title: 'Полный контроль',
		description: 'Вы всегда знаете, где находится ваш груз. Работаем круглосуточно, отслеживание 24/7.',
		imageSrc: '/svg/search.svg',
		alt: 'Иконка контроля',
	},
	{
		title: 'Гарантия сохранности',
		description: 'За сохранность груза отвечают водители, диспетчеры и страховщики. Полная гарантия надёжности.',
		imageSrc: '/svg/security.svg',
		alt: 'Иконка безопасности',
	},
	{
		title: 'Экономия времени и ресурсов',
		description: 'Мы берём на себя весь цикл доставки — от планирования маршрута до финальной выгрузки.',
		imageSrc: '/svg/time-red.svg',
		alt: 'Иконка времени',
	},
	{
		title: 'Обязательства и ответственность',
		description: 'Наша компания несет полную юридическую и страховую ответственность за груз.',
		imageSrc: '/svg/safety.svg',
		alt: 'Иконка сохранности',
	},
	{
		title: 'Гарантия своевременной и безопасной доставки',
		description: 'GPS-мониторинг и контроль движения транспорта в реальном времени.',
		imageSrc: '/svg/gps.svg',
		alt: 'Иконка GPS',
	},
	{
		title: 'Прозрачность и регулярные отчёты',
		description: 'Оптимизируем задачи, ведем учёт и аналитику по грузам за любой период.',
		imageSrc: '/svg/accounting.svg',
		alt: 'Иконка отчётов и аналитики',
	},
	{
		title: 'Индивидуальный подход и гибкие решения',
		description: 'Подбор транспорта под особенности груза, индивидуальные расчёты под клиента.',
		imageSrc: '/svg/truck2.svg',
		alt: 'Иконка гибкости',
	},
	{
		title: 'Поддержка 24/7',
		description: 'На связи в любое время: оперативно отвечаем на запросы, решаем возникающие вопросы без задержек.',
		imageSrc: '/svg/support.svg',
		alt: 'Иконка круглосуточной поддержки',
	},
];



	return (
		<section className="py-16 bg-black/70 relative overflow-hidden" id="services">
			<div className="container mx-auto">
				<div className=''>
					<div className='h-[2px] bg-primary sd:w-32 xz:w-16 mb-5' />

					<h2 className="sd:text-5xl xz:text-3xl text-white">
						Почему выгодно заказать <span className="text-primary">перевозки груза Беларусь - Казахстан</span> в ООО «АзияКонсал»

					</h2>
					<article className='mt-10 text-white'>
						<div className='grid sd:grid-cols-2 xz:grid-cols-1 gap-8 mt-8'>
							{preimushestva.map((service, index) => (
								<div key={index} className='flex'>
									<div className='border border-primary p-2 rounded-full'>
										<div className='bg-[#1A1A1A] rounded-full w-20 h-20 flex justify-center items-center p-5'>
											<Image
												src={service.imageSrc}
												alt={service.alt}
												width={65}
												height={65}
												className=""
											/>

										</div>
									</div>
									<div className='ml-3'>
										<h3 className='text-primary sd:text-lg xz:text-base'>
											{service.title}
										</h3>
										<p className='sd:text-base xz:text-xs'>
											{service.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Preimushestva;
