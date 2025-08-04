import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import phoneNumbers from "@/config/config";
import { MyContextProvider } from "@/contexts/MyContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: 'Интернет-магазин в Минске | GibkoSale.by — выгодные цены и доставка',
  description: `ᐈ ⭐ Интернет-магазин в Минске ✔️ Широкий ассортимент товаров для дома и дачи по доступным ценам ✫ Быстрая доставка ⚡ Надёжный сервис ➤➤➤ Телефон ☎️ ${phoneNumbers.phone1} ✓ Заказывайте на gibkosale.by! 🚀 📦`,
  keywords: 'интернет магазин Минск, купить онлайн, товары для дома, доставка по Минску, gibkosale.by',
  alternates: {
    canonical: 'https://gibkosale.by/'
  },
  ogTitle: 'GibkoSale.by — интернет-магазин в Минске',
  ogDescription: 'Покупайте онлайн на GibkoSale.by — выгодные цены, быстрая доставка, широкий ассортимент товаров для дома и дачи в Минске.',
  ogImage: 'https://gibkosale.by/logo/logo.webp',
  ogType: 'website',
  ogUrl: 'https://gibkosale.by/',
  twitterTitle: 'Интернет-магазин в Минске | GibkoSale.by',
  twitterDescription: 'GibkoSale.by — ваш онлайн-магазин в Минске. Товары для дома и дачи с доставкой. Покупайте выгодно!',
  twitterImage: 'https://gibkosale.by/logo/logo.webp',
  twitterCard: 'summary_large_image'
};



export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head></head>
      <MyContextProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </MyContextProvider>
    </html>
  );
}
