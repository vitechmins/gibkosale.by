import Image from 'next/image'
import React from 'react'

const Article3 = () => {
	return (
		<section className='relative bg-white py-16'>
			<article className='container mx-auto'>
				<h2 className='sd:text-5xl xz:text-3xl font-semibold text-center'>
					Перевозка груза без ошибок: готовим документы правильно
				</h2>

				<div className='mt-12 space-y-10 leading-8 xz:text-base sd:text-lg sd:px-8 xz:px-0'>
					<p>
						Планируя <strong>международные перевозки</strong> по маршруту Беларусь — Казахстан, важно заблаговременно подготовить полный пакет бумаг. Правильные <strong>документы для грузоперевозки</strong> ускоряют границу, снижают расходы и защищают ваш бизнес от штрафов. В этой статье собран список обязательных и дополнительных бумаг, сроки их оформления и нюансы <strong>экспорта Беларусь Казахстан</strong>.
					</p>

					{/* Основной пакет документов */}
					<h3 className='bg-primary/5 text-primary border-l-4 border-primary pl-4 py-2 rounded-lg font-semibold flex items-center gap-2'>
						<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
						Основной пакет документов
					</h3>
					<ul className='list-disc list-inside space-y-2'>
						<li><b>CMR-накладная</b> — международная товарно-транспортная накладная, заполняется на трёх языках (RU, EN, BY/KZ).</li>
						<li><b>Инвойс (счёт-фактура)</b> — отражает стоимость груза, валюту, данные отправителя и получателя.</li>
						<li><b>Упаковочный лист (Packing List)</b> — детализация количества мест, веса нетто/брутто и габаритов.</li>
						<li><b>Контракт/договор поставки</b> — подтверждает коммерческие отношения сторон.</li>
						<li><b>Сертификат происхождения формы СТ-1</b> — даёт право на льготы в рамках ЕАЭС.</li>
						<li><b>Страховой полис (cargo insurance)</b> — покрывает риски утраты или повреждения.</li>
					</ul>

					{/* Дополнительные документы */}
					<h3 className='bg-primary/5 text-primary border-l-4 border-primary pl-4 py-2 rounded-lg font-semibold flex items-center gap-2'>
						<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
						Дополнительные документы (по требованию)
					</h3>
					<ul className='list-disc list-inside space-y-2'>
						<li><b>Ветеринарный/фитосанитарный сертификат</b> — для продукции животного и растительного происхождения.</li>
						<li><b>Сертификат соответствия ЕАЭС</b> или Декларация — для товаров, подпадающих под техрегламенты.</li>
						<li><b>Паспорт безопасности химической продукции</b> — при перевозке химии.</li>
						<li><b>ADR-разрешение</b> — для опасных грузов.</li>
						<li><b>Экспортная декларация (ЭД-1)</b> — при оформлении вывоза в таможне отправления.</li>
					</ul>

					{/* Сроки оформления */}
					<h3 className='bg-primary/5 text-primary border-l-4 border-primary pl-4 py-2 rounded-lg font-semibold flex items-center gap-2'>
						<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
						Сроки оформления
					</h3>
					<p>
						Подготовка стандартного комплекта обычно занимает 1–2&nbsp;рабочих дня. Сертификаты происхождения и соответствия оформляются 3–5&nbsp;дней. Для ветеринарных/фитосанитарных бумаг закладывайте до недели, особенно в сезон.
					</p>

					{/* Особенности на границе */}
					<h3 className='bg-primary/5 text-primary border-l-4 border-primary pl-4 py-2 rounded-lg font-semibold flex items-center gap-2'>
						<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
						Особенности прохождения границы
					</h3>
					<p>
						Беларусь и Казахстан входят в ЕАЭС, однако фуры проходят транзит через Россию. Важно заранее подать электронное декларирование, правильно указать коды ТН ВЭД и оформлять пломбы. Любые расхождения в весе или стоимости вызывают доосмотр и задержку до 48 часов.
					</p>

					{/* Чек-лист */}
					<h3 className='bg-primary/5 text-primary border-l-4 border-primary pl-4 py-2 rounded-lg font-semibold flex items-center gap-2'>
						<Image src='/svg/point.svg' alt='Символ точка' width={15} height={15} />
						Чек-лист для отправителя
					</h3>
					<ul className='list-decimal list-inside space-y-2'>
						<li>Проверьте правильность всех реквизитов в CMR, инвойсе и упаковочном листе.</li>
						<li>Убедитесь, что ценность груза застрахована на 100 %.</li>
						<li>Подготовьте оригиналы сертификатов и копии на английском.</li>
						<li>Передайте водителю доверенность и инструкцию по маршруту.</li>
						<li>Загрузите документы в электронную систему для таможни заранее.</li>
					</ul>

					{/* Заключение / CTA */}
					<p className='bg-primary/10 border-l-4 border-primary p-6 rounded-lg font-semibold'>
						Хотите избежать бюрократии? Мы оформим все <strong>документы для грузоперевозки</strong> и обеспечим бесперебойный <strong>экспорт Беларусь Казахстан</strong>. Оставьте заявку — и ваш груз отправится в путь без задержек!
					</p>
				</div>
			</article>
		</section>
	)
}

export default Article3
