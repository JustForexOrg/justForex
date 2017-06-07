import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Ng2Highstocks } from 'ng2-highcharts';

@Component({
  selector: 'graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})

export class GraphsComponent implements OnInit {
	chartOptions = {
		chart: {
			type: 'line'
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
	};
	chartBar = {
		chart: {
			type: 'column'
		},
		xAxis: {
			categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		},
		series: [
			{
				name: 'NC',
				data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
			}, {
				name: 'OK',
				data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
			}, {
				name: 'KO',
				data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
			}, {
				name: 'VALID',
				data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
			}, {
				name: 'CHECK',
				data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
			}, {
				name: 'COR',
				data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
			}
		]
	};
	chartMap = {};
	mapData = [
		{
			'code': 'DE.SH',
			'value': 728
		},
		{
			'code': 'DE.BE',
			'value': 710
		},
		{
			'code': 'DE.MV',
			'value': 963
		},
		{
			'code': 'DE.HB',
			'value': 541
		},
		{
			'code': 'DE.HH',
			'value': 622
		},
		{
			'code': 'DE.RP',
			'value': 866
		},
		{
			'code': 'DE.SL',
			'value': 398
		},
		{
			'code': 'DE.BY',
			'value': 785
		},
		{
			'code': 'DE.SN',
			'value': 223
		},
		{
			'code': 'DE.ST',
			'value': 605
		},
		{
			'code': 'DE.',
			'value': 361
		},
		{
			'code': 'DE.NW',
			'value': 237
		},
		{
			'code': 'DE.BW',
			'value': 157
		},
		{
			'code': 'DE.HE',
			'value': 134
		},
		{
			'code': 'DE.NI',
			'value': 136
		},
		{
			'code': 'DE.TH',
			'value': 704
		}
	];
	chartStock = {};

	constructor(private http: Http) { }

	ngOnInit(): any {
		setInterval(() => {
			this.chartOptions = {
				chart: {
					type: 'line'
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
					data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
				}, {
						name: 'John',
						data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
					}]
			};
		}, 3000);

		//Stock
		 this.http.get('../../../assets/aapl-c.json').subscribe(
			(aaplc: any) => {
				this.chartStock = {
					rangeSelector: {
						selected: 1
					},
					title: {
						text: 'AAPL Stock Price'
					},
					series: [{
						name: 'AAPL',
						data: aaplc.json(),
						tooltip: {
							valueDecimals: 2
						}
					}]
				};
			},
			(err: any) => {
				console.error('Somethin went wrong', err);
			}
		);

		//Map
		this.http.get('./assets/geojson.json').subscribe(
			(geojson: any) => {
				this.chartMap = {
					title: {
						text: 'GeoJSON in Highmaps'
					},
					mapNavigation: {
						enabled: true,
						buttonOptions: {
							verticalAlign: 'bottom'
						}
					},
					colorAxis: {
					},
					series: [{
						data: this.mapData,
						mapData: geojson.json(),
						joinBy: ['code_hasc', 'code'],
						name: 'Random data',
						states: {
							hover: {
								color: '#BADA55'
							}
						},
						dataLabels: {
							enabled: true,
							format: '{point.properties.postal}'
						}
					}]
				};
			},
			(err: any) => {
				console.error('Somethin went wrong', err);
			}
		);

}
  seriesOptions = [];
  seriesCounter = 0;
  names = ['MSFT', 'AAPL', 'GOOG'];

  bot = {
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

    ele: 'https://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?',

    series: this.seriesOptions
  }

  ttpc = {
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
  }

  btpc = {
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
  }

    stpc = {
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
    }
}
