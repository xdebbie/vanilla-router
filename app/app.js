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
			if (controller.view === undefined) {
				throw new Error('Please define a view for the controller');
			} else {
				fetch(`View/${controller.view}.html`).then((response) =>
					console.log(response.text)
				);
			}
		},
	},
};

// L'application est exportée afin d'être accessible par d'autres modules.
export default app;
