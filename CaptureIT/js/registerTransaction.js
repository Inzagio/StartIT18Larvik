  var navnBoks = document.getElementById("navnBoks");

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
        n = new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        if (m < 10) m = '0' + m;
        if (d < 10) m = '0' + d;
        document.getElementById("kalender").value = y + "-" + m + "-" + d;
        
