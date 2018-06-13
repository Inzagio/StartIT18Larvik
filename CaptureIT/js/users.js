

function draw_users() {
    var contentreset = document.getElementById('contentbox');
    contentreset.innerHTML = '';
    if(contentreset.innerHTML != ''){contentreset.innerHTML = '';}
    var tableTitle = document.createElement('tr');
    var tabledivcheck = document.getElementsByTagName('table')

    tableDiv.setAttribute('id', 'table');
    tableDiv.appendChild(table);
    table.setAttribute('id', 'table-div');

    table.appendChild(tableTitle);

    // user search
    var searchInput = document.createElement('input')
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('onkeyup', 'searchUsers(this)');
    searchInput.setAttribute('placeholder', 'Ola Normann');
    searchInput.setAttribute('id', 'search');


    // something
    var usersContentbox = document.getElementById('contentbox');

    // html gets created
    tableDiv.appendChild(searchInput);
    contentbox.appendChild(tableDiv);
    if(tabledivcheck != null) {

    } else {

    }

    listUsers();


    function searchUsers(searchValue) {
        var search = searchValue.value.toLowerCase();

        var filteredUsers = users.filter(
            function (user) {
                return user.toLowerCase().startsWith(search);
            }
        );

        /*
        var html = '<ul>';
        for(var i = 0; i < users.length; i++){
            if(users[i].toLowerCase().startsWith(search)){
                html += '<li>' + users[i] + '</li>';
            }

        }
        html += '</ul>';
        */

        var html = users.reduce(
            function (html, user){
                html += '<li>' + users + '</li>';
            }

        );
        document.getElementsByTagName('body').innerHTML += html;
        console.log(filteredUsers);
    }


    function listUsers() {
        users.forEach(function createRow(user){
            var tr = document.createElement('tr');
            table.appendChild(tr);
            tr.innerHTML += user;
        });
    }


}
