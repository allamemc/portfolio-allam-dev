import i18next from 'i18next'

const langButton = document.getElementById('lang')
const idiomaText = document.querySelector('.idioma')

langButton.addEventListener('click', () => {
	let subtitulo = document.querySelector('.subtitulo')
	let education = document.querySelector('#education')
	let projects = document.querySelector('#projects')
	let contact = document.querySelector('#contact')
	let mail = document.querySelector('#mail')
	let campus = document.querySelector('#campus')
	let web_1 = document.querySelector('#web-1')
	let web_2 = document.querySelector('#web-2')
	let p_pokeshop = document.querySelector('#p-pokeshop')
	let p_dubo = document.querySelector('#p-dubo')
	let portfolio = document.querySelector('#portfolio')
	let p_portfolio = document.querySelector('#p-portfolio')
	let p_solocr = document.querySelector('#p-solocr')
	let p_logic = document.querySelector('#p-logic')
	let python = document.querySelector('#python')
	let p_python = document.querySelector('#p-python')
	let p_teo = document.querySelector('#p-teo')
	let lang = idiomaText.textContent === 'ES' ? 'en' : 'es'
	document.documentElement.setAttribute('lang', lang)

	const elements = [
		{ element: subtitulo, key: 'subtitulo' },
		{ element: education, key: 'education' },
		{ element: projects, key: 'projects' },
		{ element: contact, key: 'contact' },
		{ element: mail, key: 'mail' },
		{ element: campus, key: 'campus' },
		{ element: web_1, key: 'web_1' },
		{ element: web_2, key: 'web_2' },
		{ element: p_pokeshop, key: 'p_pokeshop' },
		{ element: p_dubo, key: 'p_dubo' },
		{ element: portfolio, key: 'portfolio' },
		{ element: p_portfolio, key: 'p_portfolio' },
		{ element: p_solocr, key: 'p_solocr' },
		{ element: p_logic, key: 'p_logic' },
		{ element: python, key: 'python' },
		{ element: p_python, key: 'p_python' },
		{ element: p_teo, key: 'p_teo' },
	]

	elements.forEach((item) => {
		if (item.element) {
			item.element.innerHTML = i18next.t(item.key, { lng: lang })
		}
	})

	idiomaText.textContent = lang === 'es' ? 'ES' : 'EN'
})

i18next.init({
	lng: 'es',
	debug: false,
	resources: {
		es: {
			translation: {
				subtitulo:
					"Desarrollador <span class='font-bold text-primary'>Full-Stack</span> que disfruta el proceso de aprendizaje y la creación de aplicaciones.",
				education: 'Educación',
				projects: 'Proyectos',
				contact: 'Contacto',
				mail: 'Email',
				campus: 'Desarrollo de Aplicaciones Web',
				web_1:
					'&#x2022; He fortalecido mis habilidades en el desarrollo web, centrándome en <span class="font-bold text-primary">React</span> para el frontend, <span class="font-bold text-primary">Node.js</span> para el backend, y <span class="font-bold text-primary">Spring</span> para la construcción de aplicaciones robustas en <span class="font-bold text-primary">Java</span>.',
				web_2:
					'&#x2022; Además, he dominado el uso de herramientas indispensables como <span class="font-bold text-primary">Git</span> para el control de versiones, así como <span class="font-bold text-primary"> HTML, Sass y Tailwind CSS</span> para el diseño de interfaces accesibles y atractivas.',
				p_pokeshop: 'Tu tienda de Pokémon favorita, consumiendo la Poké API.',
				p_dubo:
					'Escuela de artes marciales, mejorada usando OAuth 2.0 y Passport JS.',
				portfolio: 'Note Nest',
				p_portfolio:
					'Bloc de notas con autenticación de Google y guardado en la nube.',
				p_solocr: 'Tarifas de un gimnasio.',
				p_logic: 'Foro para programadores.',
				python: 'Tienda Python',
				p_python: 'Tienda de componentes con POO.',
				p_teo: 'Teoría sobre XML y JSON.',
			},
		},
		en: {
			translation: {
				subtitulo:
					"Full-Stack <span class='font-bold text-primary'>Developer</span> who enjoys the learning process and creating applications.",
				education: 'Education',
				projects: 'Projects',
				contact: 'Contact',
				mail: 'Email',
				campus: 'Web Applications Development',
				web_1:
					'&#x2022; I have strengthened my skills in web development, focusing on <span class="font-bold text-primary">React</span> for the frontend, <span class="font-bold text-primary">Node.js</span> for the backend, and <span class="font-bold text-primary">Spring</span> for building robust applications in <span class="font-bold text-primary">Java</span>.',
				web_2:
					'&#x2022; In addition, I have mastered the use of essential tools such as <span class="font-bold text-primary">Git</span> for version control, as well as <span class="font-bold text-primary">HTML, Sass and Tailwind CSS</span> for designing accessible and attractive interfaces.',

				p_pokeshop: 'Your favorite Pokemon store, consuming the Poké API.',
				p_dubo:
					'Martial arts school, enhanced using OAuth 2.0 and Passport JS.',
				portfolio: 'Note Nest',
				p_portfolio: 'Notebook with Google authentication and cloud saving.',
				p_solocr: 'Rates for a gym.',
				p_logic: 'Forum for programmers.',
				python: 'Python Store',
				p_python: 'Component store with OOP.',
				p_teo: 'Theory about XML and JSON.',
			},
		},
	},
})
