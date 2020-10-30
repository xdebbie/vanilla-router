// --------------------------------------------------------------------------------------------------------------------
// CONFIGURATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------
// let provider = new firebase.auth.GithubAuthProvider();

const config = {
	// Configuration de la plateforme Firebase
	firebase: {
		apiKey: 'AIzaSyC324Xiij30qhCO1tV8_z6aTKMzox0nox0',
		authDomain: 'vanilla-router.firebaseapp.com',
		databaseURL: 'https://vanilla-router.firebaseio.com',
		projectId: 'vanilla-router',
		storageBucket: 'vanilla-router.appspot.com',
		messagingSenderId: '1063902923009',
		appId: '1:1063902923009:web:a0923aa2c78b766d20b300',
		measurementId: 'G-S53CR2XC2Z',
	},
};

if (!firebase.apps.length) {
	firebase.initializeApp(config.firebase);
}

// La configuration est exportée afin d'être accessible par d'autres modules.
export default config;
