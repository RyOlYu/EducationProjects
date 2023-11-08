import image from './assets/image.webp'

export const model = [
	{
		type: 'title',
		value: 'Тренировочный проект на JavaScript',
		options: {
			tag: 'h2',
			styles: {
				background: 'linear-gradient(to right, #081630, #3873e0)',
				color: '#fff',
				padding: '1.5rem',
				'text-align': 'center',
			},
		},
	},
	{
		type: 'image',
		value: image,
		options: {
			styles: {
        padding: '1.5rem',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
			},
      imageStyles:{
        width:'500px',
        height:'auto'
      },
      alt: 'Image'
		},
	},
	{
		type: 'text',
		value: `Проект собран на Parcel. Выполнен на Bootstrap.`,
		options: {
			styles: {
				background: 'linear-gradient(to left, #f2994a, #f2c94c)',
				padding: '1rem',
				'font-weight': 'bold',
			},
		},
	},

	{
		type: 'columns',
		value: [
			'Объекты сформировны динамически с помощью JavaScript',
			'Стили заданы в виде параметров в объектах',
			'Применены классы объектов',
		],
		options: {
			styles: {
				background: 'linear-gradient(to bottom,  #3873e0, #081630)',
				padding: '2rem',
				color: '#fff',
				'font-weight': 'bold',
			},
		},
	},


]
