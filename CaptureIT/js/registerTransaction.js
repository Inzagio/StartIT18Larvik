 


			function registerTransaction(){
				document.getElementById('container').innerHTML = 
				 '<div class="grid wrapper">' +
            '<div class="box nm">'+
            '<p class="box navnBoks" id="navnBoks"></p>'+
        '</div>'+
         '<div class="box choosedate">Choose date:</div>'+
        '<div class="box dato">'+
           ' <form>'+
               ' <input id="kalender" type="date" name="chooseday">'+
           ' </form>'+
        '</div>'+
        '<div class="box meny">'+
           ' <div class="dropdown">'+
               ' <button onclick="showNameList()" class="dropbtn"> Name </button>'+
               ' <div id="nameDropdown" class="dropdown-content">'+
                   ' <input type="text" placeholder="Search name" id="nameInput" onkeyup="filter()">'+
                   ' <a onclick="settNavn(this)"> Abdi </a>'+
                   ' <a onclick="settNavn(this)"> Hasan </a>'+
                   ' <a onclick="settNavn(this)"> Mohamed </a> '+
                    '<a onclick="settNavn(this)"> Li </a>'+
                '</div> '+

           ' </div>'+
       '</div>'+
        '<div class="box a"> '+
            '<input id="socialCheck" type="checkbox"> Paid social '+
        '</div>'+

        '<div class="box b">'+
           ' <input id="sharesBought" onload="sharesBought(this)" type="number" placeholder="Buy Shares" min="0" max="100"> <!--Buy shares max 100?-->'+
        '</div> '+
        '<div class="box c"> '+
           ' <p>Loan out of social funds:</p>'+
        '</div>'+
       ' <div class="box d">'+
            '<input id="socialLoan" type="number" oninput="alertMaxInput(this)" placeholder="Loan from Social Funds" min="0" max="100"> <!---max aviable funds(input from DB put 100 as dummy-->'+
           ' <br /> '+

       ' </div> '+
       ' <div class="box e">'+
           ' <p>Loan out of social funds:</p>'+
       ' </div>'+

       ' <div class="box f"> '+
           ' <input id="sharesLoan" type="number" oninput="alertMaxInput(this)" placeholder="Loan from Share Funds" min="0" max="100"> <!---max aviable funds(input from DB put 100 as dummy--> '+
        '</div> '+
       ' <div class="box submit"> '+
           ' <input id="submit" type="submit" value="Submit" action="send/submit to DB linkage here"> '+
        '</div> '+
   ' </div>';
		
		 var navnBoks = document.getElementById("navnBoks");

   setDateToday();
		}



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

            function settNavn(a) {
                navnBoks.innerHTML = a.innerHTML;
            }


            function alertMaxInput(inputValue) {
                if (inputValue.value >= 100) { //Put 100 as dummy. Real number pulled from DB later.
                    alert('This is all that´s aviable for loans at the moment');
                    inputValue.value = 100; //setter verdien som oversteg til maxbeløp.
                }
            }

            function sharesBought(inputValue) {

                inputValue.value = 0; //starter på null
            }

			
        // Tester dato-sak funkis - skal prøve å få denne kombinert med "kalenderen" så dagens dato blir default value
        function setDateToday(){
        var n = new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        var d = n.getDate();
        if (m < 10) m = '0' + m;
        if (d < 10) m = '0' + d;
        document.getElementById("kalender").value = y + "-" + m + "-" + d;
        }
