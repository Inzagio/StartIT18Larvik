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
function admin_panel() {
    wrapper();
    render_nav_admin();
    draw_menu_items();
    draw_content();
    
}
// Creates the wrapper element and replaces the container element in index.html with the created wrapper
function wrapper() {
    var wrapper = document.createElement("div");

    wrapper.setAttribute("id", "wrapper");
    wrapper.classList.add("wrapperAdmin");
    var container = document.getElementById('container');
    container.innerHTML = '';
    container.appendChild(wrapper);
   
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
var items = ["Dashboard", "Statistics", "Users", "Settings","ChartTest"];
//Draws the menu items
function draw_menu_items() {
    var menu = document.getElementById("admin-navigation");
  
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
        menu_a.setAttribute("class", "admin-anchor");
        var icons = document.createElement("i");
        icons.setAttribute("class", "material-icons");
        menu_a.appendChild(icons);
    
        if (index == 0) {
            menu_a.setAttribute("onclick", "draw_dashboard()");
            icons.innerHTML += "&#xE871;";
           
        }
        if (index == 1) {
            menu_a.setAttribute("onclick", "graph_draw()");
            icons.innerHTML += "&#xE85C";

        }
        if (index == 2) {
            menu_a.setAttribute("onclick", "draw_users()");
            icons.innerHTML += "&#xE7FB";
        }
        if (index == 3) {
            menu_a.setAttribute("onclick", "drawSettings()");
            icons.innerHTML += "&#xE8B8;";
        }
        if (index == 4){
            menu_a.setAttribute("onclick", "drawCanvas()");
        }
    }
}

function draw_dashboard() {
   var contbox = document.getElementById("contentbox");
    contbox.innerHTML = "Hei pepelord";
}

