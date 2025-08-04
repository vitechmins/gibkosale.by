"use client"
import { useState } from 'react';
import { sendOrderTelegram } from '@/http/telegramAPI';

const FormOrder = ({ selectedProduct, closeModal, setIsFormSubmitted, title, btn, setIsOpen, setActiveSendForm }) => {
	const [formData, setFormData] = useState({ phone: '', email: '', issueType: '' });
	const [alertActive, setAlertActive] = useState(false);
	const [alertText, setAlertText] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!formData.phone.trim() || !formData.email.trim()) {
			setAlertText('Пожалуйста, заполните все обязательные поля: телефон и email');
			setAlertActive(true);
			setTimeout(() => setAlertActive(false), 4000);
			return;
		}

		let messageForm = `<b>Заказ с сайта :</b>\n<b>${selectedProduct}</b>\n<b>Телефон:</b> <a href='tel:${formData.phone}'>${formData.phone}</a>\n<b>Email:</b> ${formData.email}\n<b>Интересует:</b> ${formData.issueType || 'Не указано'}`;

		sendOrderTelegram(messageForm).then(data => {
			if (data.ok) {
				window.location.href = '/thank-you';
				setActiveSendForm(true);
				setTimeout(() => setActiveSendForm(false), 4000);
				setIsOpen(false);
				closeModal();
			}
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="text-black">
				<div className="form-control mt-4">
					<label className="label flex justify-between">
						<span className="label-text text-sm">Телефон*</span>
						<span className="label-text-alt text-xs">Обязательное поле</span>
					</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Введите номер телефона"
						className="input input-bordered input-md w-full"
						required
					/>
				</div>

				<div className="form-control mt-4">
					<label className="label flex justify-between">
						<span className="label-text text-sm">Email*</span>
						<span className="label-text-alt text-xs">Обязательное поле</span>
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="example@email.com"
						className="input input-bordered input-md w-full"
						required
					/>
				</div>

				{alertActive && <div className="text-red-800 mt-2">{alertText}</div>}

				<div className="form-control mt-6">
					<button className="btn btn-primary font-bold text-white uppercase" type="submit">
						{btn}
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormOrder;
