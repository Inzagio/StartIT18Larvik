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
    let tabNav = element_builder('nav', { class: 'nav nav-tabs', role: 'tablist' });
    dynamicContentArea.appendChild(tabNav);

    for (let i = 0; i < 2; i++) {
        let tabNavItem = element_builder('nav', { class: 'nav-item' });
        let tabNavAnchor = element_builder('a', { class: 'nav-link', data_toggle: 'tab' });
        tabNav.appendChild(tabNavItem);
        tabNavItem.appendChild(tabNavAnchor);

        if (i == 0) {
            tabNavAnchor.setAttribute('href', '#registerUser');
            tabNavAnchor.setAttribute('id', 'regUser');
            tabNavAnchor.innerHTML = 'Register User';
            tabNavAnchor.addEventListener('click', function (e) {
                resetContent();
                renderRegisterUsers();
            });
        }
        if (i == 1) {
            tabNavAnchor.setAttribute('href', '#users');
            tabNavAnchor.setAttribute('id', 'showUsers');
            tabNavAnchor.innerHTML = 'User list';
            tabNavAnchor.addEventListener('click', function (e) {
                resetContent();
                renderUserListTable();
            });
        }
    }

}


//Firstly I'd like to note, doing it this way, can be very tricky and messy
function renderRegisterUsers() {
    let navHead = document.getElementById('regUser');
    let dynamicContentArea = document.getElementById('dynamicContentArea');
    let tabContent = element_builder('div', { class: 'tab-content' });
    let tabPane = element_builder('div', { id: 'registerUser', class: 'container tab-pane active' });

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
    //navHead.appendChild(tabPane);
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


//If there is an error loading database data
// function errData(err) {
//     console.log('Error!');
//     console.log(err);
// }


//User list table
function renderUserListTable() {
    let dynamicContentArea = document.getElementById('dynamicContentArea');
    let tabPane = element_builder('div', { id: 'users', class: 'container tab-pane' });
    let tabContent = element_builder('div', { class: 'tab-content' });
    dynamicContentArea.appendChild(tabPane);
    tabPane.appendChild(tabContent);
    createTable();
}

function createTable(){
    let table = element_builder('table');

    let headRow = table.insertRow();
    let dateAdd = element_builder('th');
    dateAdd.innerHTML = 'User Created';
    headRow.appendChild(dateAdd);

    let usernameHeader = element_builder('th');
    usernameHeader.innerHTML = 'Username';
    headRow.appendChild(usernameHeader);

    let emailHeader = element_builder('th');
    emailHeader.innerHTML = 'E-Mail';
    headRow.appendChild(emailHeader);

    db.orderBy('Date').orderBy('Username').get().then(function (querySnapshot){
        querySnapshot.forEach(function (item){
            let user = item.data();
            let row = table.insertRow();
            row.insertCell().innerHTML = user['Date'];
            row.insertCell().innerHTML = user['Username'];
            row.insertCell().innerHTML = user['Email'];
        })
    })
    dynamicContentArea.appendChild(table);
}

// Returns the value from input - Used for submitUserForm
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Submit the registration form to the database
function submitUserForm(event) {
    event.preventDefault();
    let username = getInputVal('inputUsername');
    let email = getInputVal('inputEmail');
    saveUserRegistered(username, email);
    //Reset after 1,5 seconds
    setTimeout(function () {
        document.getElementById('registerUsersForm').reset();
    }, 1500);
}

// Database write and read functions

//Save user to firebase
function saveUserRegistered(username, email) {
    dbUsers.add({
        username: username,
        email: email
    })
    console.log('Data saved', username, email);
}

getRealTimeUpdate = function () {
    dbUser.onSnapshot(function (doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            email.innerHTML = doc.data().email;
            username.innerHTML = doc.data().username;
            console.log(username, email);
        }

    });
}
//Reads from database
// var values;
// db.on('value', gotData, errData);
// function gotData(data) {
//     let users = data.val();
//     values = Object.values(users);
//}
