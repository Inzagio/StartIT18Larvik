var graph;

var time;
var person;
var Januar = 510;
var Februar = 510;
var Mars = 510;
var April = 510;
var Mai = 510;
var Juni = 510;
var Januar1 = 510;
var Februar1 = 510;
var Mars1 = 510;
var April1 = 510;
var Mai1 = 510;
var Juni1 = 510;


function grap_draw() {

   var containerbox = document.getElementById('contentbox');
    containerbox.innerHTML = '<div class="Graphnested">'
         +  '<div>Year'
         +  '<select onchange="start()" title="Displays years." size="1" name="time" id="dropList" required>'
         +          '<option value="2018">2018</option>'
         +          '<option value="2019">2019</option>'
         +           '<option value="2020">2020</option>'
         +           '<option value="2021">2021</option>'
         +           '<option value="2022">2022</option>'
         +           '<option value="2023">2023</option>'
         +       '</select>'
         +   '</div>'
         +   '<div>Person'
         +   '<select onchange="start()" title="Displays all members of the VICOBA - Select one or all." size="1" name="persons" id="dropList2" required>'
         +           '<option value="all">All</option>'
         +           '<option value="aadila">Aadila</option>'
         +           '<option value="abdul">Abdul</option>'
         +           '<option value="ambokile">Ambokile</option>'
         +           '<option value="godfrey">Godfrey</option>'
         +       '</select>'
         +   '</div>'
         +   '<div>'
         +       'Social'
         +   '<input onclick="start()" onchange="start()" title="" type="number" id="chkBox1" name="social" value="0" min="0" max="100" />'
         +   '</div>'
         +   '<div>'
         +       'Shares'
         +   '<input title="" type="checkbox" id="chkBox2" name="social" value="1" />'
         +   '</div>'
         +   '<div>...........'
         +   '<input title="" type="checkbox" id="chkBox3" name="social" value="1" />'
         +   '</div>'
         +  '<div>...........'
         +   '<input title="" type="checkbox" id="chkBox4" name="social" value="1" />'
         +    '</div>'
         + '</div>'

        + '<div id="graph">'
        + '<svg onclick="start()" id="graf" class="Graph" width="605" height="540">'
        + '<text x="280" y="530" fill="black" transform="rotate(0 0,0)">Time</text>'
        + '<text x="17" y="15" fill="black" transform="rotate(0 0,0)">100</text>'
        + '<text x="25" y="115" fill="black" transform="rotate(0 0,0)">80</text>'
        + '<text x="25" y="215" fill="black" transform="rotate(0 0,0)">60</text>'
        + '<text x="25" y="315" fill="black" transform="rotate(0 0,0)">40</text>'
        + '<text x="25" y="415" fill="black" transform="rotate(0 0,0)">20</text>'
        + '<text x="32" y="515" fill="black" transform="rotate(0 0,0)">0</text>'

        + '<g class="grid" id="xGrid">'
        + '<line x1 ="50" x2="50" y1 ="10" y2="510"></line >'
        + '<line x1="150" x2="150" y1="10" y2="510"></line>'
        + '<line x1="250" x2="250" y1="10" y2="510"></line>'
        + '<line x1="350" x2="350" y1="10" y2="510"></line>'
        + '<line x1="450" x2="450" y1="10" y2="510"></line>'
        + '<line x1="550" x2="550" y1="10" y2="510"></line>'
        + '</g>'

        + '<g class="grid" id="yGrid">'
        + '<line x1="50" x2="550" y1="10" y2="10"></line>'
        + '<line x1="50" x2="550" y1="110" y2="110"></line>'
        + '<line x1="50" x2="550" y1="210" y2="210"></line>'
        + '<line x1="50" x2="550" y1="310" y2="310"></line>'
        + '<line x1="50" x2="550" y1="410" y2="410"></line>'
        + '<line x1="50" x2="550" y1="510" y2="510"></line>'
        + '</g>'
        + '</div>'
}



