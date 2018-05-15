// JavaScript source code
'use strict';

var loginButton;

function setupStatus() {
    // Creates container element if it has been removed.
    var container = document.getElementById('container');
    if (!container) {
        container = createContainer();
    }

    if (isLoggedIn) {
        container.innerHTML = '';
        menu.setBreadcrumbs('Status');
        var currentUser = {
            name: 'TestName',
            paidSocial: 10002,
            boughtShares: 200,
            loanSocial: 5000,
            loanShares: 200
        }

        var statusTable = createStatusTable(container);

        statusTable.nameField.innerHTML = currentUser.name;
        statusTable.paidSocialField.innerHTML = currentUser.paidSocial + currency;
        statusTable.boughtSharesField.innerHTML = currentUser.boughtShares + currency;
        statusTable.loanSocialField.innerHTML = currentUser.loanSocial + currency;
        statusTable.loanSharesField.innerHTML = currentUser.loanShares + currency;
    }
    else {
        setupStartPage();
    }
}

function createStatusTable(container) {
    var table = document.createElement('table');
    table.classList.add('statusTable');
    container.appendChild(table);
    var row;
    var cell;

    row = table.insertRow();
    var nameField = document.createElement('th');
    row.appendChild(nameField);
    nameField.setAttribute('colspan', 2);
    nameField.style.fontWeight = 'bold';

    row = table.insertRow();
    cell = row.insertCell();
    cell.innerHTML = 'Paid into Social Funds';
    var paidSocialField = row.insertCell();
    paidSocialField.classList.add('right');

    row = table.insertRow();
    cell = row.insertCell();
    cell.innerHTML = 'Bought shares';
    var boughtSharesField = row.insertCell();
    boughtSharesField.classList.add('right');

    row = table.insertRow();
    cell = row.insertCell();
    cell.innerHTML = 'Loan from Social Funds';
    var loanSocialField = row.insertCell();
    loanSocialField.classList.add('right');

    row = table.insertRow();
    cell = row.insertCell();
    cell.innerHTML = 'Loan from Shares';
    var loanSharesField = row.insertCell();
    loanSharesField.classList.add('right');

    return {
        nameField,
        paidSocialField,
        boughtSharesField,
        loanSocialField,
        loanSharesField
    };
}
