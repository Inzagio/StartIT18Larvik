var items = ["Dashboard", "Statistics", "Users", "Settings"];

// JavaScript source code
function admin_panel() {
    wrapper();
    navigation_admin();
    draw_menu_items();
    draw_content();


    //navigation_menu();
    //header();
    //side_bar();
    //main_content();
    //footer();
}

function wrapper() {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");
    wrapper.classList.add("wrapper");
    replacedNode = showcase.replaceChild(wrapper, container);
}
// JavaScript source code
function navigation_admin() {
    var wrapper = document.getElementById("wrapper");

    var menu = document.createElement("div");
    menu.setAttribute("id", "admin-navigation");
    wrapper.appendChild(menu);

}

function draw_content() {
    var wrapper = document.getElementById("wrapper");
    var box = document.createElement("div");
    box.setAttribute("id", "contentbox");
    //box.innerHTML = "Test lol yolo";
    wrapper.appendChild(box);
}


function draw_menu_items() {
    var menu = document.getElementById("admin-navigation");


    var menu_ul = document.createElement("ul");
    menu_ul.setAttribute("class", "menu-ul");
    menu.appendChild(menu_ul);


    // This will create a list of 4 items, based on the items array and give them an anchor tag with an onclick function - FUNCTION NAME IS PLACEHOLDER!!!
    items.forEach(function (items) {
        var menu_li = document.createElement("li");
        menu_li.setAttribute("class", "menu-li");
        menu_ul.appendChild(menu_li);
        var menu_a = document.createElement("a");
        menu_li.appendChild(menu_a);
        menu_a.innerHTML += items;
        menu_a.setAttribute("href", "#");
        menu_a.setAttribute("onclick", "callMyStuff('" + items + "')");
    });
    //if ()

    //items.forEach(function (items) {
    //    var menu_a = document.createElement("a");
    //    menu_li.appendChild(menu_a);
    //    menu_a.setAttribute("href", "#");
    //    menu_a.setAttribute("onclick", "callMyStuff(this)");

    //});

}

function callMyStuff(element) {
    if (element == "Dashboard") {

    }
    if (element == "Statistics") {
        grap_draw();
    }
    if (element == "Users") {

    }
    if (element == "Settings") {

    }
    
}

