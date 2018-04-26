// JavaScript source code
'use strict';

var menuItems = [
    '<a href="javascript:void(0)" onclick="menu.logout()"><b>Logout</b></a>',
    '<a href="javascript:void(0)" onclick="setupStatus();">Status</a>',
    '<a href="javascript:void(0)" onclick="registerTransaction();">Register Transaction</a>',
    '<a href="javascript:void(0)" onclick="admin_panel()">Admin</a>'
];

const defaultItems = menuItems.slice();
Object.freeze(defaultItems);

function getMenuItems() {
    if (isLoggedIn)
        return menuItems;
    else
        return ['<a href="javascript:void(0)" onclick="menu.loginShow();"><b>Login</b></a>'];
}

function createContainer() {
    var showcase = document.getElementById('showcase');
    showcase.innerHTML = '';
    var container = document.createElement('div');
    container.setAttribute('id', 'container');
    showcase.appendChild(container);
    return container;
}