import phoneNumbers from "@/config/config";
import Image from "next/image"
import { usePathname } from 'next/navigation';

const HeaderInfo = () => {
	const pathname = usePathname()
	return (
		<div className=''>
			<div className={`mt-4 ${pathname === '/kontakty/' ? 'hidden' : 'xz:block'} sd:hidden `}>
				<div className='container mx-auto'>
					<div className='flex'>
						<a href={`tel:${phoneNumbers.phone1Link}`} className='font-bold'>
							Отдел Продаж {phoneNumbers.phone1}
						</a>
						<Image src='/svg/a1.svg' alt='Телефон оператора А1' className="ml-1" width={15} height={15} />
					</div>
					<div className='flex'>
						<a href={`tel:${phoneNumbers.phone1Link}`} className='font-bold'>
							Отдел Продаж {phoneNumbers.phone1}
						</a>
						<Image src='/svg/a1.svg' alt='Телефон оператора А1' className="ml-1" width={15} height={15} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderInfo