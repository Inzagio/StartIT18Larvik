// Todo move api key out from users.js
// import config from './secret.js';
function element_builder(type, attrs) {
    let elem = document.createElement(type);
    if (attrs) {
        Object.getOwnPropertyNames(attrs).forEach(function (attribute) {
            elem.setAttribute(attribute.replace('_', '-'), attrs[attribute]);
        });
    }
    return elem;
}

//Tabs with panes

function tabCreation() {
    let dynamicContentArea = document.getElementById('dynamicContentArea');
    let tabNav = element_builder('ul', { class: 'nav nav-tabs', id:'tabNavAdmin', role: 'tablist' });
    dynamicContentArea.appendChild(tabNav);

    for (let i = 0; i < 2; i++) {
        let tabNavItem = element_builder('li', { class: 'nav-item' });
        let tabNavAnchor = element_builder('a', { class: 'nav-link', data_toggle: 'tab', role:'tab' });
        tabNav.appendChild(tabNavItem);
        tabNavItem.appendChild(tabNavAnchor);

        if (i == 0) {
            tabNavAnchor.setAttribute('href', '#registerUserTab');
            tabNavAnchor.setAttribute('class', 'nav-link active');
            tabNavAnchor.setAttribute('id', 'reg-tab');
            tabNavAnchor.setAttribute('aria-controls', 'registerUser');
            tabNavAnchor.setAttribute('aria-selected', 'true');
            tabNavAnchor.innerHTML = 'Register User';
            tabNavAnchor.addEventListener('click', function (e) {
               
            });
        }
        if (i == 1) {
            tabNavAnchor.setAttribute('href', '#userTab');
            tabNavAnchor.setAttribute('id', 'showusers-tab');
            tabNavAnchor.setAttribute('aria-controls', 'users');
            tabNavAnchor.setAttribute('aria-selected', 'false');
            tabNavAnchor.innerHTML = 'User list';
            tabNavAnchor.addEventListener('click', function (e) {
            
            });
        }
    }
    makeTabs();
}

function makeTabs(){
    let dynamicContentArea = document.getElementById('dynamicContentArea');
    let successAlert = element_builder('div', { class: 'alert alert-success', role: 'alert', id: 'alertUserReg' });
    
    let tabContent = element_builder('div', { class: 'tab-content'});
    let tabPaneReg = element_builder('div', {class: 'tab-pane active', id: 'registerUserTab', role:'tabpanel', aria_labelledby:'reg-tab' });
    let tabPaneUser = element_builder('div', {class: 'tab-pane' , id: 'userTab', role:'tabpanel', aria_labelledby:'users-tab' });
    dynamicContentArea.appendChild(tabContent);
    tabContent.appendChild(tabPaneReg);
    tabContent.appendChild(tabPaneUser);
    tabPaneReg.appendChild(successAlert);
    renderRegisterUsers();
    getUsers();
    
}

//Firstly I'd like to note, doing it this way, can be very tricky and messy
function renderRegisterUsers() {
    let tabPaneReg = document.getElementById('registerUserTab');

    let form = element_builder('form', { id: 'registerUsersForm' });
    let divFormGroupName = element_builder('div', { class: 'form-group noselect' });
    //Inputs
    let inputName = element_builder('input', { type: 'text', class: 'form-control', id: 'inputName', placeholder: 'Name', required: 'true' });
    let inputUsername = element_builder('input', { type: 'text', class: 'form-control', id: 'inputUsername', placeholder: 'Username', required: 'true' });
    let inputEmail = element_builder('input', { type: 'email', class: 'form-control', id: 'inputEmail', placeholder: 'E-Mail', required: 'true' })
    // Submit button
    let submitButton = element_builder('button', { type: 'submit', class: 'btn btn-primary', id: 'regUserBtn' });
    submitButton.innerHTML = 'Register user';
    tabPaneReg.appendChild(form);
    // Form appends
    form.appendChild(divFormGroupName);
    divFormGroupName.appendChild(inputName);
    divFormGroupName.appendChild(inputUsername);
    divFormGroupName.appendChild(inputEmail);
    // Creates the two password fields, one for pw input and one for repeating it, conforms with regular UX on reg forms
    for (let i = 0; i < 2; i++) {
        let divFormGroupPassword = element_builder('div', { class: 'form-group noselect' });
        let inputPassword = element_builder('input', { type: 'password', class: 'form-control', placeholder: 'Password', required: 'true' });

        form.appendChild(divFormGroupPassword);
        divFormGroupPassword.appendChild(inputPassword);
        if (i == 0) {
            inputPassword.setAttribute('id', 'pwRegUser');
        }
        if (i == 1) {
            inputPassword.setAttribute('placeholder', 'Confirm Password');
        }
    }
    // To do - Compare passwords and validate form
    form.appendChild(submitButton);
    document.getElementById('registerUsersForm').addEventListener('submit', submitUserForm);
}



//User list table
function renderUserListTable() {
    dynamicContentArea.appendChild(tabContent);
    tabContent.appendChild(tabPane);
}

//Creates a table for displaying current registered users
function createTable() {
    let userTab = document.getElementById('userTab');
    let table = element_builder('table', { id: 'usersTable' });
    let headRow = table.insertRow();

    let nameHeader = element_builder('th');
    nameHeader.innerHTML = 'Name';
    headRow.appendChild(nameHeader);

    let usernameHeader = element_builder('th');
    usernameHeader.innerHTML = 'Username';
    headRow.appendChild(usernameHeader);
    
    let emailHeader = element_builder('th');
    emailHeader.innerHTML = 'E-Mail';
    headRow.appendChild(emailHeader);
    

    userTab.appendChild(table);
    return table;
}

function renderUsersTable(table, item, index) {
    let user = item.data();
    var row = table.rows[index + 1] ? table.rows[index + 1] : table.insertRow();
    row.insertCell().innerHTML = user['name'];
    row.insertCell().innerHTML = user['Username'];
    row.insertCell().innerHTML = user['Email'];
}

// Returns the value from input - Used for submitUserForm
function getInputVal(id) {
    return document.getElementById(id).value;
}


//Submit the registration form to the database
function submitUserForm(event) {
    event.preventDefault();
    let Username = getInputVal('inputUsername');
    let Email = getInputVal('inputEmail');
    let password = getInputVal('pwRegUser');
    let name = getInputVal('inputName');

    let regBtn = document.getElementById('regUserBtn');
    regBtn.setAttribute('class', 'btn btn-success');

    let alert = document.getElementById('alertUserReg');
    alert.innerHTML = 'Successfully registered';
    alert.style.visibility = 'visible';
    database.addUser(Username, Email, name, password);
    //Reset after 1,5 seconds
    setTimeout(function () {
        regBtn.setAttribute('class', 'btn btn-primary');
        document.getElementById('registerUsersForm').reset();
        alert.style.visibility = 'hidden';
    }, 1500);
}

// Database read functions

//Read users from firebase
function getUsers() {
    dbUsers.orderBy('name').orderBy('Username').orderBy('Email').get().then(function (querySnapshot) {
        let table = createTable();
        querySnapshot.forEach(function (item, index) {
            renderUsersTable(table, item, index);
        });
    });
}


