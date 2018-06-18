

var Graph;
var graphAddPerson;
var graphData;
function graphDrawChooser() {
    var html = document.getElementById('container');
    console.log(html);
    html.innerHTML =
        '<div class="graphCSS">'
        + '<select class"graphCSS" id="graphSelect">'
        + '<option value="ALL">All</option>'
        + '</select>'
        + '<button onclick="graphAdd()">Add</button>'
        + '<button onclick="graphRemoveData()">Remove</button>'
        + '<canvas id="myChart"></canvas>';
        + '</div>'
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
            labels: ['January'],
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
                    left: 50,
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
    graphPush();
    function graphPush(tag) {
        console.log(Graph.data.datasets[0].data.length);
        Graph.data.labels[1] = ('Febuary');
        Graph.data.labels[2] = ('Marsh');
        Graph.data.labels[3] = ('April');
        Graph.data.labels[4] = ('May');
        Graph.data.labels[5] = ('June');
        Graph.data.labels[6] = ('July');
        Graph.data.labels[7] = ('August');
        Graph.data.labels[8] = ('Septenber');
        Graph.data.labels[9] = ('October');
        Graph.data.labels[10] = ('November');
        Graph.data.labels[11] = ('December');
        Graph.update();
    }
}

function graphPushAll() {
    for (let i = 1; i < Graph.data.datasets.length; i++) {
        for (let x = 0; x < 12; x++) {
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
                    data: [doc.data().January, doc.data().Febuary, doc.data().March, doc.data().April, doc.data().May, doc.data().June,
                    doc.data().July, doc.data().August, doc.data().September, doc.data().October, doc.data().November, doc.data().December],
                    backgroundColor: ['rgba(255, 99, 132, 0.6)'],
                    borderWidth: 3,
                    borderColor: '#777',
                    fill: false,
                    hoverBorderWidth: 3,
                    hoverBorderColor: '#000'
                }
                Graph.data.datasets[i] = newDataset;
                graphPushAll();
            });
        }
    else {
    graphAddPerson = document.getElementById('graphSelect').value;
        dbUsers.doc(graphData[graphAddPerson]).get().then(function (doc) {
        var newDataset = {
            label: doc.data().label,
            data: [doc.data().January, doc.data().Febuary, doc.data().March, doc.data().April, doc.data().May, doc.data().June,
            doc.data().July, doc.data().August, parseInt(doc.data().September), doc.data().October, doc.data().November, doc.data().December],
            backgroundColor: ['rgba(255, 99, 132, 0.6)'],
            borderWidth: 3,
            borderColor: '#777',
            fill: false,
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }
        Graph.data.datasets[graphAddPerson] = newDataset;
        graphPushAll();
    });
    }
}

function graphAdd() {
    graphData = [0];
    dbUsers.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.id);
            graphData.push(doc.id);
        });
            graphAddData();
    })

}

function graphRemoveData(Grap) {
    let Gra = document.getElementById('graphSelect').value;
    if (Gra === 'ALL')
        for (let i = 1; i < Graph.data.datasets.length; i++)
        Graph.data.datasets.splice(i, 1, {});
    else
        Graph.data.datasets.splice(Gra, 1, {});
    Graph.update();
    graphPushAll();
}
