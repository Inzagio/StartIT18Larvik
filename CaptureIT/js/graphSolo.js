
var Graph;
var graphAddPerson;
var graphData;
function graphDrawSolo() {
    var html = document.getElementById('graphSoloContainer');
    if ($(window).width() < 650) {
        html.innerHTML = '<canvas height="100%" width="100%" id="myChart"></canvas>';
    }
    else {
        html.innerHTML = '<canvas id="myChart"></canvas>';
    }
    drawGraph();
}

function drawGraphSolo() {
    let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    Graph = new Chart(myChart, {
        type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ['1'],
            datasets: [
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
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
    graphAddData()
}


function graphAddDataSolo() {
    // Creates container element if it has been removed.
    var container = getContainer();

    database.getUserInfo(currentUser.uid).then(user => {
        database.getTransactions(user.data().place).then(querySnapshot => {
            querySnapshot.forEach(function (item, index) {
                graphShowRowSolo(table, item, index);
            });
        });
    });
}
// Fill table data
function graphShowRowSolo(table, item, index) {
    let person = item.data();
    person.user.get().then(name => {
        var newDataset = {
            label: name.data().name,
            data: [],
            backgroundColor: ['rgba(255, 99, 132, 0.6)'],
            borderWidth: 3,
            borderColor: '#777',
            fill: false,
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }
        for (let i = 0; i < name.data().WeekData.length; i++)
            newDataset.data.push(name.data().WeekData[i]);
        Graph.data.datasets[0] = newDataset;
        graphPush();
        function graphPush(tag) {
            for (let i = 0; i < Graph.data.datasets[0].data.length; i++)
                Graph.data.labels[i] = (i + 1);

            Graph.update();
        }
    });
}
