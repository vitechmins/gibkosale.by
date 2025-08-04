"use client"
import { useState, useRef } from 'react';
import Image from "next/image";
import Modal from '@/components/modal/Modal';

const Tariffs = () => {
	const [selectedTariff, setSelectedTariff] = useState(null);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [id, setId] = useState(null)

	const tariffs = [
		{ id: 310, name: 'Стандарт', price: '1,00', img: '/images/standard.webp' },
		{ id: 311, name: 'Комфорт', price: '1,20', img: '/images/comfort.webp' },
		{ id: 312, name: 'Бизнес', price: '2,60', img: '/images/business.webp' },
		// { id: 313, name: 'VIP', price: '3,60', img: '/images/vip3.webp' },
		{ id: 314, name: 'Минивен', price: '1,60', img: '/images/minivan.webp' },
	];

	// Create an array of refs for modals
	const modalRefs = useRef([]);

	const openModal = (id, tariff) => {

		setSelectedTariff(tariff);
		document.getElementById(`my_modal_${id}`).showModal();
	};

	const closeModal = (index) => {
		if (modalRefs.current[index]) {
			modalRefs.current[index].close();
		}
		setIsFormSubmitted(false);
		setSelectedTariff(null);
	};

	return (
		<section className='sd:py-16 xz:py-7' id='tarif'>
			<article className='container mx-auto'>
				<h4 className='sd:text-2xl xz:text-xl font-semibold'>
					Тарифы на перевозку пассажиров
				</h4>

				<div className='grid sd:grid-cols-4 xz:grid-cols-1 sd:gap-4 xz:gap-10 items-center xz:mt-10 sd:mt-14'>
					{tariffs.map((tariff, index) => (
						<div key={index}>
							<div>
								<Image
									src={tariff.img}
									alt={`Тариф на Пассажирские перевозки - ${tariff.name}`}
									width={560} height={285}
								/>
							</div>
							<div className='mt-2'>
								<h5
									className='bg-primary rounded-full py-1 px-3 text-center font-semibold cursor-pointer'
									onClick={() => openModal(tariff.id, tariff)}
								>
									{tariff.name}
								</h5>
								<div className='mt-2 text-center'>
									<p className='xz:font-normal xl:font-semibold'>
										<span className="font-bold text-xl">{tariff.price}</span> бел.руб./км.
									</p>
								</div>
							</div>
							<Modal
								selectedProduct={tariff.name}
								closeModal={() => closeModal(index)}
								isFormSubmitted={isFormSubmitted}
								setIsFormSubmitted={setIsFormSubmitted}
								index={tariff.id}
							/>

						</div>
					))}
				</div>
			</article>


		</section>
	);
};

export default Tariffs;
