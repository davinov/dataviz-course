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

// NVD3 example
/**************************************
 * Simple test data generator
 */
function data(groups, points) {
  var data = [],
      shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
      random = d3.random.normal();

  for (i = 0; i < groups; i++) {
    data.push({
      key: 'Group ' + i,
      values: []
    });

    for (j = 0; j < points; j++) {
      data[i].values.push({
        x: random()
      , y: random()
      , size: Math.random()
      //, shape: shapes[j % 6]
      });
    }
  }

  return data;
}

nv.addGraph(function() {
  var chart = nv.models.scatterChart()
                .showDistX(true)
                .showDistY(true)
                .color(d3.scale.category10().range());

  chart.xAxis.tickFormat(d3.format('.02f'));
  chart.yAxis.tickFormat(d3.format('.02f'));

  d3.select('#nvd3-chart svg')
      .datum(data(4,40))
    .transition().duration(500)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});


// Public API example
d3.json('in-theaters.json', function(err, data) {
  $('#public-api-data').text(JSON.stringify(data, null, 2));
  
  var curatedData = _(data.data.inTheaters)
    .map('movies')
    .flatten()
    .map(function(movie){
      return {
        votes: movie.votes,
        title: movie.title,
        metascore: +movie.metascore,
        filmingLocationsCount: movie.filmingLocations.length 
      };
    })
    .sortBy(function(movie) {return - movie.metascore})
    .value()
    
    $('#public-api-data-curated').text(JSON.stringify(curatedData, null, 2));
});
