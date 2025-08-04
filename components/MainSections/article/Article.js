import Image from "next/image";

const Article = () => {
	return (
		<section className='bg-white py-14 relative'>
			<article className='container mx-auto px-6'>

				<div className='flex justify-center'>
					<Image src='/logo/logo.webp' alt='Логотип' width={300} height={300} />
				</div>

				<div className='py-7'>
					Вам нужны <b>грузоперевозки Беларусь Казахстан</b> по выгодным тарифам? Мы предлагаем <b>международные перевозки</b> любых грузов с полным сопровождением. <b>Грузоперевозка из Беларуси в Казахстан</b> осуществляется быстро и надежно. Вывозим груз с вашего склада в любое удобное для вас время (есть склады в Дзержинске и Алматы). Обеспечим сохранность, точные сроки и конкурентные цены!
				</div>

				<h2 className='sd:text-5xl xz:text-xl font-semibold text-primary mb-5 mt-6'>
					🚛 Доставка грузов из Беларуси в Казахстан
				</h2>

				<div className='grid sd:grid-cols-3 xz:grid-cols-2 gap-10 mt-8'>
					<h3 className='sd:text-3xl xz:text-xl text-[#353535] font-semibold col-span-full border-l-4 border-yellow-500 bg-yellow-50 pl-4 py-2 rounded'>
						📦 Надёжные грузоперевозки из Беларуси в Казахстан
					</h3>

					<p className='col-span-full text-base leading-7'>
						Мы доставим ваш груз собственным транспортом: исправные автомобили, опытные водители-международники, круглосуточная поддержка и ежедневные рассылки о местоположении груза. Гарантируем оптимальный маршрут, своевременную доставку и конкурентные тарифы.
					</p>

					<h3 className='sd:text-3xl xz:text-xl text-[#353535] font-semibold col-span-full border-l-4 border-green-500 bg-green-50 pl-4 py-2 rounded'>
						🧭 Продуманная логистика и опытная команда
					</h3>

					<p className='col-span-full text-base leading-7'>
						<strong>Грузоперевозки Беларусь — Казахстан</strong> — это сложный логистический процесс, который требует внимания к деталям. Наши логисты, водители и экспедиторы проходят регулярное обучение, посещают семинары и тренинги, чтобы обеспечивать высочайший уровень сервиса.
					</p>

					<h3 className='sd:text-3xl xz:text-xl text-[#353535] font-semibold col-span-full border-l-4 border-blue-500 bg-blue-50 pl-4 py-2 rounded'>
						📑 Документы и особенности перевозки
					</h3>

					<p className='col-span-full text-base leading-7'>
						Мы тщательно оформляем все документы в соответствии с международными стандартами. При необходимости подбираем индивидуальные условия перевозки: способ крепления, тип загрузки и температурный режим. Осуществляем <strong>международные грузоперевозки</strong>, включая опасные грузы (ADR). Все автомобили укомплектованы ADR-наборами.
					</p>

					<h3 className='sd:text-3xl xz:text-xl text-[#353535] font-semibold col-span-full border-l-4 border-red-500 bg-red-50 pl-4 py-2 rounded'>
						⚖️ Ответственность и гибкость расчётов
					</h3>

					<p className='col-span-full text-base leading-7'>
						<strong>Международная перевозка</strong> требует высокой ответственности — и мы её берём на себя. Работаем с любыми формами расчёта, гибко подходим к каждому заказу и обеспечиваем прозрачность на всех этапах логистики.
					</p>

					<h3 className='sd:text-3xl xz:text-xl text-[#353535] font-semibold col-span-full border-l-4 border-purple-500 bg-purple-50 pl-4 py-2 rounded'>
						🤝 Почему выбирают ООО «АзияКонсал»
					</h3>

					<p className='col-span-full text-base leading-7'>
						<strong>Доставка грузов из Беларуси в Казахстан</strong> — это надёжный способ выстроить эффективное партнёрство, обеспечить стабильность и воспользоваться выгодными условиями транспортировки.
					</p>

				</div>
			</article>
		</section>
	);
};

export default Article;
