// JavaScript source code
var menu = function () {
    'use strict';

    const loginExtraPadding = 15; // Extra padding on the bottom of login form.
    var menuDiv;
    var menuButton;
    var menuHeight;
    var breadcrumbsText;
    var loginBox;
    var menuIsOpen;

    var currentUser;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            currentUser = user;
            if (currentUser.displayName == null) {
                console.log('No displayname, getting from DB');
                database.getUserInfo(currentUser.uid).then((dbUser) => {
                    currentUser.updateProfile({
                        displayName: dbUser.data().Username
                    });
                    document.getElementById('menuUser').innerHTML = dbUser.data().Username;
                });
            }
            else {
                document.getElementById('menuUser').innerHTML = currentUser.displayName;
            }
            isLoggedIn = true;
            menuSetup();
            setupStatus();
        } else {
            isLoggedIn = false;

            menuSetup();
            setupStatus();
        }
    });


    document.addEventListener('DOMContentLoaded', menuOnLoad);
    function menuOnLoad() {
        menuDiv = document.getElementById('menu');
        menuButton = document.getElementById('menuButton');
        breadcrumbsText = document.getElementById('breadcrumbs');

        // Load initial items
        menuSetup();
        menuDiv.style.height = '0px';
        menuIsOpen = false;
    }

    function menuSetup() {
        // Load initial items and get the height of each
        var items = getMenuItems();
        menuDiv.innerHTML = '';
        menuHeight = 0;
        items.forEach(function (item, index) {
            menuDiv.innerHTML += item;
            menuHeight += menuDiv.children[index].getBoundingClientRect().height + 1;
        })

        menuDiv.style.height = menuHeight + 'px';

        var header = document.getElementsByTagName('header')[0];

        if (!isLoggedIn) {
            menuButton.style.visibility = 'hidden';
            header.style.visibility = 'hidden';
        }
        else {
            menuButton.style.visibility = 'visible';
            header.style.visibility = 'visible';
        }

        menuClose();
    }

    /**
     * This sets the breadcrumbs field to the supplied text
     */
    function setBreadcrumbs() {
        if (arguments[0] === undefined) {
            console.log('No breadcrumbs supplied');
            return;
        }
        var output = '';
        for (let crumb of arguments) {
            output += crumb + ' / ';
        }
        var regex = new RegExp(' / $');
        breadcrumbsText.innerHTML = output.replace(regex, '');
    }

    function menuOpen() {
        if (menuIsOpen) {
            menuClose();
            window.removeEventListener('click', menuClose);
        }
        else {
            menuDiv.style.height = menuHeight + 'px';
            menuIsOpen = true;
            event.stopPropagation();
            window.addEventListener('click', menuClose);
        }
    }

    function menuClose() {
        menuDiv.style.height = '0px';
        menuIsOpen = false;
    }

    function loginAction(form) {
        console.log();
        if (document.forms[form]['user'].value == '' || document.forms[form]['pass'].value == '') {
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

        firebase.auth().signInWithEmailAndPassword(document.forms[form]['user'].value, document.forms[form]['pass'].value).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            document.getElementById('loginError').innerHTML = error.message;
            console.log(errorCode);
        });

        //isLoggedIn = true;

        //menuSetup();
        //setupStatus();
    }

    function logout() {
        firebase.auth().signOut().catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

        //isLoggedIn = false;
        //menuSetup();
        menuClose();
        //setupStatus(); // G� til start siden n�r man logger ut.
    }

    return { // Public methods
        logout: logout,
        menuOpen: menuOpen,
        menuClose: menuClose,
        menuSetup: menuSetup,
        setBreadcrumbs: setBreadcrumbs,
        loginAction: loginAction,
        currentUser: currentUser,
    }
}();