function start() {
    graph = document.getElementById('graph');
    console.log(graph);
    time = document.getElementById('dropList').value;
    person = document.getElementById('dropList2').value;
    if (person === 'all') {
        if (parseInt(time) === 2018)
            Januar = document.getElementById('chkBox1').value * -5 + 510;
        else if (parseInt(time) === 2019)
            Februar = document.getElementById('chkBox1').value * -5 + 510;
        else if (parseInt(time) === 2020)
            Mars = document.getElementById('chkBox1').value * -5 + 510;
        else if (parseInt(time) === 2021)
            April = document.getElementById('chkBox1').value * -5 + 510;
        else if (parseInt(time) === 2022)
            Mai = document.getElementById('chkBox1').value * -5 + 510;
        else if (parseInt(time) === 2023)
            Juni = document.getElementById('chkBox1').value * -5 + 510;
    }
    if (person === 'aadila') {
        if (parseInt(time) === 2018)
            Januar1 = document.getElementById('chkBox1').value * -5 + 510;
        else if (parseInt(time) === 2019)
            Februar1 = document.getElementById('chkBox1').value * -5 + 510;
        else if (parseInt(time) === 2020)
            Mars1 = document.getElementById('chkBox1').value * -5 + 510;
        else if (parseInt(time) === 2021)
            April1 = document.getElementById('chkBox1').value * -5 + 510;
        else if (parseInt(time) === 2022)
            Mai1 = document.getElementById('chkBox1').value * -5 + 510;
        else if (parseInt(time) === 2023)
            Juni1 = document.getElementById('chkBox1').value * -5 + 510;
    }

    graph.innerHTML = '<svg id="graf" class="Graph" width="605" height="540">'
        + '<text x="280" y="530" fill="black" transform="rotate(0 0,0)">Time</text>'
        + '<text x="17" y="15" fill="black" transform="rotate(0 0,0)">100</text>'
        + '<text x="25" y="115" fill="black" transform="rotate(0 0,0)">80</text>'
        + '<text x="25" y="215" fill="black" transform="rotate(0 0,0)">60</text>'
        + '<text x="25" y="315" fill="black" transform="rotate(0 0,0)">40</text>'
        + '<text x="25" y="415" fill="black" transform="rotate(0 0,0)">20</text>'
        + '<text x="32" y="515" fill="black" transform="rotate(0 0,0)">0</text>'

        + '<g class="grid" id="xGrid">'
        + '<line x1 ="50" x2="50" y1 ="10" y2="510"></line >'
        + '<line x1="150" x2="150" y1="10" y2="510"></line>'
        + '<line x1="250" x2="250" y1="10" y2="510"></line>'
        + '<line x1="350" x2="350" y1="10" y2="510"></line>'
        + '<line x1="450" x2="450" y1="10" y2="510"></line>'
        + '<line x1="550" x2="550" y1="10" y2="510"></line>'
        + '</g>'

        + '<g class="grid" id="yGrid">'
        + '<line x1="50" x2="550" y1="10" y2="10"></line>'
        + '<line x1="50" x2="550" y1="110" y2="110"></line>'
        + '<line x1="50" x2="550" y1="210" y2="210"></line>'
        + '<line x1="50" x2="550" y1="310" y2="310"></line>'
        + '<line x1="50" x2="550" y1="410" y2="410"></line>'
        + '<line x1="50" x2="550" y1="510" y2="510"></line>'
        + '</g>'


    var graf = document.getElementById('graf');
    if (person === 'all') {
        console.log(graf);
        graf.innerHTML += '<g class="Info">'
            + '<circle onclick="start()" cx="50" cy="' + Januar + '" r="5"></circle>'
            + '<circle cx="150" cy="' + Februar + '" r="5"></circle>'
            + '<circle cx="250" cy="' + Mars + '" r="5"></circle>'
            + '<circle cx="350" cy="' + April + '" r="5"></circle>'
            + '<circle cx="450" cy="' + Mai + '" r="5"></circle>'
            + '<circle cx="550" cy="' + Juni + '" r="5"></circle>'
            + '<line x1="50" x2="150" y1="' + Januar + '" y2="' + Februar + '"></line>'
            + '<line x1="150" x2="250" y1="' + Februar + '" y2="' + Mars + '"></line>'
            + '<line x1="250" x2="350" y1="' + Mars + '" y2="' + April + '"></line>'
            + '<line x1="350" x2="450" y1="' + April + '" y2="' + Mai + '"></line>'
            + '<line x1="450" x2="550" y1="' + Mai + '" y2="' + Juni + '"></line>'
            + '</g>'
    }
    if (person === 'aadila') {
        graf.innerHTML += '<g class="Info">'
            + '<circle onclick="start()" cx="50" cy="' + Januar1 + '" r="5"></circle>'
            + '<circle cx="150" cy="' + Februar1 + '" r="5"></circle>'
            + '<circle cx="250" cy="' + Mars1 + '" r="5"></circle>'
            + '<circle cx="350" cy="' + April1 + '" r="5"></circle>'
            + '<circle cx="450" cy="' + Mai1 + '" r="5"></circle>'
            + '<circle cx="550" cy="' + Juni1 + '" r="5"></circle>'
            + '<line x1="50" x2="150" y1="' + Januar1 + '" y2="' + Februar1 + '"></line>'
            + '<line x1="150" x2="250" y1="' + Februar1 + '" y2="' + Mars1 + '"></line>'
            + '<line x1="250" x2="350" y1="' + Mars1 + '" y2="' + April1 + '"></line>'
            + '<line x1="350" x2="450" y1="' + April1 + '" y2="' + Mai1 + '"></line>'
            + '<line x1="450" x2="550" y1="' + Mai1 + '" y2="' + Juni1 + '"></line>'
            + '</g>'
    }
}
