"use client";
import { useState } from 'react';
import { sendOrderTelegram } from '@/http/telegramAPI';

const PhoneInput = ({ value, onChange, setAlertText, setAlertActive }) => {
	const formatPhoneNumber = (input) => {
		const digits = input.replace(/\D/g, '');
		if (!digits.startsWith('375')) {
			return '+375 ';
		}
		let formatted = `+375`;
		if (digits.length > 3) formatted += ` ${digits.slice(3, 5)}`;
		if (digits.length > 5) formatted += ` ${digits.slice(5, 8)}`;
		if (digits.length > 8) formatted += `-${digits.slice(8, 10)}`;
		if (digits.length > 10) formatted += `-${digits.slice(10, 12)}`;
		return formatted;
	};

	const handleChange = (e) => {
		let formatted = formatPhoneNumber(e.target.value);
		const digits = formatted.replace(/\D/g, '');
		const operatorCode = digits.slice(3, 5);
		const validOperators = ["29", "33", "44", "25"];

		if (digits.length >= 5 && !validOperators.includes(operatorCode)) {
			setAlertText('Введите код оператора 29, 44, 33, 25');
			setAlertActive(true);
			setTimeout(() => setAlertActive(false), 3000);
			formatted = '+375 ';
		}

		onChange(formatted);
	};

	return (
		<input
			type="text"
			value={value}
			onChange={handleChange}
			placeholder="+375 xx xxx-xx-xx"
			className="input input-bordered input-md w-full"
		/>
	);
};

const FormOrder2 = ({ data, setData, setIsActive }) => {
	const [tel, setTel] = useState('+375 ');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [address, setAddress] = useState('');
	const [alertActive, setAlertActive] = useState(false);
	const [alertText, setAlertText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const telDigitsOnly = tel.replace(/\D/g, '');
		if (telDigitsOnly.length !== 12) {
			setAlertText('Введите весь номер телефона в правильном формате: +375 XX XXX-XX-XX');
			setAlertActive(true);
			setTimeout(() => setAlertActive(false), 4000);
			return;
		}

		const productList = data.map((item, i) => `${i + 1}) ${item.title} — ${item.quantity} шт. (${item.price}р.)`).join('\n');
		const total = data.reduce((acc, item) => acc + item.price * item.quantity, 0);

		let messageForm = `<b>Заказ с сайта:</b>\n<b>Товары:</b>\n${productList}\n\n<b>Итого:</b> ${total.toFixed(2)} руб.`;
		messageForm += `\n<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>`;
		if (name) messageForm += `\n<b>Имя:</b> ${name}`;
		if (surname) messageForm += `\n<b>Фамилия:</b> ${surname}`;
		if (address) messageForm += `\n<b>Адрес:</b> ${address}`;

		sendOrderTelegram(messageForm).then(data => {
			if (data.ok) {
				localStorage.removeItem('cart');
				setData([]);
				setIsActive(false);
				window.location.href = '/thank-you';
			}
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="text-black">
				<div className="form-control mt-4">
					<label className="label">
						<span className="label-text text-sm">Имя (необязательно)</span>
					</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Ваше имя"
						className="input input-bordered input-md w-full"
					/>
				</div>

				<div className="form-control mt-4">
					<label className="label">
						<span className="label-text text-sm">Фамилия (необязательно)</span>
					</label>
					<input
						type="text"
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
						placeholder="Ваша фамилия"
						className="input input-bordered input-md w-full"
					/>
				</div>

				<div className="form-control mt-4">
					<label className="label">
						<span className="label-text text-sm">Адрес (необязательно)</span>
					</label>
					<input
						type="text"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						placeholder="Ваш адрес"
						className="input input-bordered input-md w-full"
					/>
				</div>

				<div className="form-control mt-4">
					<label className="label flex justify-between">
						<span className="label-text text-sm">Телефон (+375 xx xxx-xx-xx)</span>
						<span className="label-text-alt text-xs">Обязательное поле</span>
					</label>
					<PhoneInput value={tel} onChange={setTel} setAlertText={setAlertText} setAlertActive={setAlertActive} />
					{alertActive && <div className="text-red-800 mt-1">{alertText}</div>}
				</div>

				<div className="form-control mt-6">
					<button className="btn btn-primary font-bold text-white uppercase" type="submit">
						Оформить заказ
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormOrder2;
