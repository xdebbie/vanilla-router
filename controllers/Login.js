export default class Login {
	constructor() {
		this.view = '../views/login.html';
	}

	executeHttpRequest() {
		// Login APIs
		// Google
		document.querySelector('#googleLogin').addEventListener('click', () => {
			let provider = new firebase.auth.GoogleAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then((user) => {
					// vous pouvez récupérer le nom comme ceci :
					alert(user.additionalUserInfo.profile.name);
				})
				.catch(function (error) {
					console.log(error);
				});
		});

		// Facebook
		document
			.querySelector('#facebookLogin')
			.addEventListener('click', () => {
				let provider = new firebase.auth.FacebookAuthProvider();
				firebase
					.auth()
					.signInWithPopup(provider)
					.then((user) => {
						// vous pouvez récupérer le nom comme ceci :
						alert(user.additionalUserInfo.profile.name);
					})
					.catch(function (error) {
						console.log(error);
					});
			});

		// Github
		document.querySelector('#githubLogin').addEventListener('click', () => {
			let provider = new firebase.auth.GithubAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then((user) => {
					// vous pouvez récupérer le nom comme ceci :
					alert(user.additionalUserInfo.profile.name);
				})
				.catch(function (error) {
					console.log(error);
				});
		});
	}
}
