			function registerTransaction() { // Creates container element if it has been removed.
			var container = document.getElementById('container');
			if (!container) {
			 container = createContainer();
		}

			menu.setBreadcrumbs('Register Transactions');
			container.innerHTML =
				'<div class="grid wrapper">' +
				'<div class="box nm">' +
				'<div class="box nameBox" id="nameBox"></div>' +
				'</div>' +
				'<div class="box choosedate">Choose date:</div>' +
				'<div class="box dato">' +
				'<form>' +
				'<input id="calendar" type="date" name="chooseday">' +
				'</form>' +
				'</div>' +
				'<div class="box meny">' +
				'<div class="dropdown">' +
				'<button class="dropbtn"> Name </button>' +
				'<div id="nameDropdown" class="dropdown-content">' +
				'<input type="text" placeholder="Search name" id="nameInput" onkeyup="filter()">' +
				'<a onclick="putName(this)"> Abdi </a>' +
				'<a onclick="putName(this)"> Hasan </a>' +
				'<a onclick="putName(this)"> Mohamed </a> ' +
				'<a onclick="putName(this)"> Li </a>' +
				'<a onclick="putName(this)"> Zainah </a>' +
				'</div> ' +
				'</div>' +
				'</div>' +
				'<div class="box a"> ' +
				'<label class="switch"> ' +
				'<input id="socialCheck" type="checkbox">' +
				'<span class="slider round"></span>' +
				'</label>' +
				'<div id="paidText">' + 'Paid social ' +'</div>'+
				'</div>' +
				'<div class="box b">' +
				'<input id="sharesBought" type="number" placeholder="Buy Shares" min="0" max="100"> <!--Buy shares max 100?-->' +
				'</div>' +
				'<div class="box c"> ' +
				'<p>Loan out of social funds:</p>' +
				'</div>' +
				'<div class="box d">' +
				'<input id="socialLoan" type="number" oninput="alertMaxInput(this)" placeholder="Loan from Social Funds" min="0" max="100"> <!---max aviable funds(input from DB put 100 as dummy-->' +
				'<br /> ' +
				'</div> ' +
				'<div class="box e">' +
				'<p>Loan out of Shares funds:</p>' +
				'</div>' +
				'<div class="box f">' +
				'<input id="sharesLoan" type="number" oninput="alertMaxInput(this)" placeholder="Loan from Share Funds" min="0" max="100"> <!---max aviable funds(input from DB put 100 as dummy--> ' +
				'</div>' +
				'<div class="box submit"> ' +
				'<input id="submit" type="submit" value="Submit to FirestoreDatabase" onclick="submit()"> ' +
				'<button onclick="showArray()">see array in console</button>' +
				'</div>' +
				'</div>';
				 setDateToday();  
		}
	
			var nameDrop = document.getElementById("nameDropdown");

			function filter() {
				var input = document.getElementById("nameInput");
				var filter = input.value.toUpperCase();
				var a = nameDropdown.getElementsByTagName("a");
				var i;

			for (i = 0; i < a.length; i++) {
				if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
					a[i].style.display = "";
			}
				else {a[i].style.display = "none";}
			}
		}

			function putName(a) {
				nameBox.innerHTML = a.innerHTML;
				nameBox.classList.remove('alertText');
			}

			function alertMaxInput(inputValue) {
				if (inputValue.value >= 100) { //Put 100 as dummy. Real number pulled from DB later
				alert('This is all that´s aviable for loans at the moment');
				inputValue.value = 100; //Sets value to max aviable if more than that is chosen
				}
			}

			// Calendar with choosable date - todays date set as standard - 
			function setDateToday() {
				var n = new Date();
				var y = n.getFullYear();
				var m = n.getMonth() + 1;
				var d = n.getDate();
				if (m < 10) m = '0' + m;
			    if (d < 10) m = '0' + d;
			document.getElementById("calendar").value = y + "-" + m + "-" + d;
			}

			var valueNotEmpty = '';
			function valueCheck() { //Show a text if name is not chosen
				if (nameBox.innerHTML == '') {
				nameBox.classList.add('alertText');
				nameBox.innerHTML = 'Choose name';
				valueNotEmpty = false;
			};
				if (!socialCheck.checked) { //show a text if social is not checked
				paidText.classList.add('alertText');
				paidText.innerHTML = 'Pay Social';
				valueNotEmpty = false;
			}
				else{
				paidText.classList.remove('alertText');
				paidText.classList.add('okText');
				paidText.innerHTML = 'Paid Social';
				valueNotEmpty = true;
				return valueNotEmpty;
			}
		}	

	
			function submit(){  //grab values from inputs
				let Name = nameBox.innerHTML;
				let PaidSocial = socialCheck.checked;
				let SharesBougth =  sharesBought.value;
				let LoanFromSocial = socialLoan.value;
				let LoanFromShares = sharesLoan.value;
				addToFirestore(Date, Name, PaidSocial, SharesBougth, LoanFromSocial, LoanFromShares );
				}

			function addToFirestore(Date, Name, PaidSocial, SharesBougth, LoanFromSocial, LoanFromShares  ){
				let newInput =
					{
					 Date: calendar.value,
					 Name: Name ,
					 PaidSocial: PaidSocial ,
					 SharesBougth: SharesBougth,
					 LoanFromSocial: LoanFromSocial,
					 LoanFromShares: LoanFromShares
					 };	
					  valueCheck();
					if (valueNotEmpty){db.add(newInput)}; 
			}

		    function showArray() {
					db.get().then((show) => { 
					show.forEach((person) => {
					console.log(person.data());
					})
				})
			}
