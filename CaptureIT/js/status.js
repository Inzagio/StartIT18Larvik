// JavaScript source code
'use strict';

var loginButton;

document.addEventListener('DOMContentLoaded', setupStatus);
function setupStatus() {
    var container = document.getElementById('container');

    if (!isLoggedIn) { // Basic startskjerm hvis man ikke er logget inn.
        container.innerHTML = '<h1>Welcome</h1> \
            <img class="logo" src="img/renewgen_logo.svg" /><br />';

        if (!loginButton)
            loginButton = document.createElement('input');

        document.getElementById('container').appendChild(loginButton);
        loginButton.setAttribute('type', 'button');
        loginButton.setAttribute('value', 'Login');
        loginButton.addEventListener('click', menuOpen);
        loginButton.addEventListener('click', loginShow);
    }
    else {
        container.innerHTML = '<h1>Logged In</h1>';
    }
}