import { Component, OnInit } from '@angular/core';
import { CalorieService } from '../services/calorie.service';

@Component({
  selector: 'app-calorie-counter',
  templateUrl: './calorie-counter.component.html',
  styleUrls: ['./calorie-counter.component.css']
})
export class CalorieCounterComponent implements OnInit {
  selectedNahrungsmittel:string = '';
  nahrungsmittel:any[] = [];

  constructor(private calorieService: CalorieService) { }

  ngOnInit(): void {
  }


}
