// JavaScript source code
function admin_panel() {
    wrapper();
    //header();
    side_bar();
    main_content();
    footer();
}

//function loadMore() {
//    header();
//    side_bar();
//    main_content();
//    footer();
//}

function wrapper() {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");
    wrapper.classList.add("wrapper");
    replacedNode = showcase.replaceChild(wrapper, container);
}

function side_bar() {
    var sidebar = document.createElement("div");
    sidebar.innerHTML = "Admin sidebar";
    sidebar.setAttribute("id", "sidebar");
    sidebar.classList.add("sidebar");
    document.getElementById("wrapper").appendChild(sidebar);
}
//function header() {
//    var header = document.createElement("header");
//    header.innerHTML = "Header";
//    header.setAttribute("id", "header");
//    header.classList.add("header");

//    document.getElementById("wrapper").appendChild(header);
//}
function main_content () {
    var mainContent = document.createElement("div");
    mainContent.innerHTML = "lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum"
    mainContent.classList.add("content");
    mainContent.setAttribute("id", "content");
    document.getElementById("wrapper").appendChild(mainContent);
}

function footer() {
    var footer = document.createElement("footer");
    footer.innerHTML = "Copyright Start IT 2018 Larvik & ReNewGen AS";
    footer.setAttribute("id", "footer");
    footer.classList.add("footer");
    document.getElementById("wrapper").appendChild(footer);
    
}