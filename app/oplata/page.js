import phoneNumbers from '@/config/config';
import React from 'react'

export const metadata = {
  title: 'Оплата товара | GibkoSale.by — интернет-магазин в Минске',
  description: `➤➤➤ Удобная оплата любым способом ☎️ ${phoneNumbers.phone1} ✓ Наличные, безналичные, оплата частями 🚀  📦  ⚡`,
  keywords: 'оплата товара, купить онлайн Минск, оплата частями, наложенный платеж, GibkoSale',
  alternates: {
    canonical: 'https://gibkosale.by/oplata/'
  },
  ogTitle: 'Оплата товара | GibkoSale.by',
  ogDescription: `Выберите удобный способ оплаты: наличные, безналичные, оплата частями ✓ ${phoneNumbers.phone1} 🚀 📦`,
  ogImage: 'https://gibkosale.by/logo/logo.webp',
  ogType: 'website',
  ogUrl: 'https://gibkosale.by/oplata',
  twitterTitle: 'Оплата | Интернет-магазин GibkoSale.by',
  twitterDescription: `Любой удобный способ оплаты — звоните ☎️ ${phoneNumbers.phone1} ✓ Быстро и безопасно.`,
  twitterImage: 'https://gibkosale.by/logo/logo.webp',
  twitterCard: 'summary_large_image'
};


const page = () => {
	return (
		<main>
		<section className="pb-24 pt-36 relative bg-white" id='oplata'>
			<div className="container mx-auto px-4">
				<h1 className="text-3xl sm:text-5xl font-bold mb-10 text-center text-gray-800">
					Оплата
				</h1>

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
		</main>
	)
}

export default page