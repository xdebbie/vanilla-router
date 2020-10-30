let app = {
	// ----------------------------------------------------------------------------------------------------------------
	// MANIPULATION DU DOM DE L'APPLICATION
	// ----------------------------------------------------------------------------------------------------------------
	dom: {
		addEvents(data) {
			document.querySelector('.event-list').innerHTML = '';
			for (let record of data) {
				// A partir du template (id="event-template") créer les différents évnements
				let template = document.querySelector('#event-template');
				let clone = document.importNode(template.content, true);
				clone.querySelector('.event-title').textContent = record.name; // le title de l'image
				clone.querySelector('.event-image').src = record.image.url; // L'url de l'image
				document.querySelector('.event-list').appendChild(clone);
			}
		},
		render(contentHtml) {
			document.querySelector('main.container').innerHTML = contentHtml;
		},
	},

	// ----------------------------------------------------------------------------------------------------------------
	// ARCHITECTURE MVC DE L'APPLICATION
	// ----------------------------------------------------------------------------------------------------------------
	mvc: {
		router: null,
		dispatchRoute(controller) {
			// Fetch the views' content to each route
			if (controller.hasOwnProperty('view') !== true) {
				throw new Error("The view hasn't been registered");
			}

			fetch(controller.view)
				.then((response) => response.text())
				.then((html) => {
					app.dom.render(html);
					if (typeof controller.executeHttpRequest === 'function') {
						controller.executeHttpRequest();
					}
				});
		},
	},
};

// L'application est exportée afin d'être accessible par d'autres modules.
export default app;
