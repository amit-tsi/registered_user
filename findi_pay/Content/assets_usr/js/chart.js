$(function () {
    /* ChartJS
     * -------
     * Data and config for chartjs
     */
    'use strict';

    var topUpWiseData = {
        datasets: [{
            data: [30, 22, 25, 23],
            backgroundColor: [
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 165, 0, 0.5)',
                'rgba(255,192,203, 0.5)'
            ],
            borderColor: [
                'rgba(0, 255, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 165, 0, 1)',
                'rgba(255,192,203, 1)'
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Cash',
            'Online',
            'QR Code',
            'IMPS/NEFT',
        ]
    };

    var USPWiseData = {
        datasets: [{
            data: [25, 32, 35, 8],
            backgroundColor: [
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 165, 0, 0.5)',
                'rgba(255,192,203, 0.5)'
            ],
            borderColor: [
                'rgba(0, 255, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 165, 0, 1)',
                'rgba(255,192,203, 1)',
                'rgba(255,192,203, 1)',
                'rgba(255,192,203, 1)'
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'AePS',
            'DMT',
            'BBPS',
            'INMT',
        ]
    };
    var MerchantWiseData = {
        datasets: [{
            data: [30, 40, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Pink',
            'Blue',
            'Yellow',
        ]
    };

    var doughnutPieOptions = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };




    // Get context with jQuery - using jQuery's .get() method.







    if ($("#USPpieChart").length) {
        var pieChartCanvas = $("#USPpieChart").get(0).getContext("2d");
        var pieChart = new Chart(pieChartCanvas, {
            type: 'pie',
            data: USPWiseData,
            options: doughnutPieOptions
        });
    }

    if ($("#pieChart").length) {
        var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
        var pieChart = new Chart(pieChartCanvas, {
            type: 'pie',
            data: topUpWiseData,
            options: doughnutPieOptions
        });
    }
    if ($("#merchentwiseChart").length) {
        var doughnutChartCanvas = $("#merchentwiseChart").get(0).getContext("2d");
        var doughnutChart = new Chart(doughnutChartCanvas, {
            type: 'doughnut',
            data: MerchantWiseData,
            options: doughnutPieOptions
        });
    }





});