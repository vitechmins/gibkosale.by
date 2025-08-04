import React from 'react'

const Dostavka = () => {
	return (
		<section className="py-16 bg-white relative" id='dostavka'>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl sm:text-5xl font-bold mb-10 text-center text-gray-800">
					Доставка
				</h2>

				<div className="max-w-3xl mx-auto text-gray-700 space-y-8">
					<div className="bg-green-50 border border-green-200 p-6 rounded-lg shadow">
						<h3 className="text-xl font-semibold text-green-700 mb-2">
							Бесплатная доставка по Беларуси
						</h3>
						<p>
							Специально для наших клиентов мы предоставляем услугу бесплатной доставки по всей Беларуси.
							Независимо от вашего местонахождения, мы обеспечим своевременную доставку вашего заказа.
							Наша команда специалистов заботится о каждом этапе доставки, чтобы обеспечить вам удобство
							получения товаров в нужное время.
						</p>
					</div>

					<div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow">
						<p>
							Мы осознаем важность соблюдения сроков и делаем все возможное, чтобы ваш заказ был доставлен в течение недели.
							Сотрудничая с надежными партнерами и используя передовые технологии отслеживания, мы гарантируем безопасную
							и надежную доставку вашего заказа.
						</p>
						<p className="mt-4 font-medium text-blue-800">
							Бесплатная доставка распространяется на все виды товаров из нашего ассортимента.
						</p>
					</div>

					<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							Условия доставки
						</div>
						<div className="collapse-content space-y-3 text-base">
							<ul className="list-disc list-inside">
								<li>Доставка осуществляется транспортными компаниями до двери подъезда (без подъема на этаж).</li>
								<li>Срок доставки — от 4 до 45 дней, в зависимости от готовности или сборки заказа.</li>
								<li>Более точные сроки доставки сообщаются клиенту при оформлении заказа.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Dostavka
