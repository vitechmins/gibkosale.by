"use client";
import Link from "next/link";
import { useState, useContext, useRef, useEffect } from "react";
import { MyContext } from "@/contexts/MyContextProvider";
import { ExtraCharge } from "@/constans/ExtraCharge";

const BtnInCard = ({ item }) => {
	const { setCount } = useContext(MyContext);
	const [quantity, setQuantity] = useState(1);
	const modalRef = useRef(null);
	const timeoutRef = useRef(null);

	const previewImg = Array.isArray(item.img) ? item.img[0] : item.img;

	const handleAddToCart = () => {
		const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
		const index = existingCart.findIndex(cartItem => cartItem.id === item.id);

		if (index !== -1) {
			existingCart[index].quantity += quantity;
		} else {
			existingCart.push({
				id: item.id,
				title: item.title,
				quantity,
				price: item.price * ExtraCharge,
				img: previewImg,
			});
		}

		localStorage.setItem("cart", JSON.stringify(existingCart));

		// Обновляем общее количество товаров
		const total = existingCart.reduce((acc, curr) => acc + curr.quantity, 0);
		setCount(total);

		if (modalRef.current) {
			modalRef.current.showModal();
			clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => {
				modalRef.current?.close();
			}, 7000);
		}
	};

	useEffect(() => {
		return () => clearTimeout(timeoutRef.current);
	}, []);

	return (
		<>
			<button className="btn btn-outline rounded-none" onClick={handleAddToCart}>
				В корзину
			</button>

			<dialog ref={modalRef} className="modal">
				<div className="modal-box">
					<p className="font-bold text-lg mb-3">Товар добавлен в корзину</p>
					<p className="font-bold text-lg">{item.title}</p>
					<div className='flex items-center justify-between'>
						<div className="w-[7rem] h-[7rem] mt-5 mb-3 rounded-lg overflow-hidden border border-gray-300">
							<img src={previewImg} alt={item.title} className="w-full h-full object-cover" />
						</div>
						<strong className="text-2xl font-medium text-gray-800">
							{item.price * ExtraCharge} р.
						</strong>
					</div>
					<div className="modal-action">
						<Link href='/korzina' className="btn">Перейти в корзину</Link>
						<form method="dialog">
							<button className="btn">Продолжить покупки</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
};

export default BtnInCard;
