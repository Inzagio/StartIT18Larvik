// JavaScript source code

document.addEventListener('DOMContentLoaded', setupStartPage);
function setupStartPage() {

    var container = document.getElementById('container');
    if (!container) {
        container = createContainer();
    }

    if (!isLoggedIn) { // Basic startskjerm hvis man ikke er logget inn.
        container.innerHTML =
            ' <div id="startpage">' +
            '     <img id="startlogo" src="img/renewgen_logo.svg" alt="ReNewGen">' +
            '     <br>' +
            '     <h1 id="startheader">' +
            '         <span id="head1">Capture</span><span id="head2">IT</span>' +
            '     </h1>' +
            '     <p id="startparagraph">Please select your village community</p>' +
            '     <div>' +
            '         <select id="startselect">' +
            '             <option value="" disabled selected hidden>Select your village community here</option>' +
            '             <option>Kitinku</option>' +
            '             <option>Muhadala</option>' +
            '             <option>Kilimatinde</option>' +
            '         </select>' +
            '     </div>' +
            '     <form action="javascript:changeGroup()" method="get">' +
            '     <input id="startbutton" type="submit" value="Proceed to your site"/>' +
            '     </form>' +
            '</div>';
    }

    else {
        setupStatus();
    }
}

function changeGroup() {
    var container = document.getElementById('container');
    container.innerHTML =
   ' <div id="startpage">\
        <img id="startlogo" src="img/renewgen_logo.svg" alt="ReNewGen">\
            <br>\
                <h1 id="startheader">\
                    <span id="head1">Capture</span><span id="head2">IT</span>\
                </h1>\
                <div>\
                    <h2 id="startlocation">Kilimatinde</h2>\
                    <a id="returnlink" href="javascript:setupStartPage()">Not from Kilimatinde?</a>\
                </div>\
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