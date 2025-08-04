"use client"
import Link from "next/link"

const MenuSticky = ({ categories, activeCategory, onCategoryClick }) => {
	return (
		<div className='sd:w-1/4 xz:w-0 sd:block xz:hidden pr-3'>
			<ul className='sticky top-32 text-xl text-gray-600 font-light'>
				<li className={`cursor-pointer pb-3 ${!activeCategory ? 'font-bold text-primary' : ''}`} onClick={() => onCategoryClick(null)}>
					Все категории
				</li>
				{categories.map(cat => (
					<li
						key={cat.categoryLink}
						className={`cursor-pointer pb-3 ${activeCategory === cat.categoryLink ? 'font-bold text-primary' : ''}`}
						onClick={() => onCategoryClick(cat.categoryLink)}
					>
						{cat.category}
					</li>
				))}
			</ul>
		</div>
	)
}

export default MenuSticky
