import i18next from 'i18next'

const langButton = document.getElementById('lang')
const idiomaText = document.querySelector('.idioma')

// on document load set language to english

document.addEventListener('DOMContentLoaded', () => {
	let subtitulo = document.querySelector('.subtitulo')
	let education = document.querySelector('#education')
	let experience_title = document.querySelector('#experience-title')
	let edu_p = document.querySelector('#edu-p')
	let projects = document.querySelector('#projects')
	let pro_p = document.querySelector('#pro-p')
	let contact = document.querySelector('#contact')
	let con_p = document.querySelector('#con-p')
	let mail = document.querySelector('#mail')
	let campus = document.querySelector('#campus')
	let experience = document.querySelector('#experience')
	let ongoing = document.querySelector('#ongoing')
	let web_1 = document.querySelector('#web-1')
	let web_2 = document.querySelector('#web-2')
	let web_3 = document.querySelector('#web-3')
	let web_4 = document.querySelector('#web-4')
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
		{ element: experience_title, key: 'experience_title' },
		{ element: edu_p, key: 'edu_p' },
		{ element: projects, key: 'projects' },
		{ element: pro_p, key: 'pro_p' },
		{ element: contact, key: 'contact' },
		{ element: con_p, key: 'con_p' },
		{ element: mail, key: 'mail' },
		{ element: campus, key: 'campus' },
		{ element: experience, key: 'experience' },
		{ element: ongoing, key: 'ongoing' },
		{ element: web_1, key: 'web_1' },
		{ element: web_2, key: 'web_2' },
		{ element: web_3, key: 'web_3' },
		{ element: web_4, key: 'web_4' },
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

langButton.addEventListener('click', () => {
	let subtitulo = document.querySelector('.subtitulo')
	let education = document.querySelector('#education')
	let experience_title = document.querySelector('#experience-title')
	let edu_p = document.querySelector('#edu-p')
	let projects = document.querySelector('#projects')
	let pro_p = document.querySelector('#pro-p')
	let contact = document.querySelector('#contact')
	let con_p = document.querySelector('#con-p')
	let mail = document.querySelector('#mail')
	let campus = document.querySelector('#campus')
	let experience = document.querySelector('#experience')
	let ongoing = document.querySelector('#ongoing')
	let web_1 = document.querySelector('#web-1')
	let web_2 = document.querySelector('#web-2')
	let web_3 = document.querySelector('#web-3')
	let web_4 = document.querySelector('#web-4')
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
		{ element: experience_title, key: 'experience_title' },
		{ element: edu_p, key: 'edu_p' },
		{ element: projects, key: 'projects' },
		{ element: pro_p, key: 'pro_p' },
		{ element: contact, key: 'contact' },
		{ element: con_p, key: 'con_p' },
		{ element: mail, key: 'mail' },
		{ element: campus, key: 'campus' },
		{ element: experience, key: 'experience' },
		{ element: ongoing, key: 'ongoing' },
		{ element: web_1, key: 'web_1' },
		{ element: web_2, key: 'web_2' },
		{ element: web_3, key: 'web_3' },
		{ element: web_4, key: 'web_4' },
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
				experience_title: 'Experiencia',
				edu_p: 'Formando mi camino profesional',
				projects: 'Proyectos',
				pro_p: 'Mi creatividad en acción',
				contact: 'Contacto',
				con_p: 'Hablemos sobre tu idea',
				mail: 'Email',
				campus: 'Desarrollo de Aplicaciones Web &#8212; HND in Computing',
				experience: 'Desarrollador Front End',
				ongoing: 'En curso',
				web_1:
					'&#x2022; He fortalecido mis habilidades en el desarrollo web, centrándome en <span class="font-bold text-primary">React</span> para el frontend, <span class="font-bold text-primary">Node.js</span> para el backend, y <span class="font-bold text-primary">Spring</span> para la construcción de aplicaciones robustas en <span class="font-bold text-primary">Java</span>.',
				web_2:
					'&#x2022; Además, he dominado el uso de herramientas indispensables como <span class="font-bold text-primary">Git</span> para el control de versiones, así como <span class="font-bold text-primary"> HTML, Sass y Tailwind CSS</span> para el diseño de interfaces accesibles y atractivas.',
				web_3:
					'&#x2022; Creé un sistema de autenticación oAuth en <span class="font-bold text-primary hover-bold">Java</span> para un proyecto con Adobe Experience Manager utilizando <span class="font-bold text-primary hover-bold">JWT (JSON Web Tokens)</span>, garantizando la seguridad y la integridad en la gestión de usuarios.',
				web_4:
					'&#x2022; Realicé la creación de componentes desde cero utilizando <span class="font-bold text-primary hover-bold">LESS</span> y <span class="font-bold text-primary hover-bold">JavaScript</span> y la resolución de incidentes en componentes existentes,mejorando su funcionalidad y adaptándolos a los nuevos requerimientos.',
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
					"<span class='font-bold text-primary'>Full-Stack</span> Developer who enjoys the learning process and creating applications.",
				education: 'Education',
				experience_title: 'Work',
				edu_p: 'Shaping my professional path',
				projects: 'Projects',
				pro_p: 'My creativity in action',
				contact: 'Contact',
				con_p: 'Let’s talk about your idea',
				mail: 'Email',
				campus: 'Web Applications Development &#8212; HND in Computing',
				experience: 'Front End Developer',
				ongoing: 'Ongoing',
				web_1:
					'&#x2022; I have strengthened my skills in web development, focusing on <span class="font-bold text-primary">React</span> for the frontend, <span class="font-bold text-primary">Node.js</span> for the backend, and <span class="font-bold text-primary">Spring</span> for building robust applications in <span class="font-bold text-primary">Java</span>.',
				web_2:
					'&#x2022; In addition, I have mastered the use of essential tools such as <span class="font-bold text-primary">Git</span> for version control, as well as <span class="font-bold text-primary">HTML, Sass and Tailwind CSS</span> for designing accessible and attractive interfaces.',
				web_3:
					'&#x2022; I created an oAuth authentication system in <span class="font-bold text-primary hover-bold">Java</span> for a project with Adobe Experience Manager using <span class="font-bold text-primary hover-bold">JWT (JSON Web Tokens)</span>, ensuring security and integrity in user management.',
				web_4:
					'&#x2022; I carried out the creation of components from scratch using <span class="font-bold text-primary hover-bold">LESS</span> and <span class="font-bold text-primary hover-bold">JavaScript</span> and the resolution of incidents in existing components, improving their functionality and adapting them to new requirements.',
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
