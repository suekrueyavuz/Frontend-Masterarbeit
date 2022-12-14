import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Food } from 'src/app/model/food';
import { CalorieService } from 'src/app/services/calorie.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  selectedNahrungsmittel?:Food;
  selectedNahrungsmittelList:Food[] = [];
  nahrungsmittel:Food[] = [];
  totalCalorie:number = 0;
  @Output() totalCalorieChange = new EventEmitter<Food>();

  constructor(private calorieService: CalorieService) {}

  ngOnInit(): void {}

  autocomplete(event:any) {
    this.calorieService.autocomplete(event.query).subscribe((data: any) => {
      this.nahrungsmittel = data.common;
    });
  }

  nahrungsmittelHinzufuegen() {
    if(this.selectedNahrungsmittel) {
      this.calorieService.getNutrients(this.selectedNahrungsmittel?.food_name).subscribe((data:any) => {
        if(this.selectedNahrungsmittel) {
          this.selectedNahrungsmittel.calorie = data.foods[0].nf_calories;
          this.selectedNahrungsmittel.carbohydrate = data.foods[0].nf_total_carbohydrate;
          this.selectedNahrungsmittel.protein = data.foods[0].nf_protein;
          this.selectedNahrungsmittel.fat = data.foods[0].nf_total_fat;
          this.selectedNahrungsmittelList.push(this.selectedNahrungsmittel);
          this.decrementCalorie(this.selectedNahrungsmittel);
        }
      })
    }
  }

  decrementCalorie(nahrungsmittel:Food) {
    this.totalCalorie += nahrungsmittel.calorie;
    this.totalCalorieChange.emit(nahrungsmittel);
    this.selectedNahrungsmittel = null!;
  }

}
