import Image from 'next/image';
import Icon from '../iconMessenger/Icon';
import Link from 'next/link';
import phoneNumbers from '@/config/config';

const Footer = () => {
	return (
		<footer className='bg-gray-800 relative py-14 z-40' id='contacts'>
			<div className='container mx-auto'>
				<div>
					<div>
						<Link href='/'>
							<div>
								<Image src='/logo/logo.webp' alt='Логотип' width={400} height={400} />
							</div>
						</Link>
					</div>
				</div>

				<aside className='text-white flex flex-wrap sd:justify-between xz:justify-start items-start py-8 sd:flex-row xz:flex-col'>
					<div className='sd:mt-0 xz:mt-10'>
						<div className='flex flex-col items-start sd:justify-center xz:justify-start'>
							<p className='text-primary'>Контакты</p>

							<div className='mt-2'>
								<p className='font-light ml-2 text-secondary text-xs'>Отдел Продаж</p>
								<div className='flex items-start space-x-2'>
									<a href={`tel:${phoneNumbers.phone1Link}`} className='font-semibold sd:text-xl xz:text-xl mb-3 block'>
										{phoneNumbers.phone1}
									</a>
								</div>
							</div>

							<div className='mt-2'>
								<p className='font-light ml-2 text-secondary text-xs'>Отдел Доставки</p>
								<div className='flex items-start space-x-2'>
									<a href={`tel:${phoneNumbers.phone1Link}`} className='font-semibold sd:text-xl xz:text-xl mb-3 block'>
										{phoneNumbers.phone1}
									</a>
								</div>
							</div>

							<div className='mt-2'>
								<p className='font-light ml-2 text-secondary text-xs'>Отдел Контроля Качества</p>
								<div className='flex items-start space-x-2'>
									<a href={`tel:${phoneNumbers.phone1Link}`} className='font-semibold sd:text-xl xz:text-xl mb-3 block'>
										{phoneNumbers.phone1}
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='sd:mt-0 xz:mt-4'>
						<p className='text-primary'>Режим работы</p>
						<p className='text-lg'>
							Пн-Вс 9:00-21:00
							<span className='block text-sm font-medium text-green-500'>Без выходных</span>
						</p>
					</div>

					<div className='sd:mt-0 xz:mt-4'>
						<p className='text-primary'>Почта</p>
						<a href='mailto:gibkosale24@gmail.com' className='text-lg'>
							gibkosale24@gmail.com
						</a>
					</div>

					<div className='sd:mt-0 xz:mt-4'>
						<p className='text-primary'>Social</p>
						<div className='mt-1.5'>
							<Icon />
						</div>
					</div>
				</aside>

				<aside className='sd:mt-8 xz:mt-4 pb-8'>
					<div className='sd:mt-0 xz:mt-4 sd:text-center xz:text-left'>
						<div className='text-black mt-4'>
							<p className='sd:text-3xl xz:text-lg mb-2'>ООО " ГИБКО СЕЙЛ"</p>
							<p className='sd:text-2xl xz:text-base mb-2'>УНП 193882171</p>
							<div className='mt-3 sd:text-sm xz:text-xs'>
								<p className='mb-2'>Зарегистрирован в Мингорисполкоме 24.06.2025</p>
								<p className='mb-2'>
									Юр. адрес : 220051 , г.Минск , ул.Сергея Есенина , дом 130 , кабинет 3
								</p>
							</div>
						</div>
					</div>
				</aside>

				{/* === Добавленные ссылки на документы === */}
				<aside className='mt-4 text-center'>
					<div className='text-white space-y-2'>
						<a
							href='/politika.docx'
							download
							className='block underline text-sm hover:text-primary transition'
						>
							ПОЛИТИКА обработки персональных данных
						</a>
						<a
							href='/oferta.docx'
							download
							className='block underline text-sm hover:text-primary transition'
						>
							ПУБЛИЧНЫЙ ДОГОВОР возмездного оказания услуг
						</a>
					</div>
				</aside>
			</div>

			<aside className='border-t border-gray-700 pt-2 pb-2 mt-6'>
				<div className='container mx-auto text-center'>
					<p className='text-gray-400 xs:text-base xz:text-xs font-extralight leading-3'>
						Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
					</p>
					<p className='text-white/25 xs:text-xs xz:text-[8px] font-medium mt-2'>
						Copyright © 2025 Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel='noreferrer' className='text-sky-500/50 underline'>
							{' '}VI:TECH
						</a>
					</p>
				</div>
			</aside>
		</footer>
	);
};

export default Footer;
