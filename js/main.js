var $userSearch = $("#user-search");
var $messageBody = $("#message-body");
var $alert = $("#alert");
var $alertMessage = $("#alert-message");

var illuminateNotification = function () {
    $("#notification-circle").show();
    $("#notification-bell").removeClass("notification-bell-dimmed").addClass("notification-bell-illuminated");
};

var dimNotification = function () {
    $("#notification-circle").hide();
    $("#notification-bell").removeClass("notification-bell-illuminated").addClass("notification-bell-dimmed");
};

// ****************
// Graph Canvases *
// ****************

var lineGraph = document.getElementById("line-graph").getContext("2d");
var barGraph = document.getElementById("bar-graph").getContext("2d");
var pieChart = document.getElementById("pie-chart").getContext("2d");


// *******************
// Message User Form *
// *******************

var validateFormFields = function() {

    var isValid = true;

    if($userSearch.val() == null || $userSearch.val() == "") {
        isValid = false;

        $userSearch.css({
            "border-color": "tomato"
        });

    } else if($messageBody.val() == null || $messageBody.val() == "") {
        isValid = false;

        $messageBody.css({
            "border-color": "tomato"
        });

    }

    return isValid;
};

var showSuccessAlert = function () {
    $(".main-graph").css({
        "padding": "30px 0"
    });

    $alert.show().css({
        "background-color": "#81c98f"
    });

    illuminateNotification();
    
    $alertMessage.html("Your message was sent successfully!");
};

var showErrorAlert = function () {
    $(".main-graph").css({
        "padding": "30px 0"
    });

    $alert.show().css({
        "background-color": "tomato"
    });

    illuminateNotification();

    $alertMessage.html("Bummer! Your message was not sent. Please fill out the required fields");
};

var submitForm = function () {
    $("body").scrollTop(0);

    $userSearch.css({
        "border-color": "#d8d8d8"
    });

    $messageBody.css({
        "border-color": "#d8d8d8"
    });

    var isValid = validateFormFields();

    if(isValid) {
        showSuccessAlert();
    } else {
        showErrorAlert();
    }
};

$("#send-message").click(function(event) {
    event.preventDefault();

    submitForm();
});



// *******
// Alert *
// *******

$("#close-alert").click(function() {
    $alert.hide();
    $(".main-graph").css({
      "padding": "50px 0"
    });
    dimNotification();
});



// ****************
// Line Graph Nav *
// ****************

$(".line-graph-nav li").on("click", function() {
    $(this).addClass("line-graph-selected");
    $(this).siblings().removeClass();
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















