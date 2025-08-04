const About = () => {
  return (
    <section className="py-20 relative bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center text-gray-800">
          О нас
        </h2>

        <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow">
            <p>
              Мы предлагаем вам исключительно качественные и сертифицированные товары по доступным ценам,
              обеспечивая консультации и предоставляя весь спектр услуг нашего магазина. Доставка осуществляется
              в оговорённые сроки с гарантией сохранения качества товаров.
            </p>
          </div>

          <div className="bg-white border-l-4 border-green-500 p-6 shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-green-700">Для вас</h3>
            <p>
              Мы подбираем товары на основе анализа потребностей наших постоянных клиентов.
              Каждый товар проходит строгую проверку на соответствие заявленным характеристикам,
              чтобы исключить любые непредвиденные обстоятельства. Качество — наш приоритет.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-md shadow">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Поддержка клиентов</h4>
              <p>
                Наш телефон доступен ежедневно с 9:00 до 21:00. Специалисты с большим опытом помогут вам
                с выбором подходящих моделей и категорий из ассортимента.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-md shadow">
              <h4 className="text-lg font-semibold text-yellow-700 mb-2">Регулярное обновление</h4>
              <p>
                Категории товаров постоянно обновляются, и в наличии всегда есть актуальные новинки.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-md shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">Удобный сайт</h4>
              <p>
                Выбирайте нужные товары буквально в пару кликов — наш сайт разработан с учётом простоты
                и удобства пользователя.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-md shadow">
              <h4 className="text-lg font-semibold text-green-700 mb-2">Быстрая доставка</h4>
              <p>
                Мы сотрудничаем с республиканскими транспортными компаниями, доставляя заказы бесплатно
                в любую точку Беларуси.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold text-red-700 mb-2">Обмен и возврат</h4>
            <p>
              Все товары проходят повторную проверку перед отправкой. Если всё же возникнет проблема —
              наш отдел качества оперативно решит вопрос. Мы всегда на связи.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
