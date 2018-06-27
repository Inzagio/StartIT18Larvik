//JavaScript source code

'use strict'
var select;
var lang;

function currencySelector() {
	select = document.getElementById('selectCurrency');
	var options = [' GBP', ' NOK', ' MWK', ' TZS', ' USD'];
        options.forEach(function (option) {
            let optionSelect = document.createElement('option');
            select.appendChild(optionSelect);
            optionSelect.innerHTML += option;
            optionSelect.value = option;
        });
}

function languageSelector() {
	lang = document.getElementById('selectLanguage');
	var options = [' English', ' Norsk', ' Swahili', ' French'];
        options.forEach(function (option) {
            let optionSelect = document.createElement('option');
            lang.appendChild(optionSelect);
            optionSelect.innerHTML += option;
            optionSelect.value = option;
        });
	

}

function changeLanguage() {
	lang = document.getElementById('selectLanguage');
	var languageLabel = document.getElementById('languageLabel');
	language = lang.value;
	languageLabel.innerHTML = 'Language' + language;
}  

function changeCurrency() {
	select = document.getElementById('selectCurrency');
	var currencyLabel = document.getElementById('currencyLabel');
	currency = select.value;
	currencyLabel.innerHTML = 'Currency' + currency;
}

function submitShares() {
	let htmlToCHange = document.getElementById('sharesValueField');
	let valueToSet = document.getElementById('sharesInput');
	communityValue = valueToSet.value;
	htmlToCHange.innerHTML = 'Shares Value: ' + communityValue;
}

function submitCommunity() {
	let htmlToCHange = document.getElementById('communityValueField');
	let valueToSet = document.getElementById('communityInput');
	communityValue = valueToSet.value;
	htmlToCHange.innerHTML = 'Social Payment: ' + communityValue;
}

function submitToLendCommunity() {
	let htmlToCHange = document.getElementById('toLendSocialField');
	let valueToSet = document.getElementById('toLendSocialInput');
	toLendSocial = valueToSet.value;
	htmlToCHange.innerHTML = 'Max Loan from Social: ' + toLendSocial;
}

function submitToLendShares() {
	let htmlToCHange = document.getElementById('toLendSharesField');
	let valueToSet = document.getElementById('toLendSharesInput');
	toLendShares = valueToSet.value;
	htmlToCHange.innerHTML = 'Max Loan from Shares: ' + toLendShares;
}

function drawSettings() {
    //getting contentbox from admin.js and blanking the page
    var settingsHtml = document.getElementById('dynamicContentArea');
	settingsHtml.innerHTML =
	
	//currency
    '<div class="input-group mb-3">'
	+'<div class="input-group-prepend">'
    +'<label class="input-group-text" id="currencyLabel" for="inputGroupSelect01">Currency :' + currency + '</label>'
	+'</div>'
	+'<select class="custom-select" id="selectCurrency" onchange="changeCurrency()">'
	+  '<option selected>Choose currency for vilage</option>'
	+'</select>'
	+'</div>'

	//language
	+'<div class="input-group mb-3">'
	+'<div class="input-group-prepend">'
    +'<label class="input-group-text" id="languageLabel" for="inputGroupSelect01">Language :' + language + '</label>'
	+'</div>'
	+'<select class="custom-select" id="selectLanguage" onchange="changeLanguage()">'
	+  '<option selected>Choose Language</option>'
	+'</select>'
	+'</div>'
	
	//social
    +'<div class="input-group mb-3">'
	+'<div class="input-group-prepend">'
	+  '<span class="input-group-text" id="communityValueField">Social Payment Value: ' + communityValue + '</span>'
	+'</div>'
	+'<input type="number"  id="communityInput" class="form-control" placeholder="input value of social payment" aria-label="Username" aria-describedby="basic-addon1">'
	+'<div class="input-group-append">'
    +'<button class="btn btn-outline-primary" type="button" onclick="submitCommunity()">Submit</button>'
  	+'</div>'
	+'</div>'
	

	//shares
	+'<div class="input-group mb-3">'
	+'<div class="input-group-prepend">'
	+  '<span class="input-group-text" id="sharesValueField">Shares Value:' + sharesValue + '</span>'
	+'</div>'
	+'<input type="number"  id="sharesInput" class="form-control" placeholder="input value of each share" aria-label="Username" aria-describedby="basic-addon1">'
	+'<div class="input-group-append">'
    +'<button class="btn btn-outline-primary" type="button" onclick="submitShares()">Submit</button>'
  	+'</div>'
	+'</div>'
	
	//tolend from social
	+'<div class="input-group mb-3">'
	+'<div class="input-group-prepend">'
	+  '<span class="input-group-text" id="toLendSocialField">Max Loan from Social: ' + toLendSocial + '</span>'
	+'</div>'
	+'<input type="number" id="toLendSocialInput" class="form-control" placeholder="number x saved amount" aria-label="Username" aria-describedby="basic-addon1">'
	+'<div class="input-group-append">'
    +'<button class="btn btn-outline-primary" type="button" onclick="submitToLendCommunity()">Submit</button>'
  	+'</div>'
	+'</div>'
	
	//to lend from shares
	+'<div class="input-group mb-3">'
	+'<div class="input-group-prepend">'
	+  '<span class="input-group-text" id="toLendSharesField">Max Loan from Shares: ' + toLendShares + '</span>'
	+'</div>'
	+'<input type="number" id="toLendSharesInput" class="form-control" placeholder="number x saved amount" aria-label="amount shares" aria-describedby="basic-addon1">'
	+'<div class="input-group-append">'
    +'<button class="btn btn-outline-primary" type="button" onclick="submitToLendShares()">Submit</button>'
  	+'</div>'
	+'</div>';

	currencySelector();
	languageSelector();
}
