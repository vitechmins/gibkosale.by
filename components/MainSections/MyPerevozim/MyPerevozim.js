import Image from 'next/image';
import React from 'react';

const MyPerevozim = () => {
	return (
		<section className="my-10 relative" id='service'>
			<div className="container mx-auto">
				<div className='bg-white/80 px-4 py-24 rounded-3xl'>
					<h2 className="sd:text-5xl xz:text-3xl font-semibold mb-10 text-center">Мы перевозим</h2>
					<h3 className="sd:text-center xz:text-left text-red-500 font-bold sd:text-4xl xz:text-xl sd:mb-12 xz:mb-8 uppercase flex items-center sd:justify-center xz:justify-start">
						<Image src='/svg/point.svg' alt='Символ точка' width={10} height={10} className='mr-2' />
						СБОРНЫЕ ГРУЗЫ
					</h3>
					<div className="grid grid-cols-1 sd:grid-cols-2 sd:gap-12 xz:gap-8 sd:text-3xl xz:text-lg font-semibold mt-5 sd:px-28 xz:px-0">
						<div className="space-y-6">
							<div className='flex items-center space-x-1.5'>
								<Image src='/svg/point.svg' alt='Символ точка' width={10} height={10} />
								<p className=''>Комплектные грузы</p>
							</div>
							<div className='flex items-center space-x-1.5'>
								<Image src='/svg/point.svg' alt='Символ точка' width={10} height={10} />
								<p>Негабаритные и тяжеловесные грузы</p>
							</div>
						</div>
						<div className="space-y-6">
							<div className='flex items-center space-x-1.5'>
								<Image src='/svg/point.svg' alt='Символ точка' width={10} height={10} />
								<p>Грузы с температурным режимом</p>
							</div>
							<div className='flex items-center space-x-1.5'>
								<Image src='/svg/point.svg' alt='Символ точка' width={10} height={10} />
								<p>Опасные грузы</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyPerevozim;
