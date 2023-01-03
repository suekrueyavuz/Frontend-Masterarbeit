import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CaloricRequirementService } from 'src/app/services/caloric-requirement.service';
import { CaloricRequirement } from '../../model/caloric-requirement';

@Component({
  selector: 'app-caloric-requirement',
  templateUrl: './caloric-requirement.component.html',
  styleUrls: ['./caloric-requirement.component.css']
})
export class CaloricRequirementComponent implements OnInit {
  public form:FormGroup;
  submitted: boolean = false;
  showResult: boolean = false;
  caloricRequirement:number = 0;

  activityLevels: any[] = [];

  constructor(private caloricRequirementService:CaloricRequirementService,
              private fb:FormBuilder) {
    this.form = fb.group({
      gender:[null , Validators.required],
      age:[null , Validators.required],
      weight:[null , Validators.required],
      height:[null , Validators.required],
      activityLevel:[null , Validators.required]
    })
    this.activityLevels = [
      {activityLevel: 'Sedentary (little or no exervise)', pal: 1.2},
      {activityLevel: 'Lightly active', pal: 1.375},
      {activityLevel: 'Moderately active', pal: 1.55},
      {activityLevel: 'Very active', pal: 1.725},
      {activityLevel: 'Extra active', pal: 1.9}
    ];
  }

  ngOnInit(): void {}

  getCaloricRequirements() {
    if(this.form.valid) {
      this.showResult = true;
    }
    this.submitted = true;
    const person = new CaloricRequirement(this.form.value.gender, this.form.value.age, this.form.value.weight, this.form.value.height, this.form.value.activityLevel.pal);
    this.caloricRequirement = this.caloricRequirementService.getCaloricRequirements(person);
  }

}
