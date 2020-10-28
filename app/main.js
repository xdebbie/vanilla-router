import Home from '../controllers/Home.js';
import app from './app.js';

import config from './config.js';

// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter() {
	// Instancier ici le Vanilla Router dans l'objet "app.mvc.router"
	app.mvc.router = new Router({
		mode: 'hash',
		page404: function (path) {
			console.log('"/' + path + '" Page not found');
		},
	});

	app.mvc.router.add('/', () => app.mvc.dispatchRoute(new Home()));

	app.mvc.router.add('/search', function () {
		console.log('Search');
	});

	app.mvc.router.add('/about', function () {
		console.log('About');
	});

	app.mvc.router.add('/login', function () {
		console.log('Login');
	});

	app.mvc.router.addUriListener();
	// First page the browser will show when accessing the website
	app.mvc.router.navigateTo('/');
	// To avoid refresh issues
	app.mvc.router.check();
}

// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
	// Initialisation du routeur.
	initializeRouter();
});
