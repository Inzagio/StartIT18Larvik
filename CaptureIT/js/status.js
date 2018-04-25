// JavaScript source code
'use strict';

var loginButton;

function setupStatus() {
    // Creates container element if it has been removed.
    var container = document.getElementById('container');
    if (!container) {
        container = createContainer();
    }

    if (isLoggedIn) {
        container.innerHTML = '<h1>Logged In</h1>';
    }
    else {
        setupStartPage();
    }
}
