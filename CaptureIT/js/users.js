

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
    let tabNav = element_builder('ul', { class: 'nav nav-tabs', id: 'tabNavAdmin', role: 'tablist' });
    dynamicContentArea.appendChild(tabNav);

    for (let i = 0; i < 2; i++) {
        let tabNavItem = element_builder('li', { class: 'nav-item' });
        let tabNavAnchor = element_builder('a', { class: 'nav-link', data_toggle: 'tab', role: 'tab' });
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

function makeTabs() {
    let dynamicContentArea = document.getElementById('dynamicContentArea');
    let successAlert = element_builder('div', { class: 'alert', role: 'alert', id: 'alertUserReg' });

    let tabContent = element_builder('div', { class: 'tab-content' });
    let tabPaneReg = element_builder('div', { class: 'tab-pane active', id: 'registerUserTab', role: 'tabpanel', aria_labelledby: 'reg-tab' });
    let tabPaneUser = element_builder('div', { class: 'tab-pane', id: 'userTab', role: 'tabpanel', aria_labelledby: 'users-tab' });
    dynamicContentArea.appendChild(tabContent);
    tabContent.appendChild(tabPaneReg);
    tabContent.appendChild(tabPaneUser);
    tabPaneReg.appendChild(successAlert);
    renderRegisterUsers();
    getUsers();
    ifAdminDisplay();
}


//Firstly I'd like to note, doing it this way, can be very tricky and messy
function renderRegisterUsers() {
    let tabPaneReg = document.getElementById('registerUserTab');

    let form = element_builder('form', { id: 'registerUsersForm' });
    let divFormGroupName = element_builder('div', { class: 'form-group noselect' });
  
    let accessLevelSelector = element_builder('select', {class:'form-control', id:'accessLevelSelect', visibility:'hidden', disabled:'true'});
    for (let i = 0; i < 3; i++){
        let optionsAccessLevels = element_builder('option');
        divFormGroupName.appendChild(accessLevelSelector);
        accessLevelSelector.appendChild(optionsAccessLevels);
       
        if (i == 0){
            optionsAccessLevels.innerHTML = 'Group Coordinator';
            optionsAccessLevels.setAttribute('value', '1');
        }
        if (i == 1){
            optionsAccessLevels.innerHTML = 'Region Manager';
            optionsAccessLevels.setAttribute('value', '2');
        }
        if (i == 2){
            optionsAccessLevels.innerHTML = 'Global Manager';
            optionsAccessLevels.setAttribute('value', '3');
        }
        
    }
    accessLevelSelector.setAttribute('onchange', 'getValueFromOptions();' )
    
    //Inputs
    let inputName = element_builder('input', { type: 'text', class: 'form-control', id: 'inputName', placeholder: 'Name', required: 'true' });
    let inputUsername = element_builder('input', { type: 'text', class: 'form-control', id: 'inputUsername', placeholder: 'Username', required: 'true', minlength: '3' });
    let inputEmail = element_builder('input', { type: 'email', class: 'form-control', id: 'inputEmail', aria_describedby: 'emailHelp', placeholder: 'E-Mail', required: 'true' })
    let inputPassword = element_builder('input', { type: 'password', class: 'form-control', id: 'inputPassword', aria_describedby: 'pwHelp', placeholder: 'Password', required: 'true', minlength: '6', onkeyup: 'checkForm();' });
    let inputConfirmPassword = element_builder('input', { type: 'password', class: 'form-control', id: 'inputConfirmPassword', aria_describedby: 'confirmPwHelp', placeholder: 'Confirm Password', required: 'true', minlength: '6', onkeyup: 'checkForm();' });

    let nameHelp = element_builder('small', { id: 'nameHelp', class: 'form-text text-muted' });
    let usernameHelp = element_builder('small', { id: 'usernameHelp', class: 'form-text text-muted' });
    let emailHelp = element_builder('small', { id: 'emailHelp', class: 'form-text text-muted' });
    let pwHelp = element_builder('small', { id: 'pwHelp', class: 'form-text text-muted' });
    let confirmPwHelp = element_builder('small', { id: 'confirmPwHelp', class: 'form-text text-muted' });

    // Submit button
    let submitButton = element_builder('button', { type: 'submit', class: 'btn btn-primary', id: 'regUserBtn', disabled: 'true' });
    submitButton.innerHTML = 'Register user';
    tabPaneReg.appendChild(form);

    // Form appends
    form.appendChild(divFormGroupName);
    divFormGroupName.appendChild(accessLevelSelector);
    divFormGroupName.appendChild(inputName);
    divFormGroupName.appendChild(nameHelp)
    divFormGroupName.appendChild(inputUsername);
    divFormGroupName.appendChild(usernameHelp)
    divFormGroupName.appendChild(inputEmail);
    divFormGroupName.appendChild(emailHelp)
    divFormGroupName.appendChild(inputPassword);
    divFormGroupName.appendChild(pwHelp)
    divFormGroupName.appendChild(inputConfirmPassword);
    divFormGroupName.appendChild(confirmPwHelp)

    nameHelp.innerHTML = 'Please provide us with your full name';
    usernameHelp.innerHTML = 'Username must be atleast 3 characters';
    emailHelp.innerHTML = 'We will never share your email with anyone else';
    pwHelp.innerHTML = 'Your password must be 6-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.';
    confirmPwHelp.innerHTML = 'Confirm your password';

    // To do - Compare passwords and validate form
    form.appendChild(submitButton);
    document.getElementById('registerUsersForm').addEventListener('submit', submitUserForm);
   
  
}

function ifAdminDisplay(){
    database.getUserInfo(currentUser.uid).then((dbUser) => {
        let optionsList = document.getElementById('accessLevelSelect');
        //console.log(dbUser.data().accessLevel);
        if (dbUser.data().accessLevel >= 2){
            optionsList.disabled = false;
            optionsList.style.visibility = 'visible';
        }
       
    });
  

}


function getValueFromOptions(){
    const valueSelected = document.getElementById('accessLevelSelect').value;
    console.log(valueSelected);
    
}
// Validating the form
const checkForm = function () {
    pw = getInputVal('inputPassword');
    confirmPw = getInputVal('inputConfirmPassword');
    alertField = document.getElementById('alertUserReg');
    subButton = document.getElementById('regUserBtn')
    if (pw == confirmPw && pw.length > 5 && confirmPw.length > 5) {
        alertField.classList.remove('alert-danger');
        alertField.classList.add('alert-success');
        alertField.visibility = 'visible';
        alertField.innerHTML = 'Passwords match';
        subButton.disabled = false;
    }
    else {
        alertField.classList.remove('alert-succes');
        alertField.classList.add('alert-danger');
        alertField.innerHTML = 'Passwords are not matching.'
        alertField.visibility = 'visible';
        subButton.disabled = true;
    }
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
   // row.insertCell().innerHTML = `<button onClick="javascript:removeUser('${item.uid}');;">❌</button>`;
}

// function removeUser(uid){
//     const userDel = db.collection('users').doc(uid).delete();
// }

// Returns the value from input - Used for submitUserForm
function getInputVal(id) {
    return document.getElementById(id).value;
}


//Submit the registration form to the database
function submitUserForm(event) {
    event.preventDefault();
    let Username = getInputVal('inputUsername');
    let Email = getInputVal('inputEmail');
    let password = getInputVal('inputPassword');
    let name = getInputVal('inputName');
    let accessLevel = document.getElementById('accessLevelSelect').value;

    let regBtn = document.getElementById('regUserBtn');
    regBtn.setAttribute('class', 'btn btn-success');

    let alert = document.getElementById('alertUserReg');
    alert.innerHTML = 'Successfully registered';
    alert.classList.add('alert-success');
    alert.style.visibility = 'visible';
    database.addUser(Username, Email, name, password, accessLevel);
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


