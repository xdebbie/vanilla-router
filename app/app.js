let app = {
	// ----------------------------------------------------------------------------------------------------------------
	// MANIPULATION DU DOM DE L'APPLICATION
	// ----------------------------------------------------------------------------------------------------------------
	dom: {},

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
					document.querySelector('main.container').innerHTML = html;
				});
		},
	},
};

// L'application est exportée afin d'être accessible par d'autres modules.
export default app;
