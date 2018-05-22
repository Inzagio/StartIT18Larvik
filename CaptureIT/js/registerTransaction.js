


function registerTransaction() {
    // Creates container element if it has been removed.
    var container = document.getElementById('container');
    if (!container) {
        container = createContainer();
        
    }

    menu.setBreadcrumbs('Register Transactions');
    container.innerHTML =
        '<div class="grid wrapper">' +
        '<div class="box nm">' +
        '<p class="box nameBox" id="nameBox"></p>' +
        '</div>' +
        '<div class="box choosedate">Choose date:</div>' +
        '<div class="box dato">' +
        ' <form>' +
        ' <input id="calendar" type="date" name="chooseday">' +
        ' </form>' +
        '</div>' +
        '<div class="box meny">' +
        ' <div class="dropdown">' +
        ' <button onclick="showNameList()" class="dropbtn"> Name </button>' +
        ' <div id="nameDropdown" class="dropdown-content">' +
        ' <input type="text" placeholder="Search name" id="nameInput" onkeyup="filter()">' +
        ' <a onclick="putName(this)"> Abdi </a>' +
        ' <a onclick="putName(this)"> Hasan </a>' +
        ' <a onclick="putName(this)"> Mohamed </a> ' +
        '<a onclick="putName(this)"> Li </a>' +
		'<a onclick="putName(this)"> Zainah </a>' +
        '</div> ' +

        ' </div>' +
        '</div>' +
        '<div class="box a"> ' +
        '<label class="switch"> '+ 
        '<input id="socialCheck" type="checkbox">'+
        '<span class="slider round"></span>'+
        '</label>'+ 
        ' Paid social ' +
        '</div>' +

        '<div class="box b">' +
        ' <input id="sharesBought" type="number" placeholder="Buy Shares" min="0" max="100"> <!--Buy shares max 100?-->' +
        '</div> ' +
        '<div class="box c"> ' +
        ' <p>Loan out of social funds:</p>' +
        '</div>' +
        ' <div class="box d">' +
        '<input id="socialLoan" type="number" oninput="alertMaxInput(this)" placeholder="Loan from Social Funds" min="0" max="100"> <!---max aviable funds(input from DB put 100 as dummy-->' +
        ' <br /> ' +

        ' </div> ' +
        ' <div class="box e">' +
        ' <p>Loan out of Shares funds:</p>' +
        ' </div>' +

        ' <div class="box f"> ' +
        ' <input id="sharesLoan" type="number" oninput="alertMaxInput(this)" placeholder="Loan from Share Funds" min="0" max="100"> <!---max aviable funds(input from DB put 100 as dummy--> ' +
        '</div> ' +
        ' <div class="box submit"> ' +
        ' <input id="submit" type="submit" value="Send Data to Array" onclick="sendToArray()"> ' +
		' <button onclick="showArray()">see array in console</button>' +
        '</div> ' +
        ' </div>';

        var globalArray = [
            nameBox = document.getElementById("nameBox"),
            nameDrop = document.getElementById("nameDropdown"),
            socialCheck = document.getElementById('socialCheck'),
            sharesBought = document.getElementById("sharesBought"),
            socialLoan = document.getElementById('socialLoan'),
            sharesLoan = document.getElementById('sharesLoan'),
          ];

    setDateToday();
}


var personData = [];



function showNameList() {
    document.getElementById("nameDropdown").classList.toggle("show");
}

function filter() {

    var input, filter, ul, li, a, i;

    input = document.getElementById("nameInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("nameDropdown");
    a = div.getElementsByTagName("a");



    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        }

        else {
            a[i].style.display = "none";
        }
    }
}

function putName(a) {
    nameBox.innerHTML = a.innerHTML;
}


function alertMaxInput(inputValue) {
    if (inputValue.value >= 100) { //Put 100 as dummy. Real number pulled from DB later
        alert('This is all that´s aviable for loans at the moment');
        inputValue.value = 100; //Sets value to max aviable if more than that is chosen
    }
}



// Calendar with choosable date - todays date set as standard - 
  function setDateToday(){
    var n = new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    if (m < 10) m = '0' + m;
    if (d < 10) m = '0' + d;
    document.getElementById("calendar").value = y + "-" + m + "-" + d;
}

	
function sendToArray(){
		 var newInput = {
         Date: calendar.value,
         Name: nameBox.innerHTML,  
		 PaidSocial: socialCheck.checked,
         SharesBougth: sharesBought.value,

        
         LoanFromSocial: socialLoan.value,
         LoanFromShares: sharesLoan.value
  
         };
		 personData.push(newInput);
         }

       function showArray(){
       console.log(personData);
        }	

