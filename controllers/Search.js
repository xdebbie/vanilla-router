import OpenDataParis from '../models/OpenDataParis.js';
import app from '../app/app.js';

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
						app.dom.addEvents(data);
					});
			});
	}
}
