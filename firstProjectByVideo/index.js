const model = [
	{ type: 'title', value: 'Hello World' },
	{ type: 'text', value: 'some text description' },
	{ type: 'columns', value: ['11111111111', '22222222222', '33333333333'] },
  {type: 'image', value: './assets/image.webp' },
]

const site = document.querySelector('#site')

model.forEach(block => {
	let html = ''
	if (block.type === 'title') {
		html = title(block);
	} else if (block.type === 'text') {
		html = text(block);
	}else if (block.type === 'columns') {
    html = columns(block);
	}else if (block.type === 'image') {
    html = image(block);
  }

  site.insertAdjacentHTML('beforeend', html);
})



function title(block) {
    return ` 
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
    `
}

function text(block) {
  return `
      <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
    </div>

  `
}

function columns(block) {
  const html = block.value.map(item => `<div class="col-sm">${item}</div>`).join('')
  return `
    <div class="row">
     ${html};
    </div> 
  `
}

function image(block) {
  return `
    <div class="row">
      <img src="${block.value}"/>
    </div> 
  `
}

