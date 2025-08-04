import Link from "next/link"

const page = () => {
	return (
		<main className='xz:min-h-[80vh] sd:min-h-screen pt-48'>
			<section className='flex items-center justify-center h-full'>
				<div className='container mx-auto text-black'>
					<div className='sd:px-20 xz:px-1'>
						<h1 className='sd:text-5xl xz:text-3xl font-semibold text-shadow'>
							Ваш заказ принят!
						</h1>
						<p className="sd:text-3xl xz:text-xl mt-4 text-shadow">
							Администратор свяжется с вами в ближайшее время для подтверждения заказа.
						</p>
						<p className='mt-6'>
							Спасибо за покупку!
						</p>
						<div className='mt-5'>
							<Link href='/' className="underline">
								На главную
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default page