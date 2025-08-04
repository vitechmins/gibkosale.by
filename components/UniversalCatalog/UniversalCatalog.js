'use client'

import { useState } from 'react'
import Catalog from "../Catalog/Catalog"
import { dataProducts } from "@/constans/DataProducts"
import MenuSticky from "../MenuSticky/MenuSticky"
import Image from "next/image"

const UniversalCatalog = () => {
	const [activeCategory, setActiveCategory] = useState(null)

	const activeCategoryObj = activeCategory
		? dataProducts.find(cat => cat.categoryLink === activeCategory)
		: null

	const filteredProducts = activeCategoryObj
		? activeCategoryObj.children
		: dataProducts.flatMap(cat => cat.children)

	// Закрытие drawer через input checkbox
	const handleCategorySelect = (categoryLink) => {
		setActiveCategory(categoryLink)
		const drawerCheckbox = document.getElementById('catalog-drawer')
		if (drawerCheckbox) drawerCheckbox.checked = false
	}

	return (
		<section className='relative bg-white py-14'>
			<div className='container mx-auto'>
				{/* Мобильная кнопка меню */}
				<div className='sd:hidden flex justify-end px-2 mb-4'>
					<label htmlFor="catalog-drawer" className="btn btn-outline btn-primary drawer-button">
						<Image src="/svg/menu.svg" alt="Категории" width={24} height={24} />
					</label>
				</div>

				<h2 className='sd:text-4xl xz:text-2xl text-center font-semibold'>
					Каталог
				</h2>

				<div className="drawer drawer-end">
					<input id="catalog-drawer" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content flex sd:mt-10 xz:mt-0">
						<MenuSticky
							categories={dataProducts}
							activeCategory={activeCategory}
							onCategoryClick={handleCategorySelect}
						/>
						<div className='sd:w-3/4 xz:w-full pl-2'>

							<Catalog
								products={filteredProducts}
								categoryTitle={activeCategoryObj?.category || 'Все товары'}
								categoryLink={activeCategory || 'all'}
							/>
						</div>
					</div>

					{/* Drawer menu */}
					<div className="drawer-side z-50">
						<label htmlFor="catalog-drawer" className="drawer-overlay" />
						<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
							<li>
								<a
									onClick={() => handleCategorySelect(null)}
									className={!activeCategory ? 'font-bold text-primary' : ''}
									href='#/'
								>
									Все категории
								</a>
							</li>
							{dataProducts.map((cat) => (
								<li key={cat.categoryLink}>
									<a
										onClick={() => handleCategorySelect(cat.categoryLink)}
										className={activeCategory === cat.categoryLink ? 'font-bold text-primary' : ''}
										href='#/'
									>
										{cat.category}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default UniversalCatalog
