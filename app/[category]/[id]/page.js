import { dataProducts } from '@/constans/DataProducts'
import ProductCard from '@/components/Product/ProductCard'
import phoneNumbers from '@/config/config'
import AktualnyeTovary from '@/components/MainSections/AktualnyeTovary/AktualnyeTovary'

// ✅ Генерация метаданных
export async function generateMetadata(props) {
	const category = props.params.category
	const id = props.params.id

	// Поиск товара с учетом "all"
	const product = category === 'all'
		? dataProducts.flatMap(cat => cat.children).find(p => p.id.toString() === id)
		: dataProducts.find(cat => cat.categoryLink === category)?.children.find(p => p.id.toString() === id)

	if (!product) {
		return {
			title: 'Товар не найден',
			description: 'Страница не найдена',
			metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
		}
	}

	const pageTitle = `${product.title} купить по выгодной цене в Минске`
	const pageDescription = `ᐈ ⭐ ${product.title}: характеристики, описание, фото ✓ В наличии. ${product.brand}. ☝ Бесплатная доставка по всей Беларуси ✨ Звоните ☎️ ${phoneNumbers.phone1}`
	const pageKeywords = `${product.title}, купить ${product.title}, ${product.title} цена, ${product.title} ${product.brand} Минск`
	const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${category}/${product.id}`

	return {
		title: pageTitle,
		description: pageDescription,
		keywords: pageKeywords,
		metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
		alternates: {
			canonical: pageUrl,
		},
		openGraph: {
			title: pageTitle,
			description: pageDescription,
			url: pageUrl,
			images: [
				{
					url: product.img?.[0] || '/logo/logo2.webp',
					width: 800,
					height: 600,
					alt: product.title,
				},
			],
		},
		twitter: {
			title: pageTitle,
			description: pageDescription,
			images: [product.img?.[0] || '/logo/logo2.webp'],
		},
	}
}

// ✅ Генерация всех маршрутов для статического экспорта
export async function generateStaticParams() {
	const paths = []

	dataProducts.forEach(cat => {
		cat.children.forEach(product => {
			// основной маршрут по категории
			paths.push({
				category: cat.categoryLink,
				id: product.id.toString(),
			})

			// универсальный маршрут /all/id
			paths.push({
				category: 'all',
				id: product.id.toString(),
			})
		})
	})

	return paths
}

// ✅ Компонент страницы товара
export default function ProductPage({ params }) {
	const category = params.category
	const id = params.id

	const product = category === 'all'
		? dataProducts.flatMap(cat => cat.children).find(p => p.id.toString() === id)
		: dataProducts.find(cat => cat.categoryLink === category)?.children.find(p => p.id.toString() === id)

	if (!product) {
		return <div className="py-20 text-center text-lg">Товар не найден</div>
	}

	return (
		<div className="sd:pt-40 xz:pt-60 pb-24">
			<ProductCard product={product} />

			<AktualnyeTovary />
		</div>
	)
}
