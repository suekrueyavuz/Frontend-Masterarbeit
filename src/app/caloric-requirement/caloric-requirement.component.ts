import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caloric-requirement',
  templateUrl: './caloric-requirement.component.html',
  styleUrls: ['./caloric-requirement.component.css']
})
export class CaloricRequirementComponent implements OnInit {
  gender!:string;
  age!:number;
  weight!:number;
  height!:number;
  selectedActivityLevel!:any;

  activityLevels: any[] = [];

  constructor() {
    this.activityLevels = [
      {activityLevel: 'only sitting/lying down', pal: 1.2},
      {activityLevel: 'few physical leisure activities', pal: 1.4},
      {activityLevel: 'occasionally walking or standing', pal: 1.6},
      {activityLevel: 'mainly walking or standing', pal: 1.8},
      {activityLevel: 'physically demanding activities', pal: 2}
    ];
  }

  ngOnInit(): void {}
}
