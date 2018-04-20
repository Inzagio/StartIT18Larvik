

// JavaScript source code
function admin_panel() {
    wrapper();
    navigation_admin();
    draw_menu_items();


    //navigation_menu();
    //header();
    //side_bar();
    //main_content();
    //footer();
}
// JavaScript source code
function navigation_admin() {
    var wrapper = document.getElementById("wrapper");

    var menu = document.createElement("div");
    menu.setAttribute("id", "admin-navigation");
    wrapper.appendChild(menu);

}

function draw_menu_items() {
    var menu = document.getElementById("admin-navigation");
    var items = ["Dashboard", "Statistics", "Users", "Settings"];

    var menu_ul = document.createElement("ul");
    menu_ul.setAttribute("id", "menu-ul");
    menu.appendChild(menu_ul);


    // This will create a list of 4 items, based on the items array and give them an anchor tag with an onclick function - FUNCTION NAME IS PLACEHOLDER!!!
    items.forEach(function (items) {
        var menu_li = document.createElement("li");
        menu_li.setAttribute("id", "menu-li");
        menu_ul.appendChild(menu_li);
        var menu_a = document.createElement("a");
        menu_li.appendChild(menu_a);
        menu_a.innerHTML += items;
        menu_a.setAttribute("href", "#");
        menu_a.setAttribute("onclick", "callMyStuff(this)");
    });

    //items.forEach(function (items) {
    //    var menu_a = document.createElement("a");
    //    menu_li.appendChild(menu_a);
    //    menu_a.setAttribute("href", "#");
    //    menu_a.setAttribute("onclick", "callMyStuff(this)");
        
    //});

}


function wrapper() {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");
    wrapper.classList.add("wrapper");
    replacedNode = showcase.replaceChild(wrapper, container);
}

//function side_bar() {
//    var sidebar = document.createElement("div");
//    sidebar.setAttribute("id", "sidebar");
//    sidebar.classList.add("sidebar");
//    document.getElementById("wrapper").appendChild(sidebar);



//}

//function navigation_menu() {
//    var navigation = document.createElement("div");
//    navigation.innerHTML = "Test";
//    navigation.setAttribute("id", "navigation");
//    navigation.classList.add("navigation");

//    document.getElementById("wrapper").appendChild(navigation);

//    var menuItems = ["Dashboard", "Statistics", "Users", "Settings"];
//    var menu_ul = document.createElement("ul");
//    navigation.appendChild(menu_ul);
//    menu_ul.setAttribute("id", "menu");
//    menu_ul.classList.add("ul")

//    menuItems.forEach(function (menuItems) {
//        var menu_li = document.createElement("li");
//        menu_ul.appendChild(menu_li);
//        menu_li.setAttribute("onclick", "callfunction(this)");
//        menu_li.classList.add("li")
//        menu_li.innerHTML += menuItems;
//    });

//}
//function main_content () {
//    var mainContent = document.createElement("div");
//    mainContent.innerHTML = "Test2";
//    mainContent.classList.add("content");
//    mainContent.setAttribute("id", "content");
//    document.getElementById("wrapper").appendChild(mainContent);
//}

//function footer() {
//    var footer = document.createElement("footer");
//    footer.innerHTML = "Copyright Start IT 2018 Larvik & ReNewGen AS";
//    footer.setAttribute("id", "footer");
//    footer.classList.add("footer");
//    document.getElementById("wrapper").appendChild(footer);

//}