import { Injectable } from '@angular/core';
import { CaloricRequirement } from '../model/caloric-requirement';

@Injectable({
  providedIn: 'root'
})
export class CaloricRequirementService {

  constructor() { }

  getCaloricRequirementForMale(person:CaloricRequirement) {
    return (66.5 + (13.75 * person.weight) + (5.003 * person.height) - (6.75 * person.age)) * person.pal;
  }

  getCaloricRequirementForFemale(person:CaloricRequirement) {
    return (655.1 + (9.563 * person.weight) + (1.85 * person.height) - (4.676 * person.age)) * person.pal;
  }
}
