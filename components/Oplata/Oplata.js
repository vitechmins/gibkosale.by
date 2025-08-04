import React from 'react'

const Oplata = () => {
	return (
		<section className="py-16 relative bg-white" id='oplata'>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl sm:text-5xl font-bold mb-10 text-center text-gray-800">
					Оплата
				</h2>

				<div className="max-w-3xl mx-auto text-gray-700 space-y-8">
					<p>
						Мы обеспечили возможность выбора вами лично желаемой формы оплаты при покупке. Вне зависимости от выбранного варианта оплаты, расчет производится только в белорусских рублях.
					</p>

					<p>
						Вся информация и персональные данные, полученные от вас (включая, но не ограничиваясь: имя, фамилия, телефон, адрес электронной почты и т.д.), надежно хранятся в нашей базе данных в соответствии с действующим законодательством и не передаются третьим лицам.
					</p>

					<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							Наличный расчет
						</div>
						<div className="collapse-content">
							<p>При получении товара вы можете оплатить покупку наличными курьеру.</p>
						</div>
					</div>

					<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							Безналичный расчет
						</div>
						<div className="collapse-content space-y-2">
							<p>Оплата банковской картой через терминал.</p>
							<p>Оплата курьеру при доставке.</p>
						</div>
					</div>

					<div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							Оплата частями
						</div>
						<div className="collapse-content">
							<p>
								Любой товар можно оплатить частями. Предоставляется возможность выбора наиболее подходящих для вас условий: суммы первоначального взноса и периода погашения.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Oplata
