// JavaScript source code
'use strict';

function getMenuItems(loggedIn) {
    if (loggedIn)
        return '<a href="javascript:void(0)" class="closebtn" onclick="menuClose()">&times;</a> \
            <a href="javascript:void(0)" onclick="logout()"><b>Logout</b></a> \
            <a href="javascript:void(0)" onclick="">Savings/Loans</a> \
            <a href="javascript:void(0)" onclick="">Status</a> \
            <a href="javascript:void(0)" onclick="admin_panel()">Admin</a>';
    else
        return ' <a href="javascript:void(0)" class="closebtn" onclick="menuClose()">&times;</a> \
            <a href="javascript:void(0)" onclick="loginShow();"><b>Login</b></a>';
}