import './pixel-peffect.scss'

let mask = document.createElement('div')
mask.className = 'testing-mask'
let toggler = document.createElement('button')
toggler.innerText = 'Toggle'
toggler.className = 'testing-toggler'
toggler.addEventListener('click', function(){
	let isVisible = mask.style.display !== 'none'
	mask.style.display = isVisible ? 'none' : 'block'
})
document.body.appendChild(toggler)
document.body.appendChild(mask)