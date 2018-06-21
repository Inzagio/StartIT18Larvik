

var Graph;
var graphAddPerson;
var graphData;
function graphDrawChooser() {
    var html = document.getElementById('dynamicContentArea');
    html.innerHTML =
        '<select class="graphCSS" id="graphSelect">'
        + '<option value="ALL">All</option>'
        + '</select>'
        + '<button id="button" onclick="graphAdd()">Add</button>'
        + '<button onclick="graphRemoveData()">Remove</button>'
        + '<select onchange="graphPushLable()" id="graphSelectLength"></select>';
   
    if ($(window).width() < 650) {
        html.innerHTML += '<canvas height="100%" width="100%" id="myChart"></canvas>';
    }
    else {
        html.innerHTML += '<canvas id="myChart"></canvas>';
    }
    for (let i = 1; i <= 52; i++)
        document.getElementById('graphSelectLength').innerHTML += '<option value="' + i + '">' + i + ' Weeks</option>'
    document.getElementById("button").disabled = "true";
    dbUsers.get().then(function (querySnapshot) {
        let i = 1;
        querySnapshot.forEach(function (doc) {
            document.getElementById('graphSelect').innerHTML += '<option value="' + i + '">' + doc.data().Username + '</option>'
            i++
        });
    });
    drawGraph();
}

function drawGraph() {
    let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    Graph = new Chart(myChart, {
        type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ['1', '2'],
            datasets: [{
                label: 'All',
                data: [

                ],
                backgroundColor: [
                    'black'
                ],
                borderWidth: 3,
                fill: false,
                borderColor: 'black',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        },
        options: {
            Configuration: {
                responsive: true,
                maintainAspectRatio: true
            },
            title: {
                display: true,

                fontSize: 25
            },
            legend: {
                display: false,
                position: 'right',
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
            tooltips: {
                enabled: true
            }
        }
    });

    document.getElementById("button").disabled = false;
}

function graphPushLable(tag) {
    for (let i = 0; i < 52; i++)
        Graph.data.labels[i] = (i + 1);
    for (let i = 52; i > document.getElementById('graphSelectLength').value; i--)
        Graph.data.labels.pop();
    
    graphPushAll();
}

function graphPushAll() {
    for (let i = 1; i < Graph.data.datasets.length; i++) {
        for (let x = 0; x < Graph.data.labels.length; x++) {
            if (Graph.data.datasets[0].data[x] === undefined || Graph.data.datasets[0].data[x] === NaN || i === 1)
                Graph.data.datasets[0].data[x] = Graph.data.datasets[i].data[x];
            else if (Graph.data.datasets[i].data[x] === undefined) { }
            else Graph.data.datasets[0].data[x] += Graph.data.datasets[i].data[x];
        }
    }
    Graph.update();
}

function graphAddData() {
    if (document.getElementById('graphSelect').value === 'ALL')
        for (let i = 1; i < graphData.length; i++) {
            graphAddPerson = i;
            dbUsers.doc(graphData[i]).get().then(function (doc) {
                var newDataset = {
                    label: doc.data().Username,
                    data: [],
                    backgroundColor: ['rgba(255, 99, 132, 0.6)'],
                    borderWidth: 3,
                    borderColor: '#777',
                    fill: false,
                    hoverBorderWidth: 3,
                    hoverBorderColor: '#000'
                }
                for (let i = 0; i < doc.data().WeekData.length; i++)
                    newDataset.data.push(doc.data().WeekData[i]);
                Graph.data.datasets[i] = newDataset;
                graphPushAll();
            });
        }
    else {
    graphAddPerson = document.getElementById('graphSelect').value;
        dbUsers.doc(graphData[graphAddPerson]).get().then(function (doc) {
            var newDataset = {
                label: doc.data().label,
                data: [],
                backgroundColor: ['rgba(255, 99, 132, 0.6)'],
                borderWidth: 3,
                borderColor: '#777',
                fill: false,
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }
            for (let i = 0; i < doc.data().WeekData.length; i++)
                newDataset.data.push(doc.data().WeekData[i]);
            Graph.data.datasets[graphAddPerson] = newDataset;
            graphPushAll();
        });
    }
}

function graphAdd() {
    document.getElementById("button").disabled = "true";
    setTimeout(function () { document.getElementById("button").disabled = false; }, 400);
    graphData = [0];
    dbUsers.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            graphData.push(doc.id);
        });
            graphAddData();
    })

}

function graphRemoveData() {
    let Gra = document.getElementById('graphSelect').value;
    if (Gra === 'ALL')
        for (let i = 1; i < Graph.data.datasets.length; i++)
        Graph.data.datasets.splice(i, 1, {});
    else
        Graph.data.datasets.splice(Gra, 1, {});
    Graph.update();
    graphPushAll();
}
