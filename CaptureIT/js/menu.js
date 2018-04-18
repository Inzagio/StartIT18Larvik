// JavaScript source code
'use strict';

var menuDiv;
var menuWidth;
var menuPos;
var extraPadding = 50;

document.addEventListener('DOMContentLoaded', menuOnLoad);
function menuOnLoad() {
    menuDiv = document.getElementById('menu');
    menuWidth = parseInt(window.getComputedStyle(menuDiv).getPropertyValue('width'));
    menuPos = Math.abs(parseInt(window.getComputedStyle(menuDiv).getPropertyValue('left')) + menuWidth + extraPadding);
}

function menuOpen() {
    menuDiv.style.left = menuPos + 'px';
}

function menuClose() {
    menuDiv.style.left = '-' + (menuWidth + extraPadding) + 'px';
}
