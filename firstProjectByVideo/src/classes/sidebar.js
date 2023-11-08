import { block } from '../utilus'
import { TextBlock, TitleBlock } from './block'
export class Sidebar {
	constructor(selector, udateCallback) {
		this.el = document.querySelector(selector)
		this.update = udateCallback

		this.init()
	}

	init() {
		this.el.insertAdjacentHTML('beforeend', this.template)
		this.el.addEventListener('submit', this.add.bind(this))
	}

	get template() {
		return [block('text'), block('title')].join('')
	}

	add(event) {
		event.preventDefault()
		const type = event.target.name
		const value = event.target.massage.value
		const styles = event.target.styles.value

		let newBlock =
			type === 'text'
				? new TextBlock(value, { styles })
				: new TitleBlock(value, { styles })
		this.update(newBlock)

		event.target.massage.value = ''
		event.target.styles.value = ''
	}
}
