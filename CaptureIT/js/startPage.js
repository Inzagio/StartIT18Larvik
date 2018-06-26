// JavaScript source code

document.addEventListener('DOMContentLoaded', setupStartPage);
function setupStartPage() {

    var container = getContainer();

    if (!isLoggedIn) { // Basic startskjerm hvis man ikke er logget inn.
        container.innerHTML =
            ' <div id="startpage">\
        <img id="startlogo" src="img/renewgen_logo.svg" alt="ReNewGen">\
            <br>\
                <h1 id="startheader">\
                    <span id="head1">Capture</span><span id="head2">IT</span>\
                </h1>\
                <br>\
                    <form action="javascript:menu.loginAction(\'login\')" name="login">\
                    <input id="startfield1" type="text" placeholder="Username" name="user" required>\
                        <br>\
                            <input id="startfield2" type="password" placeholder="Password" name="pass" required>\
                                <br>\
                                    <input id="startbutton" type="submit" value="Log in" />\
                                    </form>\
                                    <br>\
                                        <a id="forgotpass" href="">Forgotten password?</a>\
                </div>';
    }

    else {
        setupStatus();
    }
}
