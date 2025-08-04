"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import ArrowLeft from '/public/svg/arrow-left.svg'
import ArrowRight from '/public/svg/arrow-right.svg'

const ProductGallery = ({ images, altText = 'Изображение' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="flex flex-col gap-4 sd:w-3/4 xz:w-full">
      {/* Главное изображение с навигацией */}
      <div className="relative w-full sd:h-[500px] xz:h-[400px] rounded-lg overflow-hidden bg-gray-100">
        <div className="relative w-full sd:h-[500px] xz:h-[400px] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={images[selectedIndex]}
            alt={`${altText} ${selectedIndex + 1}`}
            fill
            className="object-contain" // 👈 вот здесь
            priority
          />
          {/* стрелки */}
        </div>


        {/* Стрелки навигации */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100"
        >
          <Image src={ArrowLeft} alt="Предыдущее" width={24} height={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100"
        >
          <Image src={ArrowRight} alt="Следующее" width={24} height={24} />
        </button>
      </div>

      {/* Превью */}
      <div className="flex justify-center gap-2 flex-wrap">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`border rounded overflow-hidden w-16 h-16 hover:scale-105 transition-transform ${idx === selectedIndex ? 'ring-2 ring-primary' : ''
              }`}
          >
            <Image
              src={img}
              alt={`Превью ${idx + 1}`}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
