//JavaScript source code

'use strict'

function drawSettings() {
    //getting contentbox from admin.js and blanking the page
    var containerbox = document.getElementById('contentbox');
    containerbox.innerHTML = '';

    //setting local variables to be used for text generation
    var txt = ['Currency: ', 'Shares value: ', 'Minimum savings: ',
     'Save', 'Max Loan (times saved amount) ']

    //setting variables so that currency can be updated in all fields
    var currencyDiv;
    var sharesDiv;
    var communityDiv;
    var toLendDiv; 

    //running all the functions to create settings
    createList();
    createShares();
    createCommunity();
    createToLend();
    //----------------------------------------------------------------------------------------------

    //Currency
    function createList() {
        currencyDiv = document.createElement('div');
        currencyDiv.className = 'infoDiv';
        currencyDiv.innerHTML = '</br>' + '</br>' + '<div>' + txt[0] + currency + '</div>';
        containerbox.appendChild(currencyDiv);

        var selectList = document.createElement('select');
        selectList.setAttribute('id', 'selectCurrencyTag');
        selectList.onchange = changeCurrency;
        containerbox.appendChild(selectList);
        
        //populating the select-list
        var options = [' GBP', ' NOK', ' MWK', ' TZS', ' USD', currency[0]];
        options.forEach(function (option) {
            var optionSelect = document.createElement('option');
            selectList.appendChild(optionSelect);
            optionSelect.innerHTML += option;
            optionSelect.value = option;
            selectList.value = currency;
        });

        //Changing the currency global variable and currency selected
        function changeCurrency() {
            var selectList = document.getElementById('selectCurrencyTag');
            currency = selectList.value;
            currencyDiv.innerHTML = '</br>' + '</br>' + '<div>' + txt[0] + currency + '</div>';
            sharesDiv.innerHTML = '</br>' + '</br>' + '<div>' + txt[1] + sharesValue + currency + '</div>';
            communityDiv.innerHTML = '</br>' + '</br>' + '<div>' + txt[2] + communityValue + currency + '</div>';
            toLendDiv.innerHTML = '</br>' + '</br>' + '<div>' + txt[4] + toLend + '</div>';
        }  
    }
    //----------------------------------------------------------------------------------------------

    function createShares() {
        sharesDiv = document.createElement('div');
        sharesDiv.className = 'infoDiv';
        containerbox.appendChild(sharesDiv);
        var sharesHTML = '</br>' + '</br>' + '<div>' + txt[1] + sharesValue + currency + '</div>';
        sharesDiv.innerHTML = sharesHTML;
        var sharesBox = document.createElement('input');
        sharesBox.setAttribute('class', 'settingsInput');
        sharesBox.setAttribute('type', 'number');
        containerbox.appendChild(sharesBox);

        var sharesBtn = document.createElement('button');
        sharesBtn.setAttribute('class', 'settingsBtn');
        sharesBtn.innerHTML = txt[3];
        sharesBtn.onclick = submitShares;
        containerbox.appendChild(sharesBtn);

        function submitShares() {
            sharesValue = sharesBox.value;
            sharesDiv.innerHTML = '</br>' + '</br>' + '<div>' + txt[1] + sharesValue + currency + '</div>';
        }
    }
    //----------------------------------------------------------------------------------------------

    function createCommunity() {
        communityDiv = document.createElement('div');
        communityDiv.className = 'infoDiv';
        communityDiv.innerHTML = '</br>' + '</br>' + '<div>' + txt[2] + communityValue + currency + '</div>';
        containerbox.appendChild(communityDiv);
        
        var communityBox = document.createElement('input');
        communityBox.setAttribute('class', 'settingsInput');
        communityBox.setAttribute('type', 'number');
        containerbox.appendChild(communityBox);

        var communityBtn = document.createElement('button');
        communityBtn.setAttribute('class', 'settingsBtn');
        communityBtn.innerHTML = txt[3];
        communityBtn.onclick = submitCommunity;
        containerbox.appendChild(communityBtn);

        function submitCommunity() {
            communityValue = communityBox.value;
            communityDiv.innerHTML = '</br>' + '</br>' + '<div>' + txt[2] + communityValue + currency + '</div>';
        }
    }
    //-----------------------------------------------------------------------------------------------

    function createToLend() {
        toLendDiv = document.createElement('div');
        toLendDiv.className = 'infoDiv';
        toLendDiv.innerHTML = '</br>' + '</br>' + '<div>' + txt[4] + toLend + '</div>';
        containerbox.appendChild(toLendDiv);

        var toLendBox = document.createElement('input');
        toLendBox.setAttribute('class', 'settingsInput');
        toLendBox.setAttribute('type', 'number');
        containerbox.appendChild(toLendBox);

        var toLendBtn = document.createElement('button');
        toLendBtn.setAttribute('class', 'settingsBtn');
        toLendBtn.innerHTML = txt[3];
        toLendBtn.onclick = submitToLend;
        containerbox.appendChild(toLendBtn);

        function submitToLend() {
            toLend = toLendBox.value;
            toLendDiv.innerHTML = '</br>' + '</br>' + '<div>' + txt[4] + toLend + '</div>';
        }
    }
}