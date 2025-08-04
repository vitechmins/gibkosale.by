"use client"

import { useState } from "react";
import Modal from "../modal/Modal";
import Image from "next/image";

const BtnComp = ({ price, title, index, center, name, consult, color, w, bg, small, img }) => {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleOrderClick = (product) => {
		setSelectedProduct(product);
		document.getElementById(`my_modal_${index}`).showModal();
	};
	const closeModal = () => {
		document.getElementById(`my_modal_${index}`).close();
	};
	return (
		<div className={`flex items-center z-0 ${center ? 'justify-center' : ''} cursor-pointer`}>
			<button
				className={`
					${w ? 'xz:w-full sd:w-auto sd:px-16 xz:px-10' : 'w-auto'}
					 btn border z-0 rounded-md
					 ${color ? `${color} border-none` : `border-none`} 
						cursor-pointer ${bg ? 'bg-primary text-white striped-shining-button boxShadow-inner-amber striped-shining-button' : 'bg-white text-primary'}
						${small ? 'sd:btn-md xz:btn-xs' : 'btn-lg'}`}
				onClick={() => handleOrderClick(name || title)}
			>
				{title}
				<div className={`${img ? 'block': 'hidden'} sd:p-1.5 xz:p-1 rounded-xl sd:ml-2 xz:ml-0`}>
					<Image src='/svg/phone-6.svg' alt='Обратный звонок' width={25} height={25} className={`animate-ring sd:w-6 xz:w-4 rotate-[260deg]`} />
				</div>
			</button>

			<Modal
				price={price}
				selectedProduct={selectedProduct}
				closeModal={closeModal}
				isFormSubmitted={isFormSubmitted}
				setIsFormSubmitted={setIsFormSubmitted}
				index={index}
				consult={consult}
				exit
		
			/>
		</div>
	)
}


export default BtnComp;
