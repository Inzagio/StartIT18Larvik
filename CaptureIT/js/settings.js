//JavaScript source code

'use strict'

function drawSettings() {
    var containerbox = document.getElementById('contentbox');
    containerbox.innerHTML = '';

    var htm = ['<div>', '</div>' , 'Currency: ', ];

    var infoDiv1 = document.createElement('div');
    infoDiv1.className = 'infoDiv';
    containerbox.appendChild(infoDiv1);
    infoDiv1.innerHTML = htm[0] + htm[2] + currency + htm[1];

    createList();

    var infoDiv2 = document.createElement('div');
    infoDiv2.innerHTML += '<div>Choose value of shares<div>';

    //createShares();

    var infoDiv3 = document.createElement('div');
    infoDiv2.innerHTML += '<div>Choose obligatory amount for community saving<div>';

    //createCommunity();

    function createList() {
        var containerbox = document.getElementById('contentbox');
        var selectList = document.createElement('select');
        selectList.setAttribute('id', 'selectCurrencyTag');
    
        containerbox.appendChild(selectList);
        selectList.onchange = changeCurrency;
   
        var options = ['GBP', 'NOK', 'MWK', 'TZS', 'USD'];
        
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

        //Changing the currency global variable and currency selected
        function changeCurrency() {
            var selectList = document.getElementById('selectCurrencyTag');
            currency = selectList.value;
            infoDiv1.innerHTML = htm[0] + htm[2] + currency + htm[1];

            //drawSettings();
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
//         +           '<option value="GBP">Brittish Pund (£)</option>'
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

