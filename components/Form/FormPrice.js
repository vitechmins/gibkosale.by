"use client";
import { sendOrderTelegram } from "@/http/telegramAPI";
import Link from "next/link";
import React, { useState } from "react";

const FormPrice = ({ selectedProduct, closeModal, setIsFormSubmitted }) => {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [cargo, setCargo] = useState("");
  const [message, setMessage] = useState("");
  const [alertActive, setAlertActive] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!orgName.trim() || !email.trim() || !tel.trim()) {
      setAlertText("Пожалуйста, заполните обязательные поля корректно.");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
      return;
    }

    const messageForm = `
<b>Заявка с сайта:</b>
<b>Название орг-ции / имя:</b> ${orgName}
<b>Email:</b> ${email}
<b>Телефон:</b> <a href="tel:${tel}">${tel}</a>
<b>Откуда везем груз:</b> ${fromCity || "Не указано"}
<b>Куда везем груз:</b> ${toCity || "Не указано"}
<b>Груз (вид, габариты, вес):</b> ${cargo || "Не указано"}
    `;

    sendOrderTelegram(messageForm).then((data) => {
      if (data.ok) {
        window.location.href = "/thank-you";
      }
    });
  };

  return (
    <div className="w-full sd:px-2 sd:py-2 xz:px-0 xz:py-0">
      <form className="font-medium" onSubmit={handleSubmit}>
        {/* Имя / организация */}
        <div className="form-control mt-4">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Имя / название организации*</span>
            <span className="label-text-alt text-[10px]">Обязательное поле</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="ООО Транспорт"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="form-control mt-4">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Email*</span>
            <span className="label-text-alt text-[10px]">Обязательное поле</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Телефон */}
        <div className="form-control mt-4">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Телефон*</span>
            <span className="label-text-alt text-xs">Обязательное поле</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            placeholder="Введите номер телефона"
            className="input input-bordered input-md w-full"
            required
          />
        </div>

        {/* Сообщение об ошибке */}
        {alertActive && (
          <div className="text-red-600 text-xs mt-1">{alertText}</div>
        )}

        {/* Откуда */}
        <div className="form-control mt-4">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Откуда везем груз</span>
            <span className="label-text-alt text-[10px]">Необязательное поле</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Минск"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          />
        </div>

        {/* Куда */}
        <div className="form-control mt-4">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Куда везем груз</span>
            <span className="label-text-alt text-[10px]">Необязательное поле</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Москва"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          />
        </div>

        {/* Груз */}
        <div className="form-control mt-4">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Груз (вид, габариты, вес)</span>
            <span className="label-text-alt text-[10px]">Необязательное поле</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Паллеты, 3х2 м, 1.5 т"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>


        {/* <div className="form-control mt-4">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Дополнительное сообщение</span>
            <span className="label-text-alt text-[10px]">Необязательное поле</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Ваше сообщение..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div> */}

        {/* Согласие на обработку */}
        <div className="form-control mt-3">
          <label className="cursor-pointer label flex justify-start items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-sm bg-white"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span className="label-text ml-2 xz:text-xs sd:text-sm font-medium text-left">
              Я согласен(на) на{" "}
              <Link
                href="/politika"
                target="_blank"
                className="underline sd:inline-block xz:block xy:inline-block"
              >
                обработку персональных данных
              </Link>
            </span>
          </label>
        </div>

        {/* Кнопка отправки */}
        <div className="form-control mt-6">
          <button
            className="btn bg-[#7CCE00] btn-lg font-bold text-white uppercase w-full"
            type="submit"
            disabled={!agree}
          >
            Рассчитать стоимость
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPrice;
