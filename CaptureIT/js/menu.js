// JavaScript source code
'use strict';

const extraPadding = 50;
var menuDiv;
var menuWidth;
var menuPos;
var loginBox
var loginButton;
var isLoggedIn = false;

document.addEventListener('DOMContentLoaded', menuOnLoad);
function menuOnLoad() {
    menuDiv = document.getElementById('menu');
    menuWidth = parseInt(window.getComputedStyle(menuDiv).getPropertyValue('width'));
    menuPos = Math.abs(parseInt(window.getComputedStyle(menuDiv).getPropertyValue('left')) + menuWidth + extraPadding);

    // Load initial items
    menuSetup();
}

function menuSetup() {
    // Load initial items
    menuDiv.innerHTML = getMenuItems();

    // Login Box
    loginBox = document.createElement('div');
    loginBox.setAttribute('id', 'loginBox');
    menuDiv.appendChild(loginBox);

    loginBox.style = '\
        position: absolute; \
        z-index: 2; \
        left: 150px; \
        top: 50px; \
        width: 180px; \
        background-color: skyblue; \
        padding: 10px;';
    loginBox.innerHTML = '' +
        '<form action="" name="login">' +
        'Username:<br /> <input type="text" name="username"><br />' +
        'Password:<br /><input type="password" name="password"><br />' +
        '<input id="loginButton" type="button" value="Log In">';

    loginHide();
    document.getElementById('loginButton').addEventListener('click', loginAction);

    // Login Button
    if (!isLoggedIn) {
        if (!loginButton)
            loginButton = document.createElement('input');

        document.getElementById('container').appendChild(loginButton);
        loginButton.setAttribute('type', 'button');
        loginButton.setAttribute('value', 'Login');
        loginButton.addEventListener('click', menuOpen);
        loginButton.addEventListener('click', loginShow);
    }
}

function menuOpen() {
    menuDiv.style.left = menuPos + 'px';
}

function menuClose() {
    loginHide();
    menuDiv.style.left = '-' + (menuWidth + extraPadding) + 'px';
}

function loginShow() {
    loginBox.style.visibility = 'visible';
    loginBox.getElementsByTagName('form')[0].getElementsByTagName('input')[0].focus();
}

function loginHide() {
    loginBox.style.visibility = 'hidden';
}

function loginAction() {
    loginHide();
    //menuClose();

    isLoggedIn = true;
    menuDiv.innerHTML = getMenuItems();
    document.getElementById('container').removeChild(loginButton);
}

function logout() {
    isLoggedIn = false;
    menuSetup();
}
