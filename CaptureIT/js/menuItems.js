// JavaScript source code
'use strict';

function getMenuItems() {
    if (isLoggedIn)
        return '<a href="javascript:void(0)" class="closebtn" onclick="menu.menuClose()">&times;</a> \
            <a href="javascript:void(0)" onclick="menu.logout()"><b>Logout</b></a> \
            <a href="javascript:void(0)" onclick="">Savings/Loans</a> \
            <a href="javascript:void(0)" onclick="setupStatus();">Status</a> \
            <a href="javascript:void(0)" onclick="admin_panel()">Admin</a>';
    else
        return ' <a href="javascript:void(0)" class="closebtn" onclick="menu.menuClose()">&times;</a> \
            <a href="javascript:void(0)" onclick="menu.loginShow();"><b>Login</b></a>';
}
