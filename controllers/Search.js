import OpenDataParis from '../models/OpenDataParis.js';

export default class Search {
	constructor() {
		this.view = '../views/search.html';
		this.api = new OpenDataParis();
	}

	executeHttpRequest() {
		document
			.querySelector('#searchpage')
			.addEventListener('submit', (e) => {
				// To avoid redirecting to the home page
				e.preventDefault();

				// To fetch the data typed in the input
				this.api
					.getAll(
						document.querySelector('#searchinput').value,
						document.querySelector('#year').value,
						document.querySelector('#sort').value
					)
					.then((data) => {
						// A partir du template (id="event-template") créer les différents évnements
						let template = document.querySelector(
							'#event-template'
						);
						let clone = document.importNode(template.content, true);
						clone.querySelector('.event-title').textContent =
							'Hello'; // le title de l'image
						clone.querySelector('.event-image').src = 'toto.jpg'; // L'url de l'image
						document
							.querySelector('.event-list')
							.appendChild(clone);
					});
			});
	}
}
