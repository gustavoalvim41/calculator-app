const app = document.getElementById('app');

function changeTheme(themeValue) {
	if (themeValue == 1) {
		app.classList.remove('theme-light');
		app.classList.remove('theme-purple');

		app.classList.add('theme-default');
	} else if (themeValue == 2) {
		app.classList.remove('theme-default');
		app.classList.remove('theme-purple');

		app.classList.add('theme-light');
	} else {
		app.classList.remove('theme-default');
		app.classList.remove('theme-light');

		app.classList.add('theme-purple');
	}
}