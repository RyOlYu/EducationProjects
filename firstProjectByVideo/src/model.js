import image from './assets/image.webp'
import {TextBlock, ImageBlock, TitleBlock, ColumnsBlock} from './classes/block'

export const model = [
	new TitleBlock('Тренировочный проект на JavaScript', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #081630, #3873e0)',
			color: '#fff',
			padding: '1.5rem',
			'text-align': 'center',
		},
	}),

	new ImageBlock(image, {
		styles: {
			padding: '1.5rem',
			display: 'flex',
			'justify-content': 'center',
			'align-items': 'center',
		},
		imageStyles: {
			width: '500px',
			height: 'auto',
		},
		alt: 'Image',
	}),
	new TextBlock(`Проект собран на Parcel. Выполнен на Bootstrap.`, {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'font-weight': 'bold',
		},
	}),
	new ColumnsBlock(
		[
			'Объекты сформировны динамически с помощью JavaScript',
			'Стили заданы в виде параметров в объектах',
			'Применены классы объектов',
		],
		{
			styles: {
				background: 'linear-gradient(to bottom,  #3873e0, #081630)',
				padding: '2rem',
				color: '#fff',
				'font-weight': 'bold',
			},
		}
	),
]
