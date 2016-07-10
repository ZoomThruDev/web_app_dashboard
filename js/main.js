// ****************
// Graph Canvases *
// ****************

var lineGraph = document.getElementById("line-graph").getContext("2d");
var barGraph = document.getElementById("bar-graph").getContext("2d");
var pieChart = document.getElementById("pie-chart").getContext("2d");



// *******
// Alert *
// *******

$("#close-alert").click(function() {
   $("#alert").hide();
   $(".main-graph").css({
      "padding": "50px 0"
   });
   $("#notification-circle").hide();
   $("#notification-bell").css({
       "fill": "#a6a6b9"
   });
});


// ************
// Line Graph *
// ************

var webTrafficData = {
    labels: ["", "16 - 22", "23 - 29", "30 - 5", "6 - 12", "13 - 19", "20 - 26", "27 - 3", "4 - 10", "11 - 17", "18 - 24", "25 - 31"],
    datasets: [
        {
            label: "Weekly web Traffic",
            data: [0, 500, 1000, 750, 1250, 750, 1500, 1000, 1500, 2000, 1500, 2000],
            backgroundColor: [
                'rgba(116, 119, 191, 0.2)'
            ],
            borderColor: [
                'rgba(116, 119, 191, 1)'
            ],
            pointBorderColor: "rgba(116, 119, 191, 1)",
            pointBackgroundColor: "#fff",
            pointRadius: 5,
            borderWidth: 1,
            lineTension: 0
        }
    ]
};

var webTrafficChart = new Chart(lineGraph, {
    type: "line",
    data: webTrafficData,
    options: {
        legend: {
            display: false
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    min: 0,
                    max: 2500,
                    stepSize: 500
                }
            }]
        }
    }
});



// ***********
// Bar Graph *
// ***********

var dailyTrafficData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "Daily Traffic",
            backgroundColor: 'rgba(116, 119, 191, 1)',
            borderColor: 'rgba(116, 119, 191, 1)',
            borderWidth: 1,
            data: [50, 75, 150, 100, 200, 175, 75]
        }
    ]
};

var dailyTrafficChart = new Chart(barGraph, {
    type: 'bar',
    data: dailyTrafficData,
    options: {
        legend: {
            display: false
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    min: 0,
                    max: 250,
                    stepSize: 50
                }
            }]
        }
    }
});



// ***********
// Pie Chart *
// ***********

var mobileUsersData = {
    labels: [
        "Phones",
        "Tablets",
        "Desktop"
    ],
    datasets: [
        {
            data: [14, 16, 70],
            backgroundColor: [
                "#74b1bf",
                "#81c98f",
                'rgba(116, 119, 191, 1)'
            ]
        }]
};

var mobileUsersChart = new Chart(pieChart, {
    type: 'doughnut',
    data: mobileUsersData,
    options: {
        legend: {
            display: true,
            labels: {
                boxWidth: 30,
                fontSize: 15
            }
        },
        responsive: true,
        elements: {
            arc: {
                borderWidth: 0
            }
        }
    }
});















