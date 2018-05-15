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
        menu.setBreadcrumbs('Status');
        var currentUser = {
            paidSocial: 10002,
            boughtShares: 200,
            loanSocial: 5000,
            loanShares: 200
        }

        var statusTable = createStatusTable(container);

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
    var wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    var table = document.createElement('table');
    container.appendChild(wrapper);
    wrapper.appendChild(table);
    var row;
    var cell;

    row = table.insertRow();
    cell = row.insertCell();
    cell.innerHTML = 'Paid into Social Funds';
    var paidSocialField = row.insertCell();

    row = table.insertRow();
    cell = row.insertCell();
    cell.innerHTML = 'Bought shares';
    var boughtSharesField = row.insertCell();

    row = table.insertRow();
    cell = row.insertCell();
    cell.innerHTML = 'Loan from Social Funds';
    var loanSocialField = row.insertCell();

    row = table.insertRow();
    cell = row.insertCell();
    cell.innerHTML = 'Loan from Shares';
    var loanSharesField = row.insertCell();

    return {
        paidSocialField,
        boughtSharesField,
        loanSocialField,
        loanSharesField
    };
}
