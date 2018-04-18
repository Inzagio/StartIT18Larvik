// JavaScript source code
function admin_panel() {
    wrapper();
    header();
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
    var wrapper = document.createElement("wrapper");
    wrapper.setAttribute("id", "wrapper");
    document.body.appendChild(wrapper);
}

function side_bar() {
    var sidebar = document.createElement("div");
    sidebar.innerHTML = "Admin sidebar";
    sidebar.setAttribute("class", "sidebar");
    document.getElementById("wrapper").appendChild(sidebar);
}
function header() {
    var header = document.createElement("header");
    header.innerHTML = "Header";
    header.setAttribute("class", "header");
    document.getElementById("wrapper").appendChild(header);
}
function main_content () {
    var mainContent = document.createElement("mainContent");
    mainContent.innerHTML = "lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum"
    mainContent.setAttribute("class", "content");
    document.getElementById("wrapper").appendChild(mainContent);
}

function footer() {
    var footer = document.createElement("footer");
    footer.innerHTML = "Copyright Start IT 2018 Larvik & ReNewGen AS";
    footer.setAttribute("class", "footer");
    document.getElementById("wrapper").appendChild(footer);
    
}