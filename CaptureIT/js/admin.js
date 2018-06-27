/**
 * admin.js
 *
 *
 * @version 0.1
 * @author  Trym Kristian Bj�rnvik
 * @updated 13-06-2018
 *
 *
 */

"use strict"


// JavaScript source code
document.addEventListener('DOMContentLoaded', renderCard());

// This builds an element using the following syntax  
// yourletName = element_builder('HTMLTAG',{attribute:'value', attribute:'value'});
// eg let pepe = element_builder('div',{id:'mainContent', data_toggle:'tab'})
// Remember to appendChild. e.g if this is the first element created, append it to document.body
function element_builder(type, attrs) {
    let elem = document.createElement(type);
    if (attrs) {
        Object.getOwnPropertyNames(attrs).forEach(function (attribute) {
            elem.setAttribute(attribute.replace('_', '-'), attrs[attribute]);
        });
    }
    return elem;
}

function admin_panel() {
    menu.setBreadcrumbs('Admin Console');
    database.getUserInfo(currentUser.uid).then((dbUser) => {
        if (dbUser.data().accessLevel >= 2) {
            renderCard();
        } else {
            resetContainer();
            let externalCont = document.getElementById('container');
            let errorBox = element_builder('div',{id:'errorBoxAdmin'});
            externalCont.appendChild(errorBox);
            let pTagAdmin = element_builder('p');
            pTagAdmin.innerHTML  = 'Error 401 - Unauthorized';
            errorBox.appendChild(pTagAdmin);
        }
    });
}

function resetContainer() {
    let externalContainerArea = document.getElementById('container');
    while (externalContainerArea.firstChild) {
        externalContainerArea.removeChild(externalContainerArea.firstChild);
    }
}

//Renders the navigation cards. 
function renderCard() {
    resetContainer();

    const container = document.getElementById('container');
    let mainNav = element_builder('div', { class: 'container text', id: 'mainNav' });
    let row = element_builder('div', { class: 'row my-3', id: 'mainNavRow' });
    container.appendChild(mainNav);
    mainNav.appendChild(row);

    // The commented i refers to if this was created using a for loop and if statements.  
    // i == 0
    renderCardContent('fa-users', 'Users', tabCreation);
    // i == 1
    renderCardContent('fa-chart-area', 'Statistics', graphDrawChooser);
    // i == 2
    renderCardContent('fa-cog', 'Settings', drawSettings);

    let dynamicContentArea = element_builder('div', { class: 'container', id: 'dynamicContentArea' });
    container.appendChild(dynamicContentArea);
}

function createCards() {
    let row = document.getElementById('mainNavRow');

    let col = element_builder('div', { class: "col-sm-4" });
    let card = element_builder('div', { class: 'card text-center bg-light my-2' });
    let cardBlock = element_builder('div', { class: 'card-block mt-2' });
    let cardTitle = element_builder('h3', { class: 'card-title' }); //Insert text on this node
    let icons = document.createElement('i');

    //Append to content to parent elements
    row.appendChild(col);
    col.appendChild(card);
    card.appendChild(cardBlock);
    cardBlock.appendChild(icons);
    cardBlock.appendChild(cardTitle);

    //Returns the card content object
    return {
        col: col,
        card: card,
        cardBlock: cardBlock,
        cardTitle: cardTitle,
        icons: icons
    };
}

function renderCardContent(css, title, optionalFunction) {
    let obj = createCards();
    obj.icons.setAttribute('class', 'fas ' + css + ' fa-3x');
    obj.cardTitle.innerHTML += title;
    obj.cardBlock.addEventListener('click', function (e) {
        resetContent();
        if (optionalFunction) optionalFunction();
    });
}

// Reset the content in Dynamic Content Area
function resetContent() {
    let dynamicContent = document.getElementById('dynamicContentArea');
    while (dynamicContent.firstChild) {
        dynamicContent.removeChild(dynamicContent.firstChild);
    }
}



