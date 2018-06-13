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
    renderCardContent();
}

// function addHeaderElem(){
// // //Main.css is added here
// // const CSSstyle = element_builder('link', {
// //     rel: 'stylesheet',
// //     href: 'styles.css'
// // });
// // document.head.appendChild(CSSstyle);


// //jQuery added - Currently not used, but for future reference, it has been added. 
// const jQuery = element_builder('script', {
//     src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js'
// });
// document.head.appendChild(jQuery);
// //Bootstrap JS
// const boostrapJS = element_builder('script', {
//     src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js',
//     async: true
// });
// document.head.appendChild(boostrapJS);

// //Popper.js
// const popper = element_builder('script', {
//     src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
// });
// document.head.appendChild(popper);


// // Link for boostrap css
// const bootstrapLink = element_builder('link', {
//     rel: 'stylesheet',
//     href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css',
//     integrity: 'sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4',
//     crossorigin: 'anonymus'
// });
// document.head.appendChild(bootstrapLink);

// //Including font awesome
// const fontAwesomeLink = element_builder('link', {
//     rel: 'stylesheet',
//     href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
//     integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp',
//     crossorigin: 'anonymus'
// });
// document.head.appendChild(fontAwesomeLink);
// }
//Renders the navigation cards. 
function renderCard() {
    const container = document.getElementById('container');
    let mainNav = element_builder('div', { class: 'container text', id:'mainNav'});
    let row = element_builder('div', { class: 'row my-3', id:'mainNavRow' });
    document.body.appendChild(container);
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
    let dynamicContent = document.getElementById('dynamicContentArea');
    while (dynamicContent.firstChild) {
        dynamicContent.removeChild(dynamicContent.firstChild);
    }
}



