// JavaScript source code

function setupTransactionList() {
    // Creates container element if it has been removed.
    var container = document.getElementById('container');
    if (!container) {
        container = createContainer();
    }

    container.innerHTML = '';
    menu.setBreadcrumbs('Transaction List');

    // Shows table on page
    var table = createTransactionTable();
    container.appendChild(table);
}

function createTransactionTable() {
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

    // Fill table data
    db.orderBy('Date').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (item) {
            let person = item.data();
            let row = table.insertRow();
            row.insertCell().innerHTML = person['Date'];
            row.insertCell().innerHTML = person['Name'];
            row.insertCell().innerHTML = person['PaidSocial'];
            row.insertCell().innerHTML = person['SharesBougth'];
            row.insertCell().innerHTML = person['LoanFromSocial'];
            row.insertCell().innerHTML = person['LoanFromShares'];
        });
    });

    return table;
}
