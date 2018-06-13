/**
 * admin.js
 *
 *
 * @version 0.1
 * @author  Trym Kristian Bj�rnvik
 * @updated 24-04-2018
 *
 *
 */

"use strict"


// JavaScript source code
document.addEventListener('DOMContentLoaded',renderCard());

// This builds an element using the following syntax  
// yourletName = element_builder('HTMLTAG',{attribute:'value', attribute:'value'});
// eg let pepe = element_builder('div',{id:'mainContent', data_toggle:'tab'})
// Remember to appendChild. e.g if this is the first element created, append it to document.body
function element_builder(type, attrs) {
    let elem = document.createElement(type);
    if (attrs) {
        Object.getOwnPropertyNames(attrs).forEach(function (attribute) {
            elem.setAttribute(attribute.replace('_','-'), attrs[attribute]);
        });
    }
    return elem;
}

function admin_panel(){
    renderCard();
   
    
}
function resetContainer(){
    let dynamicContent = document.getElementById('container');
    while (dynamicContent.firstChild) {
        dynamicContent.removeChild(dynamicContent.firstChild);
    }
}

//Renders the navigation cards. 
function renderCard() {
   resetContainer();
   const showcase = document.getElementById('showcase'); 
   const container = document.getElementById('container');
    let mainNav = element_builder('div', { class: 'container text', id:'mainNav'});
    let row = element_builder('div', { class: 'row my-3', id:'mainNavRow' });
    showcase.appendChild(container);
    container.appendChild(row);
    
    // The commented i refers to if this was created using a for loop and if statements.  
    // i == 0
    renderCardContent('fa-users', 'Users', userTabs);
    // i == 1
    renderCardContent('fa-chart-area', 'Statistics', null);
    // i == 2
    renderCardContent('fa-cog', 'Settings', null);

    let dynamicContentArea = element_builder('div', { class: 'container', id: 'dynamicContentArea' });
    container.appendChild(dynamicContentArea);
}

function createCards() {
    let container = document.getElementById('mainNav');
    let row = document.getElementById('mainNavRow');
    
    let col = element_builder('div', { class: "col-md-4" });
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
    
}



