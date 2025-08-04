import BtnComp from '@/components/btn/BtnComp';
import Icon from '@/components/iconMessenger/Icon';
import phoneNumbers from '@/config/config';
import Image from 'next/image';
import React from 'react'

export const metadata = {
  title: "Контакты | Интернет-магазин в Минске ГибкоСейл",
  description: `⭐ Интернет-магазин в Минске ✔️ Широкий ассортимент товаров для дома и дачи по доступным ценам ✫ Быстрая доставка ⚡ Надёжный сервис ➤➤➤ Телефон ☎️ ${phoneNumbers.phone1} ✓ Заказывайте на ГибкоСейл! 🚀 📦`,
  keywords: 'интернет магазин Минск, купить онлайн, товары для дома, доставка по Минску, gibkosale.by, ГибкоСейл',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/kontakty/`
  },
  ogTitle: "Контакты | Интернет-магазин в Минске ГибкоСейл",
  ogDescription: `⭐  Интернет-магазин в Минске ✔️ Широкий ассортимент товаров для дома и дачи по доступным ценам ✫ Быстрая доставка ⚡ Надёжный сервис`,
  ogImage: '/logo/logo-jpg3.jpg',
  twitterTitle: "Контакты | Интернет-магазин в Минске ГибкоСейл",
  twitterDescription: `⭐  Интернет-магазин в Минске ✔️ Широкий ассортимент товаров для дома и дачи по доступным ценам ✫ Быстрая доставка ⚡ Надёжный сервис`,
  twitterImage: '/logo/logo-jpg3.jpg'
};


const page = () => {
  return (
    <main className="pt-28">
      <section className='bg-white relative sd:mt-20 xz:mt-0'>

        <div className='container mx-auto xz:px-0 sd:px-8 xl:px-0'>
          <div className='sd:py-20 xz:py-8'>
            <h1 className='sd:text-7xl xz:text-4xl font-bold'>
              Контакты
            </h1>
            <aside className='grid sd:grid-cols-2 xz:grid-cols-1 gap-8 relative'>
              <div className='sd:px-8 xz:px-4 sd:mt-16 xz:mt-8'>
                <div className=''>
                  <p className='text-primary text-sm font-semibold'>
                    Телефон
                  </p>
                  <div className='mt-3'>
                    <p className=''>
                      Отдел Продаж
                    </p>
                    <a
                      href={`tel:${phoneNumbers.phone1Link}`}
                      className='ml-2 text-xl block'>
                      {phoneNumbers.phone1}
                    </a>
                  </div>
                  <div className='mt-3'>
                    <p className=''>
                      Отдел Доставки
                    </p>
                    <a
                      href={`tel:${phoneNumbers.phone1Link}`}
                      className='ml-2 text-xl block'>
                      {phoneNumbers.phone1}
                    </a>
                  </div>
                  <div className='mt-3'>
                    <p className=''>
                      Отдел Контроля Качества
                    </p>
                    <a
                      href={`tel:${phoneNumbers.phone1Link}`}
                      className='ml-2 text-xl block'>
                      {phoneNumbers.phone1}
                    </a>
                  </div>

                </div>
                <div className='mt-8'>
                  <div className=''>
                    <div className=''>
                      <p className='text-primary text-sm font-semibold'>
                        Юр. адрес
                      </p>
                    </div>
                    <div className='mt-3'>
                      <a href='https://yandex.by/maps/-/CHgbiNmG' target='_blank' className="sd:text-lg xz:text-base">
                        220051 , г.Минск , ул.Сергея Есенина , дом 130 , кабинет 3
                      </a>

                    </div>
                  </div>
                  <div className='mt-6'>
                    <div className='flex items-center space-x-2'>
                      <p className='text-primary text-sm font-semibold'>
                        Почта
                      </p>
                    </div>
                    <a href='mailto:gibkosale24@gmail.com' className='flex mt-3'>

                      <p className="ml-2 text-lg">
                        gibkosale24@gmail.com
                      </p>
                    </a>
                  </div>
                </div>
                <div className='flex sd:flex-row xz:flex-col mt-8'>
                  <div className=''>
                    <p className='text-primary text-sm font-semibold'>
                      Связь с нами
                    </p>
                    <div className='mt-3' >
                      <Icon color="text-white" />
                    </div>
                  </div>
                </div>

                <div className='mt-8 '>
                  <p className='text-primary text-xs font-bold'>
                    Режим работы
                  </p>
                  <div className='mt-3'>
                    <p className='text-lg'>
                      9:00 - 21:00
                    </p>
                    <p className='text-green-600 text-sm uppercase mt-1.5'>
                      без выходных
                    </p>
                  </div>

                </div>
                <div className='flex sd:flex-row xz:flex-col mt-8'>
                  <div className=''>
                    <p className='text-primary font-semibold'>
                      ООО «ГИБКО СЕЙЛ»
                    </p>
                    <div className='mt-3'>
                      <p className=''>
                        УНП 193882171
                      </p>
                      <p className=''>
                        Зарегистрирован  в Мингорисполкоме 24.06.2025
                      </p>
                      <p className=''>
                        Юр. адрес : 220051 , г.Минск , ул.Сергея Есенина , дом 130 , кабинет 3
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div className=''>
                <div className='sticky top-12'>
                  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A664e19646d35b7c1f49a51e13f8f9f194b4eee8fb6eb39517f92addf5ef621fa&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
                </div>
              </div>
            </aside>

            <div className="mt-16">
              <div className="bg-gray-800 rounded-xl text-white">
                <div className='container mx-auto xz:px-8 sd:px-16 py-10 text-center'>
                  <h2 className="sd:text-3xl xz:text-2xl font-bold mb-4 text-primary">Почему выбирают нас?</h2>
                  <ul className="space-y-2 sd:text-lg xz:text-base">
                    <li>Бесплатная доставка по всей Беларуси</li>
                    <li>Широкий выбор сертифицированных товаров</li>
                    <li>Удобная оплата: наличными, картой, частями</li>
                    <li>Клиентская поддержка 7 дней в неделю</li>
                    <li>Гарантия возврата и обмена товара</li>
                  </ul>

                  <p className="mt-6 text-xl font-semibold text-primary">
                    📞 Закажите прямо сейчас: <a
                      href={`tel:${phoneNumbers.phone1Link}`}
                      className='text-white sd:inline-block xz:block sd:pl-0 xz:pl-8 text-2xl'>
                      {phoneNumbers.phone1}
                    </a>
                  </p>

                  <p className="mt-6 text-xl font-bold text-green-400">GibkoSale.by — удобно, выгодно, надёжно!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </main>
  )
}

export default page