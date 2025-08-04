"use client";
import { sendOrderTelegram } from "@/http/telegramAPI";
import Link from "next/link";
import React, { useState } from "react";

const FormZahvata = ({ setIsOpen, setActiveSendForm, selectedProduct }) => {
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [alertActive, setAlertActive] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tel.trim()) {
      setAlertText("Пожалуйста, введите номер телефона.");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
      return;
    }

    const messageForm = `
<b>Заказ с сайта:</b>
<b>C синего фона</b>
<b>Телефон:</b> <a href="tel:${tel}">${tel}</a>
<b>Имя / сообщение:</b> ${name || "Не указано"}
    `;

    sendOrderTelegram(messageForm).then((data) => {
      if (data.ok) {
        window.location.href = "/thank-you";
        setTimeout(() => setActiveSendForm?.(false), 4000);
        setIsOpen?.(false);
      }
    });
  };

  return (
    <div className="w-full">
      <form className="text-black" onSubmit={handleSubmit}>
        {/* Имя / сообщение */}
        <div className="form-control mt-4">
          <label className="label flex justify-between">
            <span className="label-text ">Имя</span>
            <span className="label-text-alt text-[10px] text-gray-600">
              Необязательное поле
            </span>
          </label>
          <input
            className="input input-bordered bg-white w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
          />
        </div>

        {/* Телефон */}
        <div className="form-control mt-4">
          <label className="label flex justify-between">
            <span className="label-text ">Телефон*</span>
            <span className="label-text-alt text-[10px] text-gray-600">
              Обязательное поле
            </span>
          </label>
          <input
            type="tel"
            className="input input-bordered bg-white w-full"
            placeholder="Введите номер телефона"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
          />
          {alertActive && (
            <div className="text-red-600 text-xs mt-1">{alertText}</div>
          )}
        </div>

        {/* Согласие на обработку данных */}
        <div className="form-control mt-3">
          <label className="cursor-pointer label flex justify-start items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-sm bg-white"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span className="label-text ml-2 sd:text-sm font-semibold xz:text-[9px] xy:text-[10px] ">
              Я согласен(на) на{" "}
              <Link
                href="/politika"
                target="_blank"
                className="underline text-gray-800"
              >
                обработку персональных данных
              </Link>
            </span>
          </label>
        </div>

        {/* Кнопка отправки */}
        <div className="form-control mt-6">
          <button
            className="btn btn-primary font-bold text-white uppercase"
            type="submit"
            disabled={!agree}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormZahvata;
