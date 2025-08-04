"use client"
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';
import { useContext, useEffect } from 'react';
import HeaderInfo from './HeaderInfo';
import phoneNumbers from '@/config/config';
import Link from 'next/link';
import { MyContext } from '@/contexts/MyContextProvider';

export default function Header() {
  const { count } = useContext(MyContext);
  useEffect(() => {
    const links = document.querySelectorAll('.drawer-side ul li a');
    const drawerToggle = document.querySelector('#my-drawer');

    links.forEach(link => {
      link.addEventListener('click', () => {
        drawerToggle.checked = false;
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {
          drawerToggle.checked = false;
        });
      });
    };
  }, []);

  return (
    <div className=''>
      <header className='z-50 bg-base-100 absolute right-0 left-0 top-0 shadow-xl text-gray-700'>
        <div className='container mx-auto'>

          <div className="navbar px-0">
            <div className="navbar-start">
              <Link
                href='/'
              >
                <Image src='/logo/logo.webp' alt='логотип' width={230} height={200} />
              </Link>
            </div>

            <nav className="navbar-center hidden sd:flex">
              <ul className="menu menu-horizontal p-0 font-light text-lg">
                <li>
                  <Link
                    href='/'
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about/'
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    href='/oplata/'
                  >
                    Оплата
                  </Link>
                </li>
                <li>
                  <Link
                    href='/dostavka/'
                  >
                    Доставка
                  </Link>
                </li>
                <li>
                  <Link
                    href='/kontakty/'
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>


            <div className="navbar-end">
              <div className='text-xs mr-10 xz:hidden sd:block'>
                <p className='font-semibold'>Режим работы:</p>
                <p>9:00-22:00 Пн-Вс</p>
              </div>
              <div className='flex flex-col xz:hidden sd:block'>
                <a href={`tel:${phoneNumbers.phone1Link}`} className='link link-hover font-semibold flex text-base'>
                  {phoneNumbers.phone1}
                  <Image src='/svg/a1.svg' alt='Телефон оператора А1' width={15} height={15} className='ml-2 sd:block xz:hidden' />
                </a>
              </div>

              <nav className="drawer sd:hidden xz:flex justify-end drawer-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  <label htmlFor="my-drawer" className="">
                    <Image src='/svg/menu.svg' alt='Кнопка меню' width={30} height={30} />
                  </label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content pt-10">
                    <li className='mb-4 text-xl font-semibold'>
                      <p>Меню</p>
                    </li>
                    <li>
                      <Link
                        href='/'
                      >
                        Главная
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/about/'
                      >
                        О нас
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/oplata/'
                      >
                        Оплата
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/dostavka/'
                      >
                        Доставка
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/kontakty/'
                      >
                        Контакты
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <Link
              href='/korzina'
              className="flex flex-col items-center text-gray-700 rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity"
            >
              <div className="indicator">
                <span className="indicator-item px-1 text-xs font-semibold badge badge-primary text-black">
                  {count ? count : 0}
                </span>
                <Image src='/svg/cart.svg' alt='Корзина' width={28} height={28} />
              </div>
            </Link>
          </div>



        </div>
      </header>

    </div>
  );
}
