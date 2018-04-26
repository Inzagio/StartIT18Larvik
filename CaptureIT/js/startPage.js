// JavaScript source code

document.addEventListener('DOMContentLoaded', setupStartPage);
function setupStartPage() {

    var container = document.getElementById('container');
    if (!container) {
        container = createContainer();
    }

    if (!isLoggedIn) { // Basic startskjerm hvis man ikke er logget inn.
        container.innerHTML =
            '    <img src="img/renewgen_logo.svg" alt="ReNewGen" style="width:50%;">' +
            '    <br>' +
            '    <h1>' +
            '        <span id="header1">Capture</span>' +
            '        <span id="header2">IT</span>' +
            '    </h1>' +
            '    <p id="paragraph">Please select your village community</p>' +
            '    <div>' +
            '        <select>' +
            '            <option value="" disabled selected hidden>Select your village community here</option>' +
            '            <option>Kitinku</option>' +
            '            <option>Muhadala</option>' +
            '            <option>Kilimatinde</option>' +
            '        </select>' +
            '    </div>' +
            '    <form action="javascript:changeGroup()" method="get">' +
            '    <input type="submit" value="Proceed to your site"/>' +
            '    </form>';
    }

    else {
        setupStatus();
    }
}

function changeGroup() {
    var container = document.getElementById('container');
    container.innerHTML =
        ' <img src="img/renewgen_logo.svg" alt="ReNewGen" style="width:50%;">' +
        '    <br>' +
        '    <h1>' +
        '        <span id="header1">Capture</span>' +
        '        <span id="header2">IT</span>' +
        '    </h1>' +
        '    <div>' +
        '    <h2>Kilimatinde</h2>' +
        '    <a href="javascript:setupStartPage()">Not from Kilimatinde?</a>' +
        '    </div>' +
        '    <br>' +
        '    <input type="text" placeholder="Username" name="user" required>' +
        '    <br>' +
        '    <input type="password" placeholder="Password" name="pass" required>' +
        '    <br>' +
        '    <input type="submit" value="Log in" />' +
        '    <br>' +
        '    <a href="">Forgotten password?</a>';
}