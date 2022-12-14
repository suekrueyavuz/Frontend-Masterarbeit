import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';

@Component({
  selector: 'app-calorie-counter',
  templateUrl: './calorie-counter.component.html',
  styleUrls: ['./calorie-counter.component.css']
})
export class CalorieCounterComponent implements OnInit {
  total_fat:number = 0;
  total_carbohydrate:number = 0;
  total_protein:number = 0;
  chartData:any;

  constructor() { }

  ngOnInit(): void {
    this.updateChartData();
  }

  updateNutrients(event:Food) {
    this.total_fat += event.fat;
    this.total_carbohydrate += event.carbohydrate;
    this.total_protein += event.protein;
    this.updateChartData();
  }

  updateChartData() {
    this.chartData = {
      labels: ['Carbohydrate','Protein','Fat'],
      datasets: [
          {
              data: [this.total_carbohydrate, this.total_protein, this.total_fat],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
    };
  }

}
