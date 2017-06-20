import { Component, OnInit } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Ng2Highstocks } from 'ng2-highcharts';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})

export class GraphsComponent implements OnInit {

  // private jData: String[];

	// chartOptions = {
	// 	chart: {
	// 		type: 'line'
	// 	},
	// 	title: {
	// 		text: 'Fruit Consumption'
	// 	},
	// 	xAxis: {
	// 		categories: ['Apples', 'Bananas', 'Oranges']
	// 	},
	// 	yAxis: {
	// 		title: {
	// 			text: 'Fruit eaten'
	// 		}
	// 	},
	// 	series: [{
	// 		name: 'Jane',
	// 		data: [1, 0, 4]
	// 	}, {
	// 			name: 'John',
	// 			data: [5, 7, 3]
	// 		}]
	// };

  chartStock = {};
  winLoss = {};
  vot = {};

	constructor(private http: Http, private projectsService: ProjectsService) { }

	ngOnInit(): any {

    //Balance over time
		 this.http.get('../../../assets/aapl-c.json').subscribe(
      // this.http.get('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?').subscribe(
			// this.jsonp.request('https://www.doc.ic.ac.uk/~dsg115/test.php?callback=?').subscribe(
			(bot: any) => {
				this.chartStock = {
					rangeSelector: {
						selected: 1
					},
					title: {
						text: 'Balance'
					},
					series: [{
						name: 'Balance',
						data: bot.json(),
						tooltip: {
							valueDecimals: 2
						}
					}]
				};
			},
			(err: any) => {
				console.error('BOT broken', err);
			}
		);


    this.http.get('../../../assets/winLoss.json').subscribe(
     (winLoss: any) => {
       this.winLoss = {
         chart: {
           type: 'columnrange'
         },
         rangeSelector: {
           selected: 2
         },
         title: {
           text: 'Win/Loss'
         },
         tooltip: {
              valueSuffix: '$'
         },
         series: [{
           name: 'Win/Loss',
           data: winLoss.json()
          //  tooltip: {
          //    valueDecimals: 2
          //  }
         }]
       };
     },
     (err: any) => {
       console.error('WinLoss graph broken', err);
     }
   );


   this.http.get('../../../assets/vot.json').subscribe(
    (vol: any) => {
      this.vot = {
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
            data: vol.json(),
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
      };
    },
    (err: any) => {
      console.error('WinLoss graph broken', err);
    }
  );




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

    sendFileBacktest(id:string) {
      var code:string = JSON.stringify(this.projectsService.getProject(id));

			// send to python backtester
			var headers = new Headers();
			headers.append('Content-Type', 'application/json');
			console.log("sending to backtester...")
			//respose from the result of a post is the data needed for the graph
			var data = this.http.post('http://www.justforex.xyz/pythonbacktester', code, {headers: headers})
		           .map(res => res.json());
			console.log(JSON.stringify(data) + " sent to backtester...")
			//send this data to graphsData DB
			this.http.post('/data', JSON.stringify(data), {headers: headers})
							.map(res => res.json());
    }

}
