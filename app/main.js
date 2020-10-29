import Home from '../controllers/Home.js';
import Search from '../controllers/Search.js';
import About from '../controllers/About.js';
import Login from '../controllers/Login.js';
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

	// On app.js, there is the dispatchRoute that exports the content of the views
	app.mvc.router.add('/', () => app.mvc.dispatchRoute(new Home()));

	app.mvc.router.add('/search', () => app.mvc.dispatchRoute(new Search()));

	app.mvc.router.add('/about', () => app.mvc.dispatchRoute(new About()));

	app.mvc.router.add('/login', () => app.mvc.dispatchRoute(new Login()));

	app.mvc.router.addUriListener();
	// First page the browser will show when accessing the website
	// Check is used to avoid refresh issues
	app.mvc.router.navigateTo('/').check();
}

// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
	// Initialisation du routeur.
	initializeRouter();
});
