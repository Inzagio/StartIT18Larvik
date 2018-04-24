// JavaScript source code
var menu = function () {
    'use strict';

    const menuExtraPadding = 52; // Extra padding on the bottom of menu.
    const loginExtraPadding = 30; // Extra padding on the bottom of login form.
    var menuDiv;
    var menuButton;
    var menuHeight;
    var loginBox;
    var menuIsOpen;

    document.addEventListener('DOMContentLoaded', menuOnLoad);
    function menuOnLoad() {
        menuDiv = document.getElementById('menu');
        menuButton = document.getElementById('menuButton');

        // Place menu under button (whereever it is)
        var menuButtonPos = menuButton.getBoundingClientRect();
        menuDiv.style.top = menuButtonPos.bottom + 'px';
        menuDiv.style.left = menuButtonPos.left + 'px';

        // Load initial items
        menuSetup();
        menuDiv.style.height = '0px';
        menuIsOpen = false;
    }

    function menuSetup() {
        // Load initial items
        var menuItems = getMenuItems();
        menuDiv.innerHTML = '';
        menuItems.forEach(function (item) {
            menuDiv.innerHTML += item;
        })
        menuHeight = (menuItems.length * menuExtraPadding);
        menuDiv.style.height = menuHeight + 'px';

        if (!isLoggedIn) {
            menuButton.style.visibility = 'hidden';
        }
        else {
            menuButton.style.visibility = 'visible';
        }

        // Login Box
        loginBox = document.createElement('div');
        loginBox.setAttribute('id', 'loginBox');
        menuDiv.appendChild(loginBox);

        loginBox.style = '\
            z-index: 2; \
            position: relative; \
            left: 10px; \
            width: 180px; \
            background-color: skyblue; \
            padding: 10px; \
            transition: 0.5s;';

        loginBox.innerHTML = ' \
            <form action="" name="login"> \
            Username:<br /> <input type="text" name="username"><br /> \
            Password:<br /><input type="password" name="password"><br /> \
            <input id="loginButton" type="button" value="Log In">';

        loginHide();
        document.getElementById('loginButton').addEventListener('click', loginAction);
    }

    function menuOpen() {
        if (menuIsOpen)
            menuClose();
        else {
            menuDiv.style.height = menuHeight + 'px';
            menuIsOpen = true;
        }
    }

    function menuClose() {
        loginHide();
        menuDiv.style.height = '0px';
        menuIsOpen = false;
    }

    function loginShow() {
        loginBox.style.visibility = 'visible';
        document.forms['login']['username'].focus();
        menuDiv.style.height = (menuHeight + parseInt(window.getComputedStyle(loginBox).getPropertyValue('height')) + loginExtraPadding) + 'px';
    }

    function loginHide() {
        loginBox.style.visibility = 'hidden';
        menuDiv.style.height = menuHeight + 'px';
    }

    function loginAction() {
        if (document.forms['login']['username'].value == '' || document.forms['login']['password'].value == '') {
            var errorText = document.getElementById('loginError')
            if (!errorText) {
                errorText = document.createElement('span');
                errorText.setAttribute('id', 'loginError');
                errorText.style.color = 'red';
                loginBox.appendChild(errorText);
            }
            errorText.innerHTML = 'You need to enter a username and password!';
            return;
        }
        isLoggedIn = true;
        loginHide();

        menuSetup();
        setupStatus();
    }

    function logout() {
        isLoggedIn = false;
        menuSetup();
        menuClose();
        setupStatus(); // Gå til start siden når man logger ut.
    }

    return { // Public methods
        logout: logout,
        menuOpen: menuOpen,
        menuClose: menuClose,
        loginShow: loginShow
    }
}();
