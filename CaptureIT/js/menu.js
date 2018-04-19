// JavaScript source code
'use strict';

const extraPadding = 50;
var menuDiv;
var menuWidth;
var menuPos;
var loginBox
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
    document.forms['login']['username'].focus();
    
}

function loginHide() {
    loginBox.style.visibility = 'hidden';
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

    menuDiv.innerHTML = getMenuItems();
    setupStatus();
}

function logout() {
    isLoggedIn = false;
    menuSetup();
    setupStatus(); // Gå til start siden når man logger ut.
}
