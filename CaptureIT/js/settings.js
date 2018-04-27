//JavaScript source code

'use strict'

function drawSettings() {
    var containerbox = document.getElementById('contentbox');
    containerbox.innerHTML = '';

    var htm = ['<div>', '</div>' , 'Currency: ', '<br/>'];
    var txt = ['Currency: ', 'Shares value: ', 'Minimum savings: ', 'Save', 'Max Loan (times saved amount) ']

    var infoDiv1 = document.createElement('div');
    infoDiv1.className = 'infoDiv';
    containerbox.appendChild(infoDiv1);
    infoDiv1.innerHTML = htm[3] + htm[3] + htm[0] + txt[0] + currency + htm[1];

    createList();

    var infoDiv2 = document.createElement('div');
    infoDiv2.className = 'infoDiv';
    containerbox.appendChild(infoDiv2);
    infoDiv2.innerHTML = htm[3] + htm[3] + htm[0] + txt[1] + sharesValue + currency + htm[1];

    createShares();

    var infoDiv3 = document.createElement('div');
    infoDiv3.className = 'infoDiv';
    containerbox.appendChild(infoDiv3);
    infoDiv3.innerHTML = htm[3] + htm[3] + htm[0] + txt[2] + communityValue + currency + htm[1];

    createCommunity();

    var infoDiv4 = document.createElement('div');
    infoDiv4.className = 'infoDiv';
    containerbox.appendChild(infoDiv4);
    infoDiv4.innerHTML = htm[3] + htm[3] + htm[0] + txt[4] + toLend + currency + htm[1];

    createToLend();

    function createList() {
        var containerbox = document.getElementById('contentbox');
        var selectList = document.createElement('select');
        selectList.setAttribute('id', 'selectCurrencyTag');
    
        containerbox.appendChild(selectList);
        selectList.onchange = changeCurrency;
        

        var options = ['GBP', 'NOK', 'MWK', 'TZS', 'USD', currency[0]];
        
        //populating the select-list
        var optgroup =  document.createElement('optgroup');
            optgroup.setAttribute('label', 'Currency');

        options.forEach(function (option) {
            var optionSelect = document.createElement('option');
            //optionSelect.setAttribute('class', 'currency');
            selectList.appendChild(optionSelect);
            optionSelect.innerHTML += option;
            optionSelect.value = option;
        });

        selectList.value = 'TZS';
        
        //Changing the currency global variable and currency selected
        function changeCurrency() {
            var selectList = document.getElementById('selectCurrencyTag');
            currency = selectList.value;
            infoDiv1.innerHTML = htm[3] + htm[3] + htm[0] + txt[0] + currency + htm[1];
            infoDiv2.innerHTML = htm[3] + htm[3] + htm[0] + txt[1] + sharesValue + currency + htm[1];
            infoDiv3.innerHTML = htm[3] + htm[3] + htm[0] + txt[2] + communityValue + currency + htm[1];

            //drawSettings();
        }
    
    }
    function createShares() {
        var containerbox = document.getElementById('contentbox');
        
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
            infoDiv4.innerHTML = htm[3] + htm[3] + htm[0] + txt[4] + sharesValue + currency + htm[1];
        }
    }

    function createCommunity() {
        var containerbox = document.getElementById('contentbox');

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
            infoDiv3.innerHTML = htm[3] + htm[3] + htm[0] + txt[1] + communityValue + currency + htm[1];
        }
    }

    function createToLend() {
        var containerbox = document.getElementById('contentbox');

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
            infoDiv4.innerHTML = htm[3] + htm[3] + htm[0] + txt[1] + toLend + currency + htm[1];
        }
    }
}

//    containerbox.innerHTML = '<div class="settingsNested">'
//   
//         +  '<div>Currency'
//         +  '<select onchange="start()" title="Displays avalible currencies" size="1" name="currency" id="currencyList" required>'
//         +          '<option value="USD">US Dollars ($)</option>'
//         +          '<option value="TZS">Tanzanian Shilling (Tsh)</option>'
//         +           '<option value="NOK">Norwegian Kroner (kr)</option>'
//         +           '<option value="MWK">Malawian kwacha (MK)</option>'
//         +           '<option value="GBP">Brittish Pound (£)</option>'
//         +       '</select>'
//         +   '</div>'

//function setAttributes(el, attrs) {
//    for(var key in attrs) {
//      el.setAttribute(key, attrs[key]);
//    }
//  }

// function createShares() {
//     var containerbox = document.getElementById('contentbox');
//     var inputSharesValue = document.createElement('input');

//     containerbox.appendChild(selectList, inputSharesValue);
//     selectList.setAttribute('onchange', 'changeCurrency(this)');


//     var options = ['GBP', 'NOK', 'MWK', 'TZS', 'USD'];

//     options.forEach(function (options) {
//         var optionsSelect = document.createElement('option');
//         optionsSelect.setAttribute('class', 'currency');
//         selectList.appendChild(optionsSelect);
//         optionsSelect.innerHTML += options;
//     });

//     function changeCurrency(currency) {
//         console.log(tag);
//         var containerbox = document.getElementById('contentbox');
//         var disp = document.createElement('div');
//         containerbox.appendChild(disp);
//         disp.innerHTML = currency;
//     }

// }

// function createCommunity() {
//     var containerbox = document.getElementById('contentbox');
//     var inputCommunitySavings = document.createElement('input');

//     containerbox.appendChild(selectList, inputSharesValue);
//     selectList.setAttribute('onchange', 'changeCurrency(this)');


//     var options = ['GBP', 'NOK', 'MWK', 'TZS', 'USD'];

//     options.forEach(function (options) {
//         var optionsSelect = document.createElement('option');
//         optionsSelect.setAttribute('class', 'currency');
//         selectList.appendChild(optionsSelect);
//         optionsSelect.innerHTML += options;
//     });

//     function changeCurrency(currency) {
//         console.log(tag);
//         var containerbox = document.getElementById('contentbox');
//         var disp = document.createElement('div');
//         containerbox.appendChild(disp);
//         disp.innerHTML = currency;
//     }

// }

