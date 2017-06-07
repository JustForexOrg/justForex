
var seriesOptions = [],
  seriesCounter = 0,
  names = ['MSFT', 'AAPL', 'GOOG'];

/**
* Create the chart when all data is loaded
* @returns {undefined}
*/
function createChart() {

    Highcharts.stockChart('bot', {

        rangeSelector: {
            selected: 4
        },

        yAxis: {
            labels: {
                formatter: function () {
                    return (this.value > 0 ? ' + ' : '') + this.value + '%';
                }
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },

        title: {
            text: 'Balance Over Time'
        },

        plotOptions: {
            series: {
                compare: 'percent',
                showInNavigator: true
            }
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
            valueDecimals: 2,
            split: true
        },

        series: seriesOptions
    });
}

$.each(names, function (i, name) {

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=' + name.toLowerCase() + '-c.json&callback=?',    function (data) {

        seriesOptions[i] = {
            name: name,
            data: data
        };

        // As we're loading the data asynchronously, we don't know what order it will arrive. So
        // we keep a counter and create the chart when all the data is loaded.
        seriesCounter += 1;

        if (seriesCounter === names.length) {
            createChart();
        }
    });
});


// Notice that the dataset has missing data
$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

  Highcharts.stockChart('winloss', {

      chart: {
          type: 'columnrange'
      },

      rangeSelector: {
          selected: 2
      },

      title: {
          text: 'Win/Loss'
      },

// need to pick currency
      tooltip: {
          valueSuffix: '°C'
      },

      series: [{
          name: 'Balance',
          data: data
      }]

  });
});

$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-v.json&callback=?', function (data) {
// $.getJSON('https://www.doc.ic.ac.uk/~dsg115/test.php?callback=?', function (data) {
//  $.getJSON('test.json', function (data) {

// create the chart
Highcharts.stockChart('vol', {
    chart: {
        alignTicks: false
    },

    rangeSelector: {
        selected: 1
    },

    title: {
        text: 'Volume of Transactions'
    },

    series: [{
        type: 'column',
        name: 'Volume',
        data: data,
        dataGrouping: {
            units: [[
                'day', // unit name
                [1] // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]]
        }
    }]
});
});

<!-- TODO: Need to be able to choose the time period -->
<!-- TODO: Also need to be able to choose the currencies -->

$(document).ready(function () {

  // Build the chart
  Highcharts.chart('tpc', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Total Transactions per Currency'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
                  name: 'USD',
                  y: 56.33
              }, {
                  name: 'GBP',
                  y: 24.03,
                  sliced: true,
                  selected: true
              }, {
                  name: 'JPY',
                  y: 10.38
              }, {
                  name: 'EUR',
                  y: 37.5
              }]
      }]
  });
});

$(document).ready(function () {

  // Build the chart
  Highcharts.chart('tspc', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Selling Transactions per Currency'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
                  name: 'USD',
                  y: 32.33
              }, {
                  name: 'GBP',
                  y: 14,
                  sliced: true,
                  selected: true
              }, {
                  name: 'JPY',
                  y: 6.38
              }, {
                  name: 'EUR',
                  y: 12
              }]
      }]
  });
});


$(document).ready(function () {

  // Build the chart
  Highcharts.chart('tbpc', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Buying Transactions per Currency'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
                  name: 'USD',
                  y: 24
              }, {
                  name: 'GBP',
                  y: 10.03,
                  sliced: true,
                  selected: true
              }, {
                  name: 'JPY',
                  y: 4
              }, {
                  name: 'EUR',
                  y: 21.5
              }]
      }]
  });
});
