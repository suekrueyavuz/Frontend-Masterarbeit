import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class CalorieService {
  BASE_URL:string = 'https://trackapi.nutritionix.com/v2/';
  private APP_ID:string = '090dae06';
  private APP_KEY:string = '0718f36e649948a9cb4dc897363634a7';

  constructor(private http: HttpClient) { }

  autocomplete(nahrungsmittel:string) {
    const headers = this.getHeaders();
    return this.http.get<Food>(this.BASE_URL + 'search/instant?query=' + nahrungsmittel, {headers});
  }

  getHeaders() {
    const headers = {
      'x-app-id': '090dae06',
      'x-app-key': '0718f36e649948a9cb4dc897363634a7'
    }
    return headers;
  }
}
