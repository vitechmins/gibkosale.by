import Social from "@/components/social/Social";
import PhoneBottom from "@/components/phoneBotton/PhoneBottom";
import Oplata from "@/components/Oplata/Oplata";
import Dostavka from "@/components/Dostavka/Dostavka";
import About from "@/components/MainSections/about/About";
import UniversalCatalog from "@/components/UniversalCatalog/UniversalCatalog";
import AktualnyeTovary from "@/components/MainSections/AktualnyeTovary/AktualnyeTovary";
import PokupajteBelaruskoe from "@/components/MainSections/PokupajteBelaruskoe/PokupajteBelaruskoe";

export default function Home() {
  return (
    <main className="" id="main">
      <div className='sd:block xz:hidden w-full bg-cover fon z-10' />

      <div className='sd:hidden xz:block w-full bg-cover fon-mobil z-0' />
      <section className='sd:pt-24 xz:pt-32 pb-20 relative'>
        <div className='container mx-auto'>

          <div className='text-white sd:max-w-3xl xl:max-w-3xl xz:max-w-full text-center mx-auto'>
            <h1 className='sd:text-6xl xz:text-3xl font-semibold text-shadow'>
              Интернет-магазин в Минске{' '}
              <span className="block mt-2 text-[#03FF00]">
                «ГибкоСейл»
              </span>
            </h1>
            <p className='mt-8 sd:text-lg xz:text-base'>
              Добро пожаловать в наш интернет-магазин в Минске! У нас вы найдете широкий ассортимент товаров по доступным ценам. Мы предлагаем качественную продукцию, быструю доставку и высокий уровень обслуживания.
            </p>
            <p className='mt-2 sd:text-lg xz:text-base font-semibold'>
              Покупайте удобно — на сайте <span className="font-semibold text-[#03FF00]">gibkosale.by</span>.
            </p>

          </div>
        </div>
      </section>

      <PokupajteBelaruskoe />

      <UniversalCatalog />

      <AktualnyeTovary />

      <About />

      <Oplata />

      <Dostavka />


      <Social />

      <PhoneBottom />
    </main >
  );
}
