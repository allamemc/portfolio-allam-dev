document.addEventListener('DOMContentLoaded', () => {
	const themeButton = document.getElementById('theme')
	const icono_tema = document.getElementById('img-icono')

	themeButton.addEventListener('click', () => {
		var projectImages = document.querySelectorAll('.project-image')
		var tecnologies = document.querySelectorAll('.tecnologia')
		var cajas_proyecto = document.querySelectorAll('.more-caja')
		var social = document.querySelectorAll('.flex-item')

		if (document.documentElement.getAttribute('data-theme') == 'dark') {
			icono_tema.src = '../svg/sunny.svg'
			document.documentElement.setAttribute('data-theme', 'autumn')
			document.styleSheets[0].addRule(
				'::-webkit-scrollbar-thumb',
				`background-color: #790220 !important`
			)
			document.styleSheets[0].addRule(
				'::-webkit-scrollbar-track',
				`background-color: #F1F1F1 !important`
			)
			document.styleSheets[0].addRule(
				'::-webkit-scrollbar-thumb:hover',
				`background-color: #430111 !important`
			)
			projectImages.forEach((element) => {
				element.classList.remove('project-image-dark')
				element.classList.add('project-image-white')
			})

			tecnologies.forEach((element) => {
				element.classList.add('dark')
			})
			cajas_proyecto.forEach((element) => {
				element.classList.add('white')
			})
			social.forEach((element) => {
				element.classList.add('white')
			})

			document
				.querySelector('#poke_image')
				.setAttribute('src', '../images/poke_white.webp')
			document
				.querySelector('#dubo_image')
				.setAttribute('src', '../images/dubo_white.webp')
			document
				.querySelector('#allam_image')
				.setAttribute('src', '../images/allam_white.webp')
		} else {
			icono_tema.src = '../svg/moon.svg'
			document.documentElement.setAttribute('data-theme', 'dark')
			document.styleSheets[0].addRule(
				'::-webkit-scrollbar-thumb',
				`background-color: #7480FF !important`
			)
			document.styleSheets[0].addRule(
				'::-webkit-scrollbar-track',
				`background-color: #1D232A !important`
			)
			document.styleSheets[0].addRule(
				'::-webkit-scrollbar-thumb:hover',
				`background-color: #626cd7 !important`
			)
			projectImages.forEach((element) => {
				element.classList.remove('project-image-white')
				element.classList.add('project-image-dark')
			})

			tecnologies.forEach((element) => {
				element.classList.remove('dark')
			})
			cajas_proyecto.forEach((element) => {
				element.classList.remove('white')
			})
			social.forEach((element) => {
				element.classList.remove('white')
			})

			document
				.querySelector('#poke_image')
				.setAttribute('src', '../images/poke_dark.webp')
			document
				.querySelector('#dubo_image')
				.setAttribute('src', '../images/dubo_dark.webp')
			document
				.querySelector('#allam_image')
				.setAttribute('src', '../images/allam_black.webp')
		}
	})
})

document.addEventListener('DOMContentLoaded', function () {
	const enlaces = document.querySelectorAll('a')

	enlaces.forEach(function (enlace) {
		enlace.addEventListener('click', function (event) {
			event.preventDefault() // Evitar el comportamiento predeterminado del enlace

			const url = enlace.href
			setTimeout(function () {
				window.open(url, '_blank') // Abrir enlace en una nueva pestaña después del retraso
			}, 350) // 350 milisegundos de retraso
		})
	})
})
// Mostrar la flecha al llegar al tope de la página
window.addEventListener('scroll', function () {
	var scrollToTopBtn = document.getElementById('scrollToTopBtn')
	var scrollHeight = document.documentElement.scrollHeight
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
	var clientHeight = document.documentElement.clientHeight

	if (scrollTop + clientHeight >= scrollHeight - 150) {
		scrollToTopBtn.classList.add('show')
	} else {
		scrollToTopBtn.classList.remove('show')
	}
})

// Hacer scroll hacia arriba al hacer clic en la flecha
document
	.getElementById('scrollToTopBtn')
	.addEventListener('click', function (e) {
		e.preventDefault()
		document.documentElement.scrollTop = 0
		document.body.scrollTop = 0
	})

const botonCopiar = document.querySelector('.copiar')
const inputEmail = document.querySelector('.email-input')

botonCopiar.addEventListener('click', function () {
	const textoACopiar = inputEmail.value

	navigator.clipboard.writeText(textoACopiar)
	if (document.documentElement.getAttribute('lang') == 'es') {
		this.innerHTML = "<ion-icon name='copy'></ion-icon> Copiado"
	} else if (document.documentElement.getAttribute('lang') == 'en') {
		this.innerHTML = "<ion-icon name='copy'></ion-icon> Copied"
	}

	setTimeout(() => {
		this.innerHTML = '<ion-icon name="copy"></ion-icon>'
	}, 1000)
})

var part1 = 'allamemc@'
var part2 = 'gmail.com'
document.getElementById('emailField').value = part1 + part2
