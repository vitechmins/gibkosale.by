const Perevozka = () => {
	return (
		<section className='py-12 bg-gray-100 relative' id="perevozka">
			<div className='container mx-auto px-4'>
				<h2 className='sd:text-5xl xz:text-3xl font-semibold text-center text-gray-800'>
					Осуществляем перевозку продуктов питания
				</h2>

				<div className='h-[3px] w-32 bg-primary mx-auto my-5'></div>

				<article className='mt-7 text-lg text-gray-700 max-w-3xl mx-auto text-center'>
					<p>
						Наша компания предоставляет услуги по перевозке продуктов питания в строгом соответствии с санитарными нормами и требованиями.
						Мы гарантируем сохранность груза, соблюдение температурного режима и своевременную доставку.
					</p>
					<p className='mt-4'>
						В нашем автопарке – современные рефрижераторы и изотермические фургоны, обеспечивающие безопасную транспортировку скоропортящихся товаров.
					</p>
				</article>

				<div className='mt-8 text-center'>
					<button className='px-6 py-3 bg-primary text-white rounded-lg text-lg font-medium shadow-lg hover:bg-primary-dark transition'>
						Связаться с нами
					</button>
				</div>
			</div>
		</section>
	)
}

export default Perevozka;
