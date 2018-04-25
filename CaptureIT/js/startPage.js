// JavaScript source code

document.addEventListener('DOMContentLoaded', setupStartPage);
function setupStartPage() {
    var loginButton;

    var container = document.getElementById('container');
    if (!container) {
        container = createContainer();
    }

    if (!isLoggedIn) { // Basic startskjerm hvis man ikke er logget inn.
        container.innerHTML = '<h1>Welcome</h1> \
            <img class="logo" src="img/renewgen_logo.svg" /><br />';

        if (!loginButton)
            loginButton = document.createElement('input');

        document.getElementById('container').appendChild(loginButton);
        loginButton.setAttribute('type', 'button');
        loginButton.setAttribute('value', 'Login');
        loginButton.addEventListener('click', menu.menuOpen);
        loginButton.addEventListener('click', menu.loginShow);
    }
    else {
        setupStatus();
    }
}