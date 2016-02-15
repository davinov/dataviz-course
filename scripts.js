// Highcharts example

$(function () { 
    $('#highchart-container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});

var chart1; // globally available
$(function() {
  chart1 = new Highcharts.StockChart({
      chart: {
        renderTo: 'highchart-container'
      },
      rangeSelector: {
        selected: 1
      },
      series: [{
        name: 'USD to EUR',
        data: usdtoeur // predefined JavaScript array
      }]
  });
});
