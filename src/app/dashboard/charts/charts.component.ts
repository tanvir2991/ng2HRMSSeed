import {Component, OnInit } from '@angular/core';
import {GoogleChartComponent} from '../../google-chart/google-chart.component';


@Component({

  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {



  public pie_ChartData = [
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7] ];
  public pie_ChartOptions  = {
    title: 'My Daily Activities',
    width: 900,
    height: 500
  };

  constructor() {

  }

  ngOnInit() {





  }

}
