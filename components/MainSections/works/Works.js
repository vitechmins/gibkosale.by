

const Works = () => {
	return (
		<section className='py-12'>
			<div className='container mx-auto'>
				<h6 className='sd:text-2xl xz:text-xl font-semibold'>
					Как заказать услуги перевозки?
				</h6>

				<ul className="steps mt-10 steps-vertical sd:steps-horizontal">
					<li className="step step-primary">
						<p className='text-gray-700 font-semibold'>
							Выберите удобный Тариф
						</p>
					
					</li>
					<li className="step step-primary">
						<p className='text-gray-700 font-semibold'>
							Заполните форму или позвоните
						</p>
					</li>
					<li className="step step-primary">
						<p className='text-gray-700 font-semibold'>
							Встречайте своего водителя
						</p>
					</li>
					<li className="step" data-content="✓"></li>
				</ul>
			</div>
		</section>
	)
}

export default Works