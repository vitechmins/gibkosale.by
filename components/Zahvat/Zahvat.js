import phoneNumbers from "@/config/config"
import FormZahvata from "@/components/Form/FormZahvata"


const Zahvat = () => {
	return (
		<section className="relative py-24 rounded-3xl mt-7 mb-7 sd:mx-20 xz:mx-0.5 overflow-hidden">

			<div className="absolute inset-0 bg-white/75 z-0 rounded-3xl" />

			{/* Контент */}
			<div className="relative z-10 container mx-auto">
				<div className="grid sd:grid-cols-2 xz:grid-cols-1 gap-4">
					<div className="text-black">
						<h2 className="sd:text-3xl xz:text-xl font-semibold">
							8 клиентов из 10 решают свой вопрос{" "}
							<span className="sr-only">по бурению</span> после первого звонка нам! Проверим?
						</h2>

						<div className="mt-12">
							<p className="text-gray-800 mb-1">позвоните по номеру:</p>
							<a
								href={`tel:${phoneNumbers.phone1Link}`}
								className="link link-hover text-3xl font-semibold block"
							>
								{phoneNumbers.phone1}
							</a>
							<p className="mt-4 text-gray-800">или оставьте заявку на сайте</p>
						</div>
					</div>

					<div>
						<FormZahvata />
					</div>
				</div>
			</div>
		</section>

	)
}

export default Zahvat