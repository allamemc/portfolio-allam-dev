import i18next from 'i18next';

const langButton = document.getElementById('lang');
const idiomaText = document.querySelector('.idioma');

langButton.addEventListener('click', () => {
	let subtitulo = document.querySelector('.subtitulo');
	let education = document.querySelector('#education');
	let projects = document.querySelector('#projects');
	let contact = document.querySelector('#contact');
	let mail = document.querySelector('#mail');
	let campus = document.querySelector('#campus');
	let web_1 = document.querySelector('#web-1');
	let web_2 = document.querySelector('#web-2');
	let bach = document.querySelector('#bach');
	let p_pokeshop = document.querySelector('#p-pokeshop');
	let p_dubo = document.querySelector('#p-dubo');
	let portfolio = document.querySelector('#portfolio');
	let p_portfolio = document.querySelector('#p-portfolio');
	let p_solocr = document.querySelector('#p-solocr');
	let p_logic = document.querySelector('#p-logic');
	let python = document.querySelector('#python');
	let p_python = document.querySelector('#p-python');
	let p_teo = document.querySelector('#p-teo');
	let lang = idiomaText.textContent === 'ES' ? 'en' : 'es';
	document.documentElement.setAttribute('lang', lang);

	const elements = [
		{ element: subtitulo, key: 'subtitulo' },
		{ element: education, key: 'education' },
		{ element: projects, key: 'projects' },
		{ element: contact, key: 'contact' },
		{ element: mail, key: 'mail' },
		{ element: campus, key: 'campus' },
		{ element: web_1, key: 'web_1' },
		{ element: web_2, key: 'web_2' },
		{ element: bach, key: 'bach' },
		{ element: p_pokeshop, key: 'p_pokeshop' },
		{ element: p_dubo, key: 'p_dubo' },
		{ element: portfolio, key: 'portfolio' },
		{ element: p_portfolio, key: 'p_portfolio' },
		{ element: p_solocr, key: 'p_solocr' },
		{ element: p_logic, key: 'p_logic' },
		{ element: python, key: 'python' },
		{ element: p_python, key: 'p_python' },
		{ element: p_teo, key: 'p_teo' },
	];

	elements.forEach((item) => {
		item.element.innerHTML = i18next.t(item.key, { lng: lang });
	});

	idiomaText.textContent = lang === 'es' ? 'ES' : 'EN';
});

i18next.init({
	lng: 'es',
	debug: true,
	resources: {
		es: {
			translation: {
				subtitulo:
					'Desarrollador de software que disfruta el proceso de aprendizaje y creación de aplicaciones.',
				education: 'Educación',
				projects: 'Proyectos',
				contact: 'Contacto',
				mail: 'Email',
				campus: 'Desarrollo de Aplicaciones Web',
				web_1:
					'&#x2022; Desarrollé mis conocimientos en el desarrollo web relacionandome con mis primeros lenguajes de programación como fueron Java, Python, PHP y JavaScript.',
				web_2:
					'&#x2022; Aprendí a utilizar herramientas como Git, GitHub, y diseñar interfaces accesibles con HTML5, SCSS, TailWind CSS y Bootstrap.',
				bach: 'Higher National Diploma in Computing',
				p_pokeshop: 'Tu tienda de Pokémon favorita, consumiendo la Poké API.',
				p_dubo:
					'Escuela de artes marciales, mejorada usando OAuth 2.0 y PassPort JS.',
				portfolio: 'Portafolio Web',
				p_portfolio:
					'Mi Portfolio Web, donde muestro mis proyectos y mi información.',
				p_solocr: 'Tarifas para un gimnasio.',
				p_logic: 'Foro para programadores.',
				python: 'Tienda Python',
				p_python: 'Tienda de componentes en consola.',
				p_teo: 'Teoría sobre XML y JSON.',
			},
		},
		en: {
			translation: {
				subtitulo:
					'Software Developer enjoying the process of learning and creating apps.',
				education: 'Education',
				projects: 'Projects',
				contact: 'Contact',
				mail: 'Email',
				campus: 'Web Applications Development',
				web_1:
					'&#x2022; Develop my knowledge in web development relating to my first programming languages ​​like Java, Python, PHP and JavaScript.',
				web_2:
					'&#x2022; I learned to use tools like Git, GitHub, and design accessible and flexible interfaces with HTML5, SCSS, TailWind CSS and Bootstrap.',
				bach: 'Higher National Diploma in Computing',
				p_pokeshop: 'Your favorite Pokemon store, consuming the Poké API.',
				p_dubo:
					'Martial arts school, enhanced using OAuth 2.0 and PassPort JS.',
				portfolio: 'Web Portfolio',
				p_portfolio:
					'My Web Portfolio, where I show my projects and my information.',
				p_solocr: 'Rates for a gym.',
				p_logic: 'Forum for programmers.',
				python: 'Python Store',
				p_python: 'Component store in console.',
				p_teo: 'Theory about XML and JSON.',
			},
		},
	},
});
