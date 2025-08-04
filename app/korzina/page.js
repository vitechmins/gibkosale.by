"use client";
import UserCart from "@/components/UserCart/UserCart";
import { useEffect, useState } from "react";
import { dataProducts } from "@/constans/DataProducts";
import { ExtraCharge } from "@/constans/ExtraCharge";

export default function Cart() {
	const [data, setData] = useState([]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const cartData = JSON.parse(localStorage.getItem("cart")) || [];

			const result = cartData.map((cartItem) => {
				let product = null;

				for (const category of dataProducts) {
					const found = category.children.find(p => p.id === cartItem.id);
					if (found) {
						product = found;
						break;
					}
				}

				if (!product) return null;

				return {
					id: cartItem.id,
					title: cartItem.title,
					quantity: cartItem.quantity,
					price: product.price * ExtraCharge,
					img: Array.isArray(product.img) ? product.img[0] : product.img,
				};
			}).filter(Boolean);

			setData(result);
		}
	}, []);

	return (
		<main className="">
			{data && data.length ? (
				<div className="container mx-auto pt-36">
					<UserCart data={data} setData={setData} />
				</div>
			) : (
				<div className="hero min-h-screen" style={{ backgroundImage: `url("/images/korzina.webp")` }}>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md text-white bg-black/70 px-5 py-4 rounded-md">
							<h1 className="mb-5 text-5xl font-bold uppercase">Пусто</h1>
							<p className="mb-5">В вашей корзине нет товаров</p>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
