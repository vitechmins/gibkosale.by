"use client";
import BtnComp from "@/components/btn/BtnComp";
import phoneNumbers from "@/config/config";
import Image from "next/image";

const Services = () => {
	const data = [
		{
			title: "Ремонт двигателя",
			description: [
				"Компьютерная диагностика",
				"Ремонт/замена ТНВД",
				"Ремонт/замена форсунок",
				"Ремонт/замена ГБЦ",
				"Замена комплекта ГРМ, помпы",
				"Ремонт/замена распредвала",
				"Ремонт/замена коленчатого вала",
				"Ремонт навесных механизмов",
				"Капитальный ремонт двигателей"
			],
			imageSrc: "/images/1.webp",
			index: 401,
			name: "Ремонт двигателя"
		},
		{
			title: "Ремонт ходовой",
			description: [
				"Диагностика ходовой части",
				"Замена/регулировка подшипника ступицы",
				"Замена и переборка рессор",
				"Ремонт балансира",
				"Ремонт/замена стабилизатора",
				"Замена сальника ступицы",
				"Замена реактивных штанг",
				"Ремонт/замена сайлентблоков",
				"Ремонт/замена амортизаторов",
				"Ремонт/замена пневморессор"
			],
			imageSrc: "/images/2.webp",
			index: 402,
			name: "Ходовая часть"
		},
		{
			title: "Ремонт топливной системы",
			description: [
				"Гидрофикация",
				"Автономные кондиционеры",
				"Дополнительные топливные баки",
				"Установка автономных обогревателей",
				"Коробка отбора мощности",
				"Наращивание бортов",
				"Преобразователи напряжения",
				"Сигнализации с ЦЗ, автозапуском",
				"Установка фаркопов",
				"Установка пневмо-, электро-, гидровыводов"
			],
			imageSrc: "/images/3.webp",
			index: 403,
			name: "Ремонт топливной системы"
		},
		{
			title: "Ремонт тормозной системы",
			description: [
				"Диагностика тормозной системы",
				"Ремонт и регулировка тормозной системы",
				"Ремонт тормозного суппорта",
				"Замена тормозных колодок и накладок",
				"Ремонт/замена тормозных барабанов",
				"Диагностика и ремонт ABS",
				"Ремонт энергоаккумуляторов",
				"Ремонт и замена тормозных камер"
			],
			imageSrc: "/images/4.webp",
			index: 404,
			name: "Ремонт тормозной системы"
		},
		{
			title: "Ремонт КПП и трансмиссии",
			description: [
				"Диагностика/ремонт КПП",
				"Ремонт редукторов",
				"Замена подшипников",
				"Ремонт карданного вала",
				"Прокачка привода сцепления",
				"Замена ПГУ",
				"Диагностика/замена сцепления",
				"Замена неисправных деталей"
			],
			imageSrc: "/images/5.webp",
			index: 405,
			name: "Ремонт КПП и трансмиссии"
		},
		{
			title: "Ремонт электрики",
			description: [
				"Компьютерная диагностика",
				"Ремонт электрического оборудования",
				"Ремонт стартеров",
				"Ремонт генераторов",
				"Монтаж автосигнализаций",
				"Ремонт электростеклоподъемников",
				"Ремонт стеклоочистителей"
			],
			imageSrc: "/images/6.webp",
			index: 406,
			name: "Ремонт электрики"
		},
		{
			title: "Ремонт кузова",
			description: [
				"Ремонт и покраска кузова",
				"Восстановление геометрии",
				"Замена поврежденных деталей",
				"Удаление вмятин без покраски",
				"Антикоррозийная обработка",
				"Полировка и нанесение защитных покрытий"
			],
			imageSrc: "/images/7.webp",
			index: 407,
			name: "Ремонт кузова"
		},
		{
			title: "Обслуживание холодильных установок",
			description: [
				"Комплексная диагностика различных неисправностей",
				"Замена запчастей и комплектующих (компрессоров, испарителей и т.д.)",
				"Проверка герметичности, замена и заправка рабочих жидкостей",
				"Ремонт, пусконаладка, монтаж, сопровождение",
				"Замена электроники (модули, платы, кнопки...)",
				"Устранение стороннего шума",
				"Образование излишней наледи и инея",
				"Некорректность и сбои в работе табло, индикаторов, подсветки",
				"Ремонт или замена испарителя",
				"Восстановление после механических повреждений, регулировка, настройка и отладка основных узлов",
				"Замена элементов системы автоматического управления",
				"Устранение утечки фреона"
			],
			imageSrc: "/images/8.webp",
			index: 408,
			name: "Обслуживание холодильных установок"
		},
		{
			title: "Заправка кондиционеров",
			description: [
				"Проверка системы кондиционирования на герметичность",
				"Проверка системы кондиционирования на герметичность и заправка",
				"Озонирование салона",
				"Дезинфекция системы кондиционирования воздуха",
				
			],
			imageSrc: "/images/9.webp",
			index: 409,
			name: "Заправка кондиционеров"
		},
		// {
		// 	title: "Ремонт стартеров",
		// 	description: [
		// 		"Ремонт бендикса",
		// 		"Ремонт втулок",
		// 		"Ремонт втягивающего реле",
		// 		"Ремонт подшипников",
		// 		"Ремонт щеточного узла",
		// 		"Ремонт якоря",
		// 	],
		// 	imageSrc: "/images/10.webp",
		// 	index: 410,
		// 	name: "Ремонт стартера"
		// },
		// {
		// 	title: "Ремонт генераторов",
		// 	description: [
		// 		"Ремонт реле регулятора генератора",
		// 		"Ремонт диодного моста генератора",
		// 		"Ремонт подшипников (переднего, заднего) генератора",
		// 		"Ремонт обмотки, щеток генератора",
		// 		"Ремонт сальника генератора",
		// 		"Ремонт шкива генератора",
		// 	],
		// 	imageSrc: "/images/11.webp",
		// 	index: 411,
		// 	name: "Ремонт генераторов"
		// },
	];
	return (
		<section className="py-16 relative overflow-hidden" id="services">
			<div className="container mx-auto">
				<div className="">
					<div className="h-[2px] bg-secondary sd:w-32 xz:w-16 mb-5" />
					<h2 className="sd:text-5xl xz:text-3xl text-white">
						Ремонт <span className="text-secondary">грузовых автомобилей</span> <span className="sr-only">автосервис грузовых авто, ремонт фур</span>
					</h2>
					<div className="mt-10 text-white">
						<div className="grid sd:grid-cols-3 xz:grid-cols-1 ss:grid-cols-2 sd:gap-10 xz:gap-6 mt-12">
							{data.map((service, index) => (
								<article key={index} className="card rounded-xl overflow-hidden flex flex-col h-full">
									<figure>
										<Image src={service.imageSrc} alt={service.title} width={1280} height={720} />
									</figure>
									<div className="card-body bg-white text-black flex flex-col">
										<h3 className="card-title">{service.title}</h3>
										<ul className='sd:text-base xz:text-sm'>
											{
												service.description.map((el, idx) => (
													<li className='flex' key={idx}>
														• <h4 className="">{el}</h4>
													</li>
												))
											}
										</ul>
										<div className="flex flex-col justify-end mt-auto pt-6">
											<div className='sd:mb-0 xz:mb-3 w-full'>
												<a href={`tel:${phoneNumbers.phone1Link}`} className={`w-full`}>
													<button className="w-full relative overflow-hidden bg-secondary text-white rounded-full hover:rounded-full hover:skeleton flex justify-center gap-2 py-2.5 px-2">
														<svg className="w-6 h-6 animate-ringing" fill="currentColor" viewBox="0 0 24 24">
															<path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.23 11.36 11.36 0 003.55.57 1 1 0 011 1v3.55a1 1 0 01-1 1A19.94 19.94 0 012 4a1 1 0 011-1h3.55a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.23 1.1z"></path>
														</svg>
														{phoneNumbers.phone1}
														<span className="absolute inset-0 bg-white opacity-40 transform translate-x-full animate-slide"></span>
													</button>
												</a>
											</div>
											<div className='w-full mt-2'>
												<BtnComp title="Оставить заявку" index={service.index} name={service.name} />
											</div>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>

	);
};

export default Services;
