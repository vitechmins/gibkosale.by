import phoneNumbers from "@/config/config"
import Image from "next/image"

const Social = () => {
	return (
		<div className="flex fixed sd:bottom-10 xz:bottom-12 sd:right-6 xz:right-2 flex-col justify-center z-40">
			<a href={`https://t.me/${phoneNumbers.phone1Social}`} target="_blank" aria-label="Телеграмм для заказа" className='my-1 lg:tooltip' data-tip="telegram">
				<Image src='/svg/telegram.svg' className='mb-2' alt='Телеграмм для заказа' width={25} height={25} />
			</a>

			<a href={`viber://chat?number=%2B${phoneNumbers.phone1Social}`} aria-label="Вайбер для заказа" target="_blank" className='my-2 lg:tooltip' data-tip="viber">
				<Image src='/svg/viber.svg' className='mb-1' alt='Вайбер для заказа' width={25} height={25} />
			</a>

			<a href={`http://wa.me/${phoneNumbers.phone1Social}?text=Нужна%20консультация`} aria-label="whatsapp для заказа" target="_blank" className='my-2 lg:tooltip' data-tip="whatsApp">
				<Image src='/svg/whatsapp.svg' className='mb-1' alt='whatsapp для заказа' width={25} height={25} />
			</a>

			<a href="https://www.instagram.com/" target="_blank" aria-label="instagram для заказа" className='my-2 lg:tooltip' data-tip="instagram">
				<Image src='/svg/instagram.svg' className='' alt='instagram для заказа' width={25} height={25} />
			</a>

		</div>
	)
}

export default Social