import CTA2 from "../CTA2/CTA2";

const Price = () => {


	return (
		<section className='min-h-screen bg-black/20 py-10 relative' id="price">

			<div className='container mx-auto text-white'>
				<div className='h-[2px] bg-secondary sd:w-32 xz:w-16 mb-5' />
				<h2 className="sd:text-5xl xz:text-2xl">
					Наше <span className="text-secondary">Местоположение</span>  <span className="sr-only"></span>
				</h2>

				<div className='mt-10'>
					<div className="relative overflow-hidden rounded-lg shadow-lg">
						<iframe
							src="https://yandex.by/map-widget/v1/?display-text=%D0%B0%D1%80%D0%B2%D0%B8%D0%BD%D1%8D%D0%BA%D1%81%D1%82&ll=30.132602%2C55.209965&mode=search&oid=26710506350&ol=biz&sctx=ZAAAAAgBEAAaKAoSCVjKMsSxIj5AEfuvc9NmmktAEhIJ4LpiRnh7UD8RdmuZDMfzOT8iBgABAgMEBSgKOABA66INSAFqAnVhnQHNzMw9oAEAqAEAvQHc8L7TwgEF7vbHwGOCAhLQsNGA0LLQuNC90Y3QutGB0YKKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=30.133632%2C55.209965&sspn=0.002825%2C0.001112&text=%D0%B0%D1%80%D0%B2%D0%B8%D0%BD%D1%8D%D0%BA%D1%81%D1%82&z=18"
							width="100%"
							height="400"
							frameBorder="0"
							allowFullScreen
							className="w-full h-[400px] border border-gray-300"
						></iframe>
					</div>
					<p className="text-gray-600 mt-4">
						<a
							href="https://yandex.by/maps/org/arvinekst/26710506350/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline"
						>
							Посмотреть на Яндекс.Картах
						</a>
					</p>
				</div>
			</div>

			<CTA2 />
		</section>
	);
};

export default Price;
