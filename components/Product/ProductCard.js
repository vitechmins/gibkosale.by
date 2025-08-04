import phoneNumbers from '@/config/config'
import ProductGallery from '../Gallery/ProductGallery'
import BtnComp from '../btn/BtnComp'
import Image from 'next/image'
import BtnInCard from '../BtnInCard/BtnInCard'
import { ExtraCharge } from '@/constans/ExtraCharge'

const ProductCard = ({ product }) => {

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <ProductGallery images={product.img} />

        <div className="w-full lg:w-[300px] bg-gray-100 p-4 rounded-md lg:sticky lg:top-4">
          <p className={`text-2xl font-semibold text-green-600 ${product.price ? 'block' : 'hidden'}`}> Цена: {product.price * ExtraCharge} руб.</p>
          <p className={`text-info sd:text-base xz:text-xs font-semibold ${product.price ? 'hidden' : 'block'}`}>Цену уточняйте</p>
          <div className='my-4 sd:text-sm xz:text-xs'>
            <p className={`${product.brand ? 'block' : 'hidden'}`}>
              Производитель: {product.brand}
            </p>
            <p className={`${product.country ? 'block' : 'hidden'}`}>
              Страна: {product.country}
            </p>
          </div>
          <div className="mt-4 space-y-2">
            <p className=''>
              Получить индивидуальную скидку вы можете позвонив по телефону
            </p>
            <div className=''>
              <a href={`tel:${phoneNumbers.phone1Link}`}>{phoneNumbers.phone1}</a>
            </div>
          </div>

          <div className='mt-8'>
            <BtnInCard item={product} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div role="tablist" className="tabs tabs-bordered">
          <input type="radio" name="tabs" role="tab" className="tab" aria-label="Описание" defaultChecked />
          <div role="tabpanel" className="tab-content p-4">
            <p className="text-gray-700 mb-6 whitespace-pre-line sd:text-base xz:text-xs">{product.description}</p>
          </div>

          <input type="radio" name="tabs" role="tab" className="tab" aria-label="Характеристики" />
          <div role="tabpanel" className="tab-content p-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {product.info.map((item, idx) => (
                <li key={idx} className="sd:text-base xz:text-xs flex justify-between border-b py-1">
                  <span className='font-semibold'>{item.i}</span>
                  <span className="font-medium text-right">{item.i2}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
