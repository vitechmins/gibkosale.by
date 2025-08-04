import Image from "next/image";

const reasons = [
  {
    src: '/svg/experience.svg',
    alt: 'Работаем с 2014 года',
    width: 90,
    height: 90,
    title: 'Работаем с 2014 года',
    description: 'Наша компания успешно предоставляет услуги аренды автомобилей с водителем с 2014 года. За это время мы накопили богатый опыт и зарекомендовали себя как надежный партнер для комфортных и безопасных поездок по любым направлениям.',
  },  
  {
    src: '/svg/car/car-white.svg',
    alt: 'Собственный парк авто премиум класса',
    width: 110,
    height: 110,
    title: 'Собственный парк авто премиум класса',
    description: 'Наслаждайтесь комфортом и удобством, заказывая пассажирские перевозки: быстро, легко и доступно в любое время. Ваше путешествие — ваши правила, всего в несколько кликов.',
  },
  {
    src: '/svg/car/icon-home07.svg',
    alt: 'Специальные цены для корпоративных заказчиков',
    width: 100,
    height: 100,
    title: 'Специальные цены для корпоративных заказчиков',
    description: 'Предлагаем особые условия обслуживания для юрлиц',
  },
  {
    src: '/svg/car/payment.svg',
    alt: 'Удобные способы оплаты',
    width: 100,
    height: 100,
    title: 'Удобные способы оплаты',
    description: 'Принимаем платежи в любой удобной для клиента форме',
  },
  {
    src: '/svg/car/personal.svg',
    alt: 'Квалифицированный персонал',
    width: 120,
    height: 120,
    title: 'Квалифицированный персонал',
    description: 'Тщательный подбор водителей по личным и профессиональным качествам',
  },
  {
    src: '/svg/car/individual-service.svg',
    alt: 'Индивидуальный Сервис',
    width: 70,
    height: 70,
    title: 'Индивидуальный Сервис',
    description: 'Учитываем каждое пожелание клиента',
  },
];

const Pochemu = () => {
  return (
    <section className='pt-12 sd:pb-14 xz:pb-4 bg-black' id="pochemu">
      <article className='container mx-auto text-white'>
        <h6 className='sd:text-4xl xz:text-2xl text-center'>
          Почему удобно арендовать авто с водителем в 8800.by?
        </h6>

        <div className='grid sd:grid-cols-3 xz:grid-cols-1 sd:gap-6 xz:gap-4 mt-16'>
          {reasons.map((reason, index) => (
            <div key={index} className='xz:mb-4 sd:mb-0 bg-[#0D0D0D] sd:p-8 xz:p-4'>
              <div className='sd:mb-8 xz:mb-6'>
                <Image
                  src={reason.src}
                  alt={reason.alt}
                  width={reason.width}
                  height={reason.height}
                  className="sd:w-[110px] xz:w-16 sd:mx-0 xz:mx-auto"
                />
              </div>
              <div className='sd:text-left xz:text-center'>
                <h6 className='sd:text-xl xz:text-lg'>
                  {reason.title}
                </h6>
                <p className='text-gray-600 xz:font-light sd:font-normal mt-2 sd:text-base xz:text-sm'>
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Pochemu;
