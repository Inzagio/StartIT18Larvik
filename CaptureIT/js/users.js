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
function userTabs() {
    let dynamicContentArea = document.getElementById('dynamicContentArea');
    let tabNav = element_builder('ul', { class: 'nav nav-tabs', role: 'tablist' });
    dynamicContentArea.appendChild(tabNav);

    for (let i = 0; i < 2; i++) {
        let tabNavItem = element_builder('li', { class: 'nav-item' });
        let tabNavAnchor = element_builder('a', { class: 'nav-link', data_toggle: 'tab' });
        tabNav.appendChild(tabNavItem);
        tabNavItem.appendChild(tabNavAnchor);

        if (i == 0) {
            tabNavAnchor.setAttribute('href', '#registerUser');
            tabNavAnchor.setAttribute('class', 'nav-link active');
            tabNavAnchor.setAttribute('id', 'reg-tab');
            tabNavAnchor.setAttribute('role', 'tab');
            tabNavAnchor.setAttribute('aria-controls', 'registerUser');
            tabNavAnchor.setAttribute('aria-selected', 'true');
            tabNavAnchor.innerHTML = 'Register User';
            tabNavAnchor.addEventListener('click', function (e) {
                resetContent();
                renderRegisterUsers();
            });
        }
        if (i == 1) {
            tabNavAnchor.setAttribute('href', '#users');
            tabNavAnchor.setAttribute('id', 'showusers-tab');
            tabNavAnchor.setAttribute('role', 'tab');
            tabNavAnchor.setAttribute('aria-controls', 'users');
            tabNavAnchor.setAttribute('aria-selected', 'false');
            tabNavAnchor.innerHTML = 'User list';
            tabNavAnchor.addEventListener('click', function (e) {
                resetContent();
                renderUserListTable();
                getUsers();
            });
        }
    }

}


//Firstly I'd like to note, doing it this way, can be very tricky and messy
function renderRegisterUsers() {

    let dynamicContentArea = document.getElementById('dynamicContentArea');
    let tabContent = element_builder('div', { class: 'tab-content' });
    let tabPane = element_builder('div', { id: 'registerUser', class: 'tab-pane fade show active' });

    let form = element_builder('form', { id: 'registerUsersForm' });
    let divFormGroupName = element_builder('div', { class: 'form-group noselect' });

    //Labels
    let labelForName = element_builder('label', { for: 'inputUsername', class: 'noselect' });
    let labelForEmail = element_builder('label', { for: 'inputEmail', class: 'noselect' });

    //Inputs
    let inputName = element_builder('input', { type: 'text', class: 'form-control', id: 'inputUsername', placeholder: 'Username', required: 'true' });
    let inputEmail = element_builder('input', { type: 'email', class: 'form-control', id: 'inputEmail', placeholder: 'Provide a valid e-mail', required: 'true' })

    // Submit button
    let submitButton = element_builder('button', { type: 'submit', class: 'btn btn-primary' });
    submitButton.innerHTML = 'Register user';


    dynamicContentArea.appendChild(tabContent);
    // navHead.appendChild(tabPane);
    tabContent.appendChild(tabPane);
    tabPane.appendChild(form);


    // Form appends
    form.appendChild(divFormGroupName);
    labelForName.innerHTML = 'Username';
    labelForEmail.innerHTML = 'E-mail';
    divFormGroupName.appendChild(labelForName);
    divFormGroupName.appendChild(inputName);
    divFormGroupName.appendChild(labelForEmail);
    divFormGroupName.appendChild(inputEmail);

    // Creates the two password fields, one for pw input and one for repeating it, conforms with regular UX on reg forms
    for (let i = 0; i < 2; i++) {
        let divFormGroupPassword = element_builder('div', { class: 'form-group noselect' });
        let labelForPassword = element_builder('label', { for: 'formGroupPassword', class: 'noselect' });
        let inputPassword = element_builder('input', { type: 'password', class: 'form-control', placeholder: 'Password', required: 'true' });
        labelForPassword.innerHTML = 'Password';

        form.appendChild(divFormGroupPassword);
        divFormGroupPassword.appendChild(labelForPassword);
        divFormGroupPassword.appendChild(inputPassword);

        if (i == 0) {
            labelForPassword.setAttribute('id', 'password');

        }
        if (i == 1) {
            labelForPassword.setAttribute('id', 'confirmPassword');
            inputPassword.setAttribute('placeholder', 'Confirm Password');
            labelForPassword.innerHTML = 'Confirm Password';
        }
    }
    // To do - Compare passwords and validate form
    form.appendChild(submitButton);
    document.getElementById('registerUsersForm').addEventListener('submit', submitUserForm);
}


function getUsers() {
    dbUsers.orderBy('Username').orderBy('Email').get().then(function (querySnapshot) {
        let table = createTable();
        querySnapshot.forEach(function (item, index) {
            renderUsersTable(table, item, index);
        });
    });
}

//User list table
function renderUserListTable() {
    let dynamicContentArea = document.getElementById('dynamicContentArea');
    let tabContent = element_builder('div', { class: 'tab-content', id: 'tabContent' });
    let tabPane = element_builder('div', { id: 'users', class: 'container tab-pane' });
    dynamicContentArea.appendChild(tabContent);
    tabContent.appendChild(tabPane);
}

function createTable() {
    let table = element_builder('table');

    let headRow = table.insertRow();

    let usernameHeader = element_builder('th');
    usernameHeader.innerHTML = 'Username';
    headRow.appendChild(usernameHeader);

    let emailHeader = element_builder('th');
    emailHeader.innerHTML = 'E-Mail';
    headRow.appendChild(emailHeader);

    dynamicContentArea.appendChild(table);
    return table;
}

function renderUsersTable(table, item, index) {
    let user = item.data();
    var row = table.rows[index + 1] ? table.rows[index + 1] : table.insertRow();
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
    saveUserRegistered(Username, Email);
    //Reset after 1,5 seconds
    setTimeout(function () {
        document.getElementById('registerUsersForm').reset();
    }, 1500);
}

// Database write and read functions

//Save user to firebase
function saveUserRegistered(Username, Email) {
    dbUsers.add({
        Username: Username,
        Email: Email
    })
    console.log('Data saved', Username, Email);
}

// function getData() {
//     firebase.firestore().collection('users').get().then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             console.log(doc.id);
//             console.log(doc.data());

//         });
//     })
//         .catch(function (error) {
//             console.log("Error retrieving data", error);
//         });
// }


