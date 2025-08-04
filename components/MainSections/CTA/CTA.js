import Image from "next/image";
import phoneNumbers from "@/config/config";
import BtnComp from "@/components/btn/BtnComp";

const CTA = () => {
	return (
		<section className={`relative bg-[url('/img/gruzoperevozki-belarus-kazahstan.webp')] bg-cover bg-center sd:py-20 xz:py-8 sd:min-h-[70vh] xz:min-h-[50vh]`}>

			<div className="absolute inset-0 bg-black/60"></div>

			<div className='container relative mx-auto text-white text-center'>
				<h2 className='sd:text-6xl xz:text-3xl xy:text-4xl text-primary'>
					Есть вопросы? <span className="sr-only">
						по грузоперевозкам Беларусь Казахстан
					</span>
				</h2>
				<p className='sd:text-2xl xz:text-lg mt-5 sd:max-w-xl xz:max-w-full mx-auto'>
					Получите бесплатную консультацию и расчёт стоимости:
				</p>

				<div className='mt-8 flex justify-center items-center'>
					<Image
						src='/svg/phone.svg'
						alt='Телефон для заказа '
						width={25} height={25}
						className="sd:w-10 xz:w-8 animate-ring"
					/>
					<div className='sd:text-5xl xz:text-2xl xy:text-3xl xx:text-4xl ml-2'>
						<a href={`tel:${phoneNumbers.phone1Link}`}>
							{phoneNumbers.phone1}
						</a>
					</div>
				</div>

				<div className='flex items-center justify-center mt-10'>
					<BtnComp title='Оставить заявку' index={333} name='Оставить заявку' bg/>
				</div>
			</div>
		</section>
	);
}

export default CTA;
