﻿// JavaScript source code

var transactionData = [];
var confirmBox;

function setupTransactionList() {
    // Creates container element if it has been removed.
    var container = getContainer();

    container.innerHTML = '<br />Loading Data...';
    menu.setBreadcrumbs('Transaction List');

    database.getUserInfo(currentUser.uid).then(user => {
        database.getTransactions(user.data().place).then(querySnapshot => {
            var table = createTransactionTable();
            querySnapshot.forEach(function (item, index) {
                showRow(table, item, index);
            });
        });
    });
}

// Shows table on page
function createTransactionTable(container) {
    var container = document.getElementById('container');
    if (!container) {
        container = getContainer();
    }
    container.innerHTML = '';
    var table = document.createElement('table');
    table.classList.add('transactionTable');

    // Create table headers
    var headerRow = table.insertRow();
    var dateHeader = document.createElement('th');
    dateHeader.innerHTML = 'Date';
    headerRow.appendChild(dateHeader);

    var nameHeader = document.createElement('th');
    nameHeader.innerHTML = 'Name';
    headerRow.appendChild(nameHeader);

    var paidSocialHeader = document.createElement('th');
    paidSocialHeader.innerHTML = 'Paid Social';
    headerRow.appendChild(paidSocialHeader);

    var sharesBougthHeader = document.createElement('th');
    sharesBougthHeader.innerHTML = 'Shares Bougth';
    headerRow.appendChild(sharesBougthHeader);

    var loanSocialHeader = document.createElement('th');
    loanSocialHeader.innerHTML = 'Loan from Social';
    headerRow.appendChild(loanSocialHeader);

    var loanSharesHeader = document.createElement('th');
    loanSharesHeader.innerHTML = 'Loan from Shares';
    headerRow.appendChild(loanSharesHeader);

    container.appendChild(table);

    confirmBox = document.createElement('div');
    confirmBox.style = 'position: fixed; \
        top: 0; left: 0; bottom: 0; right: 0; \
        margin: auto; \
        padding: 5px; \
        width: 250px; \
        height: 60px; \
        background-color: rgb(63, 187, 233); \
        color: white; \
        visibility: hidden';
    container.appendChild(confirmBox);

    return table;
}

// Fill table data
function showRow(table, item, index) {
    let person = item.data();
    var row = table.rows[index + 1] ? table.rows[index + 1] : table.insertRow();;
    person.user.get().then(name => {
        row.insertCell().innerHTML = person['date'].toDate().toISOString().split('T', 1)[0];
        row.insertCell().innerHTML = name.data().name;
        row.insertCell().innerHTML = person['paidSocial'];
        row.insertCell().innerHTML = person['sharesBougth'];
        row.insertCell().innerHTML = person['loanSocial'];
        row.insertCell().innerHTML = person['loanShares'];
        row.insertCell().innerHTML = `<button onClick="javascript:deleteTransactionConfirm('${item.id}');">❌</button>`;
    });
}

function deleteTransaction(id) {
    console.log(id);
    db.doc(id).delete();

    hideTransactionConfirm();
    var container = document.getElementById('container');

    getTransactions();
}

function deleteTransactionConfirm(id) {
    confirmBox.innerHTML = 'Are you sure you want to remove this transaction?<br />';
    confirmBox.innerHTML += `<button onClick="javascript:deleteTransaction('${id}');">Yes</button>`;
    confirmBox.innerHTML += '<button onClick="javascript:hideTransactionConfirm();">No</button>';
    confirmBox.style.visibility = 'visible';
}

function hideTransactionConfirm() {
    confirmBox.style.visibility = 'hidden';
}
