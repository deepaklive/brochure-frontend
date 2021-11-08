import { Component, OnInit } from '@angular/core';
import { ChartType, ChartEvent } from 'ng-chartist';
declare var require: any;

const data= require('./data.json');

export interface Chart {
	type: ChartType;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent;
}


@Component({
  selector: 'app-tri-services',
  templateUrl: './tri-services.component.html',
  styleUrls: ['./tri-services.component.css']
})
export class TriServicesComponent implements OnInit {

  donuteChart1: Chart = {
		type: 'Pie',
		data: data['Pie'],
		options: {
			donut: true,
			height: 260,
			showLabel: false,
			donutWidth: 20
		}
	};

  constructor() { }

  ngOnInit(): void {
  }

}
