/**
 * admin.js
 *
 *
 * @version 0.1
 * @author  Trym Kristian Bjørnvik
 * @updated 24-04-2018
 *
 *
 */

"use strict"


// JavaScript source code
function admin_panel() {
    wrapper();
    render_nav_admin();
    draw_menu_items();
    draw_content();
    //addIcons();
}
// Creates the wrapper element and replaces the container element in index.html with the created wrapper
function wrapper() {
    var wrapper = document.createElement("div");

    wrapper.setAttribute("id", "wrapper");
    wrapper.classList.add("wrapperAdmin");
    var container = document.getElementById('container');
    container.innerHTML = '';
    container.appendChild(wrapper);
    //var replacedNode = showcase.replaceChild(wrapper, container);
}

// Draws the navigation bar used for the admin panel
function render_nav_admin() {
    var wrapper = document.getElementById("wrapper");

    var menu = document.createElement("div");
    menu.setAttribute("id", "admin-navigation");
    wrapper.appendChild(menu);

}

// Draw the area which we will put in the panel elements, e.g statistics, users, settings and main dashboard. 
function draw_content() {
    var wrapper = document.getElementById("wrapper");
    var box = document.createElement("div");
    box.setAttribute("id", "contentbox");
    wrapper.appendChild(box);
}

//Draws the menu items
function draw_menu_items() {
    var menu = document.getElementById("admin-navigation");
    var items = ["Dashboard", "Statistics", "Users", "Settings"];
    //var icons = ["", "&#xE8B8;", "&#xE8B8;", "&#xE8B8;"];
    //var icons = "settings";
    var menu_ul = document.createElement("ul");
    menu_ul.setAttribute("class", "menu-ul");
    menu.appendChild(menu_ul);


    // This will create a list of 4 items, based on the items array and give them an anchor tag with an onclick function - FUNCTION NAME IS PLACEHOLDER!!!

    for (var index = 0; index < items.length; index++) {
        var menu_li = document.createElement("li");
        menu_li.setAttribute("class", "menu-li");
        menu_ul.appendChild(menu_li);


        var menu_a = document.createElement("a");
        menu_li.appendChild(menu_a);
        menu_a.innerHTML += items[index];
        menu_a.setAttribute("href", "#");

        var icons = document.createElement("i");
        icons.setAttribute("class", "material-icons");
        menu_a.appendChild(icons);
        //menu_a.setAttribute("onclick", "callMyStuff('" + items + "')");
        if (index == 0) {
            menu_a.setAttribute("onclick", "callMyStuff(" + items[index] + ")");
            icons.innerHTML += "&#xE8B8;";
        }
        if (index == 1) {
            menu_a.setAttribute("onclick", "callMyStuff(" + items[index] + ")");
        }
        if (index == 2) {
            menu_a.setAttribute("onclick", "callMyStuff(" + items[index] + ")");
        }
        if (index == 3) {
            menu_a.setAttribute("onclick", "callMyStuff(" + items[index] + ")");
        }
    }
}
function callMyStuff(element) {
    if (element == "Dashboard") {

    }
    if (element == "Statistics") {
        graph_draw();
    }
    if (element == "Users") {

    }
    if (element == "Settings") {
        drawSettings();
    }

}

