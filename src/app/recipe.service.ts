import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) { }
  appId = 'b0e24d6e';
  appKey = 'bc2c16912ddb0040c965fda45160f4fa';
  apiURL = 'https://api.edamam.com/search';
  getRecipe(ingredient) {
    const recipeUrl = this.apiURL + '?q=' + ingredient + '&app_id=' + this.appId + '&app_key=' + this.appKey + '&from=0&to=3000';
    return this.http.get(recipeUrl);
  }
}



