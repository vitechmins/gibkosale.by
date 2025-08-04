import MapComponent from "@/components/map/map"


const Kalkulyator = () => {
	return (
		<section className='relative bg-white sd:py-20 xz:py-10' id="calculyator">
			<article className='container mx-auto '>
				<p className='xz:font-light xl:font-normal uppercase sd:text-sm xz:text-xs mb-2'>
					онлайн калькулятор
				</p>
				<h3 className='sd:text-4xl xz:text-2xl font-semibold'>
					Расчёт стоимости поездки
				</h3>

				<MapComponent />
			</article>
		</section>
	)
}

export default Kalkulyator